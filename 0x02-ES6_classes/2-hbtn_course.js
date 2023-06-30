export default class HolbertonCourse {
  constructor(name, length, students) {
    if (Object.getPrototypeOf(name) !== String.prototype) {
      throw TypeError('Name must be a string');
    }
    if (Object.getPrototypeOf(length) !== Number.prototype) {
      throw TypeError('Length must be a number');
    }
    if (Object.getPrototypeOf(students) !== Array.prototype) {
      throw TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter name
  get name() {
    return this._name;
  }

  // Setter name
  set name(newName) {
    if (typeof (newName) !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter length
  get length() {
    return this._length;
  }

  // Setter length
  set length(newLength) {
    if (typeof (newLength) !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter students
  get students() {
    return this._students;
  }

  // Setter students
  set students(newStu) {
    if (typeof (newStu) !== 'object') {
      throw TypeError('Srudents must be an array of strings');
    }
    this._students = newStu;
  }
}
