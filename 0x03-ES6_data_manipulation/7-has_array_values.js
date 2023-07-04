export default function hasValuesFromArray(set, array) {
  let check = true;
  for (let i = 0; i < array.length; i += 1) {
    if (!set.has(array[i])) {
      check = false;
    }
  }
  if (check) {
    return true;
  }
  return false;
}
