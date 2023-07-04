export default function setFromArray(array) {
  const myset = new Set();
  for (const item of array) {
    myset.add(item);
  }
  return myset;
}
