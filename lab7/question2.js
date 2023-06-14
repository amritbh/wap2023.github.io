

/** 
Question 2: Fix the code below using bind
Fix the code below using 4 ways: bind, call , apply, 
self pattern, so that the console is shown:
undefined: John
undefined: Pete
undefined: Alice
*/

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach(function (student) {
//       console.log(this.title + ": " + student);
//     });
//   },
// };
// group.showList();

//Solution using bind
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach(
//       function (student) {
//         console.log(this.title + ": " + student);
//       }.bind(this)// Using bind to bind the outer 'this' to the inner function
//     );
//   },
// };
//group.showList();

//solution using call
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//       this.students.forEach(function(student) {
//         console.log(this.title + ": " + student);
//       }, this); // Using call to set the 'this' value explicitly
//     },
//   };
//   group.showList();
  
//solution using apply
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//       this.students.forEach(function(student) {
//         console.log(this.title + ": " + student);
//       }.apply(this)); // Using apply to set the 'this' value
//     },
//   };
//   group.showList();
  
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
      const self = this; // Assigning 'this' to a variable (self)
      this.students.forEach(function(student) {
        console.log(self.title + ": " + student);
      });
    },
  };
  group.showList();
  


  
 

const students = [
  { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
  { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
  { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
  { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
  { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
];