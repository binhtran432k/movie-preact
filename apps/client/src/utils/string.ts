export function truncateString(txt: string, n: number) {
  if (txt.length > n) {
    return `${txt.slice(0, n - 3)}...`;
  }
  return txt;
}
