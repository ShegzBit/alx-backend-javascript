export default class HolbertonCourse {
  static raiseError(arg) {
    if (arg === 'name') { throw new Error('Name must be a string'); } else if (arg === 'length') { throw new Error('Length must be a number'); } else { throw new Error('Students must be an array'); }
  }

  constructor(name, length, students) {
    this._name = (typeof (name) === 'string') ? name : HolbertonCourse.raiseError('name');
    this._length = (typeof (length) === 'number') ? length : HolbertonCourse.raiseError('length');
    this._students = (students instanceof Array) ? students : HolbertonCourse.raiseError('students');
  }

  get name() { return this._name; }

  set name(newValue) { this._name = (typeof (newValue) === 'string') ? newValue : HolbertonCourse.raiseError('name'); }

  get length() { return this._length; }

  set length(value) { this._length = (typeof (value) === 'number') ? value : HolbertonCourse.raiseError('length'); }

  get students() { return this._students; }

  set students(value) { this._students = (value instanceof Array) ? value : HolbertonCourse.raiseError('students'); }
}
