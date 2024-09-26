"use-strict";
import { initCards } from "./components/Card.mjs";
import { getData, getFormEntriesData } from "./modules/_modules.js";

const data = await getData();
console.log(data);
data.forEach((card) => {
  console.log(card, "🧸");
  initCards(card[0], card[1], card[2], card[3], card[4], card[5], card[6]);
});
// document.addEventListener('DOMContentLoaded', () => {

//   console.log(data, '🍬')
// })

const form = document.forms[0];

form.addEventListener("change", function (e) {
  e.preventDefault();

  const formData = getFormEntriesData();

  // TODO inserir função que faça o filtro dos dados baseados na entrada do usuário
  console.log(e, formData, "🇪🇹");
  console.log(formData.get("inputRAM"), "🤩");
});
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = getFormEntriesData();

  console.log(e, formData, "🇪🇹");
  console.log(formData.get("inputRAM"), "🤩");
});
