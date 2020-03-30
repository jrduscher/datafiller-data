import { processExternalDocs } from "../externalDocs";

test("processExternalDocs", () => {
  const input = [
    { title: "empty url", urls: "\n \n" },
    { title: "title", urls: "url.a\n url.b\n \nurl.c" }
  ];
  expect(processExternalDocs(input)).toEqual([
    {
      title: "title",
      urls: ["url.a", "url.b", "url.c"]
    }
  ]);
});
