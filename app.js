let getYear = document.querySelector(".fullyear");
let date = new Date();
getYear.textContent = date.getFullYear();

class Students {
  constructor(name, age, studentClass) {
    this.name = name;
    this.age = age;
    this.studentClass = studentClass;
  }
  toText() {
    return `student name: ${this.name}, student age: ${this.age}, student Class: ${this.studentClass}`;
  }
}

const students = [];

function studentSubmit() {
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const studentClass = document.querySelector("#studentClass").value;
  const output = document.getElementById("Output");
  const informResultfeedback = document.querySelector(
    ".Inform-result-feedback"
  );
  output.classList.remove("hidden");

  if (!name || !age || !studentClass || age <= 0 || age >= 120) {
    informResultfeedback.textContent = "Invalid please try again";
    informResultfeedback.style.color = "#dc0e0e";
    return;
  }

  const s = new Students(name, age, studentClass);

  students.push(s);

  updateOutput();

  document.querySelector("#name").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#studentClass").value = "";
  document.querySelector(".Inform-result-feedback").style.color = "#8BAE66";
  informResultfeedback.textContent =
    "Submission Successful! Try another student.";
}
function updateOutput() {
  let text = "";
  for (let i = 0; i < students.length; i++) {
    text += i + 1 + ". " + students[i].toText() + "\n";
  }
  document.querySelector("#Output").textContent = text;
}

