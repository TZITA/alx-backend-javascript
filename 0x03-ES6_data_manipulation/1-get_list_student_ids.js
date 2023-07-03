export default function getListStudentIds(arg1) {
  if (typeof (arg1) !== 'object') {
    return [];
  }
  const arr = arg1.map((ids) => ids.id);
  return arr;
}
