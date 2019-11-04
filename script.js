//name exit slide

//graphic slide
let graphicsBtn = document.querySelector(".graphicsBtn");
let bgGraphics = document.querySelector(".graphicBg");

graphicsBtn.addEventListener("click", () => {
  bgGraphics.classList.toggle("graphicBgActive");
  bgMyName.classList.remove("myNameActive");
  bgProjects.classList.remove("projectBgActive");
  bgSkill.classList.remove("skillBgActive");

  skillsBtn.classList.remove("skillsBtnActive");
  projectsBtn.classList.remove("projectsBtnActive");
  bgCol2.classList.remove("col2-active");
  graphicsBtn.classList.toggle("graphicsBtnActive");
});

//project slide
let projectsBtn = document.querySelector(".projectsBtn");
let bgProjects = document.querySelector(".projectBg");

projectsBtn.addEventListener("click", () => {
  bgProjects.classList.toggle("projectBgActive");
  bgMyName.classList.remove("myNameActive");
  bgGraphics.classList.remove("graphicBgActive");
  bgSkill.classList.remove("skillBgActive");

  skillsBtn.classList.remove("skillsBtnActive");
  graphicsBtn.classList.remove("graphicsBtnActive");
  bgCol2.classList.remove("col2-active");
  projectsBtn.classList.toggle("projectsBtnActive");
});

//skill slide
let skillsBtn = document.querySelector(".skillsBtn");
let bgSkill = document.querySelector(".skillBg");

skillsBtn.addEventListener("click", () => {
  bgSkill.classList.toggle("skillBgActive");
  bgMyName.classList.remove("myNameActive");
  bgGraphics.classList.remove("graphicBgActive");
  bgProjects.classList.remove("projectBgActive");

  graphicsBtn.classList.remove("graphicsBtnActive");
  projectsBtn.classList.remove("projectsBtnActive");
  bgCol2.classList.remove("col2-active");
  skillsBtn.classList.toggle("skillsBtnActive");
});

//name slide
let myName = document.querySelector(".myName");
let bgMyName = document.querySelector(".myNameBg");

myName.addEventListener("click", () => {
  bgMyName.classList.add("myNameActive");
});

//MOBILE
//exitName content
let exitName = document.querySelector(".exitName");
exitName.addEventListener("click", () => {
  bgMyName.classList.remove("myNameActive");
});

//exitGraphic content
let exitGraphic = document.querySelector(".exitGraphic");
exitGraphic.addEventListener("click", () => {
  bgGraphics.classList.remove("graphicBgActive");

  graphicsBtn.classList.remove("graphicsBtnActive");
});

//exitProject content
let exitProject = document.querySelector(".exitProject");
exitProject.addEventListener("click", () => {
  bgProjects.classList.remove("projectBgActive");
});

//exitSkill content
let exitSkill = document.querySelector(".exitSkill");
exitSkill.addEventListener("click", () => {
  bgSkill.classList.remove("skillBgActive");
});

//mobile Menu
let menuBar = document.querySelector(".menuBar");
let bgCol2 = document.querySelector(".col2");

menuBar.addEventListener("click", () => {
  bgCol2.classList.toggle("col2-active");
});

//outside nav
