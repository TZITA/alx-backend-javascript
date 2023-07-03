export default function getStudentIdsSum(arg1) {
  const ids = arg1.map((ob) => ob.id);
  const sum = ids.reduce((a, b) => a + b);

  return sum;
}
