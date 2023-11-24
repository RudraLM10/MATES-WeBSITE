"use strict";

const navLinks = document.getElementById("navLinks");
const openMenu = document.querySelector(".openmenu");
const closeMenu = document.querySelector(".closemenu");
const fullImgBox=document.getElementById('fullImgBox')
const fullImg=document.getElementById('fullImg')

openMenu.addEventListener("click", function () {
  navLinks.style.right = "0";
});

closeMenu.addEventListener("click", function () {
  navLinks.style.right = "-100%";
});

function openFullImg(pic){
  fullImgBox.style.display='flex'
  fullImg.src=pic;
}

function closeFullImg(){
  fullImgBox.style.display='none'
}
