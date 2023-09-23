const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, records) => {
      if (err) reject(new Error('Cannot load the database'));
      else {
        const content = records.split('\n');
        const csl = [];
        const sl = [];

        content.forEach((record) => {
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
        resolve();
      }
    });
  });
}

module.exports = countStudents;
