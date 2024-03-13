interface Student {
    firstName: string;
    lastName: string;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'Sans'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    location: 'Sans'
}

const studentList: Student[] = [student1, student2];

function createTable(studentList: Student[]) {
    const table = document.createElement('table');
    for (let student of studentList) {
        const row = document.createElement('tr');
        const cells = [document.createElement('td'), document.createElement('td')];
        cells[0].innerText = student.firstName;
        cells[1].innerText = student.location;
        row.appendChild(cells[0]);
        row.appendChild(cells[1])
        table.appendChild(row);
    }
    document.body.appendChild(table);
    return table;
}