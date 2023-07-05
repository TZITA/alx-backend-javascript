export default function cleanSet(set, startString) {
  if (!startString || typeof (startString) !== 'string') { return ''; }
  const wordsToMerge = [];

  for (const item of set) {
    if (item !== undefined && item.startsWith(startString)) {
      wordsToMerge.push(item.slice(startString.length));
    }
  }

  return wordsToMerge.join('-');
}
