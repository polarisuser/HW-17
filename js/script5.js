let arr = ["Иван", "Иванов", "отдел разработки", "программист"];

let [name, surname, department, position] = arr;
console.log(name);
console.log(surname);
console.log(department);

if (position === undefined) {
  position = "джуниор";
}
console.log(position);
