function render(reactElement, containerDomElement) {
  const domElement = document.createElement(reactElement.type)

  domElement.innerText = reactElement.children
  for (const key in reactElement.props) {
    const value = reactElement.props[key]
    domElement.setAttribute(key, value)
  }

  containerDomElement.appendChild(domElement)
}

const reactElement = {
  type: 'a',
  props: {
    id: 'some-link',
    'data-number': 20,
    href: 'https://wikipedia.org/',
  },
  children: 'Read more on Wikipedia',
}

const containerDomElement = document.querySelector('#root')

render(reactElement, containerDomElement)
