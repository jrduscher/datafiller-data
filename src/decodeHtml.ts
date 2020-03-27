/**
 * Custom fucntion since _.unescape support less characters
 */
const entities = {
  amp: "&",
  apos: "'",
  "#x27": "'",
  "#x2F": "/",
  "#39": "'",
  "#47": "/",
  lt: "<",
  gt: ">",
  nbsp: " ",
  quot: '"'
};

export function decodeHTML(text): string {
  return text.replace(
    /&([^;]+);/gm,
    (match: string, entity: string) => entities[entity] || match
  );
}
