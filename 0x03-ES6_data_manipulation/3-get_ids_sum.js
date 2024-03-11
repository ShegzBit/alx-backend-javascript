export default function getStudentIdsSum(objArray) {
  if (!(objArray instanceof Array)) { return []; }
  return objArray.map((obj) => obj.id).reduce((prev, curr) => (prev + curr), 0);
}
