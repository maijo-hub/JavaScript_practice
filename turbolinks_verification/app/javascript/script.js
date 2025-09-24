console.log("script.js loaded!");

document.addEventListener('turbolinks:load', function () {
  console.log("Turbolinks loaded!");
  alert("Hello World");
});
