"use-strict";
import { initCards } from './components/Card.mjs'
import { getData, getFormEntriesData } from './modules/_modules.js'

document.addEventListener('DOMContentLoaded', () => {
  initCards();
})
getData();

const form = document.forms[0]

form.addEventListener("change", function (e) {
  e.preventDefault();

  const formData = getFormEntriesData();


  console.log(e, formData, '🇪🇹')
  console.log(formData.get('inputRAM'), '🤩')
})
