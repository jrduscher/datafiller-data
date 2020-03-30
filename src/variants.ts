export function getVariants<T extends Row>(row: T): string[] {
  const others =
    (row.variants && row.variants.split("\n").map(variant => variant.trim())) ||
    [];
  const variants = [row.title && row.title.replace("-", " ").trim()]
    .concat(others)
    .filter(Boolean);
  return [...new Set(variants)];
}

type Row = {
  title: string;
  variants?: string;
};
