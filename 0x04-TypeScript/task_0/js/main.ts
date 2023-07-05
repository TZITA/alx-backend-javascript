interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  location: 'Addis Ababa',
}

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 20,
  location: 'Adelaide',
}

const studentsList: Student[] = [student1, student2];

function renderTable() {
    const tableBody = document.querySelector('#myTable tbody');
  
    tableBody.innerHTML = '';
  
    studentsList.forEach((student) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.location}</td>
      `;
      tableBody.appendChild(row);
    });
  }

renderTable();