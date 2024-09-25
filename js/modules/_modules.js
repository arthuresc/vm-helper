export async function getData() {
  // const leitor = new FileReader();
  
  // leitor.onload

  const file = await fetch('../../data/TestBase.csv');
  const data = await (await file.text()).split('\n')
  const result = data.map(row => row.split(','));

  console.log(result, '🌲')
}

export function getFormEntriesData() {
  const form = document.forms[0]

  const formData = new FormData(form)

  return formData;
}