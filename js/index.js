// Adding a Footer element
const myFooter = document.createElement("footer");
document.body.append(myFooter);

//Insert copyright text in footer
const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = ` \u00A9 ${thisYear} Gumaro Pedro`;

footer.append(copyright);

//list of skills
let skills = ["Git", "GitHub", "Excel", "Python"];

let skillsSection = document.querySelector("#skills");

let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
