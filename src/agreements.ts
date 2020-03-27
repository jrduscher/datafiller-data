import fetch from "node-fetch";
import { KintoResponse } from ".";

type AgreementsItem = {
  cid: string;
  groups?: ArticleGroup[];
};

type ArticleGroup = {
  id: string;
  selection: string[];
};

export async function getAgreementArticles(
  baseUrl: string
): Promise<AgreementsItem[]> {
  const response = await fetch(
    `${baseUrl}/kinto/v1/buckets/datasets/collections/ccns/records?_sort=cid`
  );
  const items: KintoResponse<AgreementsItem[]> = await response.json();
  return items.data
    .map(({ cid, groups }) => {
      return {
        cid,
        groups: (groups || []).filter(group => group.selection.length > 0)
      };
    })
    .filter(item => item.groups.length > 0);
}

if (require.main === module) {
  getAgreementArticles(`${process.env.DATAFILLER_URL}`)
    .then(data => {
      console.log(JSON.stringify(data, null, 2));
      console.error(`${data.length} ccn`);
    })
    .catch(error => console.error(error));
}
