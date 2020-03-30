import { processGlossary } from "../glossary";

const input = [
  {
    title: "",
    abbrs: "",
    definition: "",
    variants: "",
    refs: []
  },
  {
    title: " Z title trimmed   ",
    abbrs: " ABR Trimmed   ",
    definition: "**bold text**",
    variants: "test\n  test\n variants   \n",
    refs: [
      {
        url: "url"
      }
    ]
  },
  {
    title: " A title trimmed   ",
    abbrs: " ABR Trimmed   ",
    definition: "# Hello \n   some markdown   \n",
    variants: "test\n  test\n variants   \n",
    refs: [
      {
        url: "url"
      }
    ]
  }
];

test("processGlossary", () => {
  expect(processGlossary(input)).toEqual([
    {
      title: "A title trimmed",
      abbrs: "ABR Trimmed",
      definition: "<h1>Hello</h1><p> some markdown </p>",
      variants: ["test", "variants"],
      refs: [{ url: "url" }]
    },
    {
      title: "Z title trimmed",
      abbrs: "ABR Trimmed",
      definition: "<p><strong>bold text</strong></p>",
      variants: ["test", "variants"],
      refs: [{ url: "url" }]
    }
  ]);
});
