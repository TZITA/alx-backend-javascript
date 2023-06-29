export default class HolbertonCourse {
  constructor(name, length, students) {
    if (Object.typeof(name) !== 'string') {
      throw TypeError('Name must be a string');
    } else if (Object.typeof(length) !== 'number') {
      throw TypeError('Length must be a number');
    } else if (Object.typeof(students) !== 'array') {
      throw TypeError('Students must be an array');
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
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
    this._students = newStu;
  }
}
