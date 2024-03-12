export default function getStudentsByLocation(objArray, city) {
  if (!(objArray instanceof Array) || !(typeof (city) === 'string')) { return []; }
  return objArray.filter((obj) => obj.location === city);
}
