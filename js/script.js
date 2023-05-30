// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Fares.Abdelkader
// Created on: May 2023
// This file contains the JS functions for index.html


'use strict'

/**
 * Input.
 */

function buttonClicked() {

  const age = parseInt(document.getElementById('age').value)

  var monday = document.getElementById("monday")
  var tuesday = document.getElementById("tuesday")
  var wednesday = document.getElementById("wednesday")
  var thursday = document.getElementById("thursday")
  var friday = document.getElementById("friday")
  var sunday = document.getElementById("sunday")
  var saturday = document.getElementById("saturday")

  if ((tuesday.checked == true || thursday.checked == true) || (age >= 12 && age <= 21)) {
    document.getElementById("output").innerHTML =
      "You are eligible for student pricing!"
    console.log("eligible for student pricing")
  } else {
    document.getElementById("output").innerHTML =
      "You must pay regular pricing."
    console.log("not eligible for student pricing")
  }
}