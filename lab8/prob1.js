const student = {
  firstName: "",
  lastName: "",
  grades: [],
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade() {
    return this.grades.reduce(
      (sum, current, index, array) => sum + current / array.length,
      0
    );
  },
};
const stu1 = Object.create(student);
stu1.firstName = "Sagar";
stu1.lastName = "GC";
stu1.inputNewGrade(84);
stu1.inputNewGrade(85);
stu1.inputNewGrade(86);
stu1.inputNewGrade(87);
const stu2 = Object.create(student);
stu2.firstName = "Amrit";
stu2.lastName = "Bhattarai";
stu2.inputNewGrade(87);
stu2.inputNewGrade(86);
stu2.inputNewGrade(85);
stu2.inputNewGrade(84);
const students = [stu1, stu2];
const result = students.reduce(
  (average, stu, index, array) =>
    average + stu.computeAverageGrade() / array.length,
  0
);
console.log(result);
