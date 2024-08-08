export default function toKebabCase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .toLowerCase();
}

export function kebabToTitleCase(kebabStr: string): string {
  return kebabStr
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
