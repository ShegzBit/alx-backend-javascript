export default function updateStudentGradeByCity(objArray, city, newGrades) {
  if (!(objArray instanceof Array && newGrades instanceof Array) || !(typeof (city) === 'string')) {
    return [];
  }
  return objArray.filter((obj) => obj.location === city)
    .map((obj) => {
      /* eslint-disable */
      obj.grade = (newGrades.find((gradeObj) => gradeObj.studentId === obj.id))?.grade;
      /* eslint-enable */
      obj.grade = (typeof (obj.grade) === 'number') ? obj.grade : 'N/A';
      return obj;
    });
}
