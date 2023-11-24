"use strict";

const navLinks = document.getElementById("navLinks");
const openMenu = document.querySelector(".openmenu");
const closeMenu = document.querySelector(".closemenu");

openMenu.addEventListener("click", function () {
  navLinks.style.right = "0";
});

closeMenu.addEventListener("click", function () {
  navLinks.style.right = "-100%";
});
