export default function getListStudentIds(arg1) {
  if (!(arg1 instanceof Array)) {
    return [];
  }
  const arr = arg1.map((ids) => ids.id);
  return arr;
}
