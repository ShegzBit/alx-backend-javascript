export default function getListStudentIds (objArray) {
    if (!(objArray instanceof Array)) { return []; }
    return objArray.map((obj) => obj.id);
}