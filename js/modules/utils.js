/**
 * @param {String, Object} tagName - String com o nome do elemento HTML que será criado ou Objeto para criação de elementos HTML
 * @param {Array} classes - Array de Strings contendo as classes a serem adicionadas
 * @param {Array} props - Array de Objetos com a configuração de cada atributo do elemente por cada objeto
 */
export function createElement(object) {

  // console.log( [...arguments],'✈️')
  
  // Exemplo de objeto
  const test = { tagName: 'div', classes: ['card'], props: [{name: 'Pizza'}]}
  const args = [...arguments];

  const {classes, tag, props, children, text} = object

  const htmlEl = document.createElement(tag)

  if (Array.isArray(classes)) {
    classes.forEach((item) => {
      htmlEl.classList.add(item)
    })
  }

  if (Array.isArray(props)) {
    props.forEach((propsObj) =>  {
      htmlEl.setAttribute(propsObj.name, propsObj.value)
    })
  }
  
  if (typeof text === 'string') {
    htmlEl.innerHTML = text;
  }
  // TODO tratar arrays de children vazios
  if (Array.isArray(children)) {
    children.forEach((childrenObj) =>  {
      htmlEl.append(createElement(childrenObj))
    })
  }
  return htmlEl
}