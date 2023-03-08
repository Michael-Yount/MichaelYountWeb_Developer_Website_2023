"use strict";

///////// Varieables

const linktoScroll = document.querySelector("#projects");
const section1 = document.querySelector("#section--1");

///////  Smooth scroll to section

linktoScroll.addEventListener("click", function (e) {
    e.preventDefault();
  
    console.log("click");
  
    section1.scrollIntoView({ behavior: "smooth" });
  });