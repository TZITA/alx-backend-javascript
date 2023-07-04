export default function updateStudentGradeByCity(students, city, newGrades) {
  const updated = students.filter((obs) => obs.location === city).map((ob) => {
    const matchedGrade = newGrades.find((gradeInfo) => ob.id === gradeInfo.studentId);
    return { ...ob, grade: matchedGrade ? matchedGrade.grade : 'N/A' };
  });

  return updated;
}
