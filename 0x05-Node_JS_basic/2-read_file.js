const fs = require('fs');

function countStudents(filepath) {
  let content;
  try {
    content = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const records = content.split('\n');
  const csl = [];
  const sl = [];

  records.forEach((record) => {
    const field = record.split(',');
    if (field !== [] && field !== null) {
      if (field[3] === 'CS') {
        csl.push(field[0]);
      } else if (field[3] === 'SWE') {
        sl.push(field[0]);
      }
    }
  });
  console.log(`Number of students: ${csl.length + sl.length}`);
  console.log(`Number of students in CS: ${csl.length}. List: ${csl.join(', ')}`);
  console.log(`Number of students in SWE: ${sl.length}. List: ${sl.join(', ')}`);
}

module.exports = countStudents;
