// Adding a Footer element
const myFooter = document.createElement("footer");
document.body.appendChild(myFooter);

//Insert copyright text in footer
const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = ` \u00A9 ${thisYear} Gumaro Pedro`;

footer.appendChild(copyright);

//list of skills
let skills = ["Git", "GitHub", "Excel", "Python"];

let skillsSection = document.querySelector("#skills");

let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

let messageForm = document.forms["leave_message"];

//adding the event listener
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.usersName.value;
  let email = event.target.usersEmail.value;
  let message = event.target.usersMessage.value;

  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("Messages: ", message);

  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");

  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>: <span>${message}</span>`;

  let removeButton = document.createElement("button");

  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    let entry = this.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);
  //clears the form after submitting
  event.target.reset();
});
