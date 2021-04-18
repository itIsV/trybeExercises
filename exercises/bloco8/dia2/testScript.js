const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

const isApproved = (array) => array.forEach((({grade}, index) => {
    grade >= 60 ? array[index].approved = 'Approved' : array[index].approved = 'Reproved';
    }
  )
);

isApproved(students);

console.log(students);