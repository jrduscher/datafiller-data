import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import * as pPipe from "p-pipe";

import { getSavedRequests } from "./savedRequests";
import { getGlossary } from "./glossary";
import { getHightlights } from "./highlights";
import { getThemes } from "./themes";
import { getAgreementArticles } from "./agreements";

const DATAFILLER_URL = process.env.DATAFILLER_URL || "";

export type KintoResponse<A> = {
  data: A;
};

export type Reference = {
  url: string;
  title?: string;
  position?: number;
};

const writeFile = promisify(fs.writeFile);

async function saveFile({ filename, data }): Promise<void> {
  await writeFile(
    path.join(__dirname, `../data/${filename}.json`),
    JSON.stringify(data, null, 2)
  );
  console.log(`› write ${filename}.json`);
}

const wrap = (dataFetcher: (u: string) => Promise<any>) => async (
  filename: string
): Promise<any> => ({
  filename,
  data: await dataFetcher(DATAFILLER_URL)
});

function toFix(value: number, nb = 2): number {
  const digit = Math.pow(10, nb);
  return Math.round(value * digit) / digit;
}

const config = {
  requests: getSavedRequests,
  glossary: getGlossary,
  hightlights: getHightlights,
  themes: getThemes,
  agreements: getAgreementArticles
};

async function main(): Promise<void> {
  const t0 = Date.now();
  if (!DATAFILLER_URL) {
    console.error(
      "DATAFILLER_URL  env is missing, you can provide it using DATAFILLER_URL=url yarn start"
    );
    process.exit(1);
  }
  const jobs = Object.entries(config).map(([file, fetchData]) => {
    const pipeline = pPipe(wrap(fetchData), saveFile);
    return pipeline(file);
  });
  await Promise.all(jobs);
  console.log(`››› Done in ${toFix((Date.now() - t0) / 1000)} s`);
}

main().catch(console.error);
