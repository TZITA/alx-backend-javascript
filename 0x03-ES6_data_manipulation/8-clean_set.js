export default function cleanSet(set, startString) {
  if (!startString) { return ''; }
  const wordsToMerge = [];

  for (const item of set) {
    if (item.startsWith(startString)) {
      wordsToMerge.push(item.slice(startString.length));
    }
  }

  return wordsToMerge.join('-');
}
