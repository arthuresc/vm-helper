export async function getData() {
  const titleIndexes = [0, 1, 26, 20, 24, 22];

  const file = await fetch("../../data/TestBase.csv");
  const data = await (await file.text()).split("\n");
  const resultArray = data.map((row) => row.split(","));

  const titlesArray = resultArray.shift();

  const titles = titleIndexes.map((index) => {
    return titlesArray[index];
  });

  console.log(titles, resultArray, "🍙");
  const result = resultArray.map((item) => {
    let res = titleIndexes.map((tit) => {
      return item[tit];
    });
    return res;
  });

  return result;
}

export function getFormEntriesData() {
  const form = document.forms[0];

  const formData = new FormData(form);

  return formData;
}
