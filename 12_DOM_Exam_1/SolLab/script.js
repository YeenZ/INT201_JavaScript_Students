//####################################################################
//solution#1-create class and constructor functions for each object
class Course {
  constructor(courseId, courseTitle, credit, grade) {
    this._courseId = courseId;
    this._courseTitle = courseTitle;
    this._credit = credit;
    this._grade = grade;
  }
  get courseId() {
    return this._courseId;
  }
  get courseTitle() {
    return this._courseTitle;
  }
  get credit() {
    return this._credit;
  }
  get grade() {
    return this._grade;
  }
}

class Student {
  constructor(id, firstName, lastName, courses) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._registeredCourses = courses;
  }
  get id() {
    return this._id;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return this._firstName + " " + this._lastName;
  }
  get registeredCourses() {
    return this._registeredCourses;
  }
}

class Transcript {
  constructor(student) {
    this._student = student;
  }

  get student() {
    return this._student;
  }

  getGradeValue(grade) {
    switch (grade) {
      case "A":
      case "a":
        return 4;
      case "B+":
      case "b+":
        return 3.5;
      case "B":
      case "b":
        return 3;
      case "C+":
      case "c":
        return 2.5;
      case "C":
      case "c":
        return 2;
      case "D+":
      case "d+":
        return 1.5;
      case "D":
      case "d":
        return 1;
      case "F":
      case "f":
        return 0;
    }
  }
  getTotalCredits() {
    let regisCourses = this._student.registeredCourses;
    let totalCredits = 0;
    for (let i = 0; i < regisCourses.length; i++) {
      totalCredits += regisCourses[i].credit;
    }
    return totalCredits;
  }

  calculateGPA() {
    let regisCourses = this._student.registeredCourses;
    let totalGradeValue = 0;

    for (let i = 0; i < regisCourses.length; i++) {
      totalGradeValue =
        totalGradeValue +
        regisCourses[i].credit * this.getGradeValue(regisCourses[i].grade);
    }
    return (totalGradeValue / this.getTotalCredits()).toPrecision(3);
  }
}

class TranscriptReport {
  static printTranscript(transcript) {
    TranscriptReport.#updateStudentInfo(transcript.student);
    TranscriptReport.#updateRegisterCourses(
      transcript.student.registeredCourses
    );
    TranscriptReport.#updateCreditGradeSummary(transcript);
  }
  //Private instance fields or methods are declared with # names
  //static methods are called by className.staticMethod()
  //static #methodName is private static method
  static #updateStudentInfo(student) {
    const stdIdElement = document.querySelector("#student-id");
    const stdNameElement = document.querySelector("#student-name");
    stdIdElement.textContent = "Student Id: " + student.id;
    stdNameElement.textContent = "Student Name: " + student.fullName;
  }

  static #updateRegisterCourses(regisCourses) {
    //let regisCourses = this._student.registeredCourses;
    let courseTableElement = document.querySelector(".list-regis-courses");
    for (let i = 0; i < regisCourses.length; i++) {
      let newRow = courseTableElement.insertRow();
      for (let prop in regisCourses[i]) {
        let newCell = newRow.insertCell();
        let value = regisCourses[i][prop];
        let newText = document.createTextNode(value);
        newCell.appendChild(newText);
      }
    }
  }

  static #updateCreditGradeSummary(transcript) {
    let gradeTableElement = document.getElementsByTagName("table")[1];
    let gradeRow = gradeTableElement.insertRow();
    let creditsCell = gradeRow.insertCell();
    let credits = document.createTextNode(transcript.getTotalCredits());
    creditsCell.appendChild(credits);
    let gpaCell = gradeRow.insertCell();
    let gpaText = document.createTextNode(transcript.calculateGPA());
    gpaCell.appendChild(gpaText);
  }
}

function main() {
  let course1 = new Course("INT100", "IT Fundamental", 3, "A");
  let course2 = new Course("INT101", "Computer Programming I", 3, "C");
  let course3 = new Course("INT102", "Web Technology", 1, "B+");
  let courses = [course1, course2, course3];

  let student = new Student(123456, "SomJai", "Meedee", courses);
  let myTranscript = new Transcript(student);
  TranscriptReport.printTranscript(myTranscript);
}

main();

//####################################################################
//Solution#2-simplest form with object literals 
//with comma-separated list of {name: value} pairs
//registeredCourses is array of course objects
/*let student = 
{ id: 123456, firstName: "SomJai", lastName: "Meedee" ,
 registeredCourses : [
  {
    courseId: "INT100",
    courseTitle: "IT Fundamental",
    credit: 3,
    grade: "A",
  },
  {
    courseId: "INT101",
    courseTitle: "Computer Programming I",
    credit: 3,
    grade: "C",
  },
  {
    courseId: "INT102",
    courseTitle: "Web Technology",
    credit: 1,
    grade: "B+",
  },
]
};


let totalCredits=0;
let totalGradeValue=0;


function updateStudentInfo(student) {
  const stdIdElement = document.querySelector("#student-id");
  const stdNameElement = document.querySelector("#student-name");
  stdIdElement.textContent = "Student Id: " + student.id;
  stdNameElement.textContent =
    "Student Name: " + student.firstName + " " + student.lastName;
}

function updateRegisterCourses(regisCourses) {
  let courseTableElement = document.querySelector(".list-regis-courses");
  for (let i = 0; i < regisCourses.length; i++) {
    let newRow = courseTableElement.insertRow();
    let courseCredit=0;
    let courseGradeValue=0;
    for (let prop in regisCourses[i]) {     
      let newCell = newRow.insertCell();
      let value = regisCourses[i][prop];
      let newText = document.createTextNode(value);
      newCell.appendChild(newText);
      if(prop==="credit"){
          courseCredit = value;
          totalCredits += courseCredit;
        
      }
      if(prop==="grade"){
          courseGradeValue = getGradeValue(value);
          totalGradeValue = totalGradeValue + courseCredit * courseGradeValue;
      }
     
    }
  }
}
function getGradeValue(grade){
    switch(grade){
        case "A": 
        case "a": return 4;
        case "B+": 
        case "b+": return 3.5;
        case "B":
        case "b": return 3;
        case "C+": 
        case "c": return 2.5;
        case "C": 
        case "c": return 2;
        case "D+": 
        case "d+": return 1.5;
        case "D": 
        case "d": return 1;
        case "F":
        case "f": return 0;
    }
}
function updateCreditGradeSummary(){
    let gradeTableElement = document.getElementsByTagName("table")[1];
    console.log(gradeTableElement);
    let gradeRow=gradeTableElement.insertRow();
    let creditsCell= gradeRow.insertCell();
    let credits=document.createTextNode(totalCredits);
    creditsCell.appendChild(credits);

    let gpaCell = gradeRow.insertCell();
    let gpaText = document.createTextNode((totalGradeValue/totalCredits).toPrecision(3));
    gpaCell.appendChild(gpaText);

}

updateStudentInfo(student);
updateRegisterCourses(student.registeredCourses);
updateCreditGradeSummary();*/
