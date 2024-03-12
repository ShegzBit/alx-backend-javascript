export default function updateStudentGradeByCity(objArray, city, newGrades) {
  if (!(objArray instanceof Array && newGrades instanceof Array) || !(typeof (city) === 'string')) {
    return [];
  }
  const arrayCopy = objArray;
  return arrayCopy.filter((obj) => obj.location === city)
    .map((obj) => {
      const newObj = obj;
      const gradeObj = newGrades.find((gradeObj) => gradeObj.studentId === obj.id) || {};
      newObj.grade = (gradeObj.grade) ? gradeObj.grade : 'N/A';
      return newObj;
    });
}
