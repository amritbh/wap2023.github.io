function Student(studentId) {
  this.studentId = studentId;
  this.answers = [];

  this.addAnswer = function (question) {
    this.answers.push(question);
  };
}

function Question(qid, answer) {
  this.qid = qid;
  this.answer = answer;

  this.checkAnswer = function (studentAnswer) {
    return studentAnswer === this.answer;
  };
}

function Quiz(questions, students) {
  this.questions = new Map();
  this.students = students;

  for (let i = 0; i < questions.length; i++) {
    this.questions.set(questions[i].qid, questions[i].answer);
  }

  this.scoreStudentBySid = function (studentId) {
    const student = this.students.find((s) => s.studentId === studentId);
    if (!student) {
      return "Student not found";
    }

    let score = 0;
    for (let i = 0; i < student.answers.length; i++) {
      const answer = student.answers[i];
      const correctAnswer = this.questions.get(answer.qid);
      if (correctAnswer && correctAnswer === answer.answer) {
        score++;
      }
    }

    return score;
  };

  this.getAverageScore = function () {
    let totalScore = 0;
    for (let i = 0; i < this.students.length; i++) {
      totalScore += this.scoreStudentBySid(this.students[i].studentId);
    }

    return totalScore / this.students.length;
  };
}

// Usage
const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));

const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));

const students = [student1, student2];
const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];

const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); // Expected Result: 3

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); // Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); // Expected Result: 2.5
