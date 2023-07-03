export default function getStudentsByLocation(students, city) {
  const filtered = students.filter((objs) => objs.location === city);
  return filtered;
}
