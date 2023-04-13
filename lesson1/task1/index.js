/* eslint-disable no-undef */

const rootElement = document.querySelector('#root'); //получаем элемент

const greeting = React.createElement( // добавляем
  'div',
  { className: 'greeting' },
  'Hello, React!'
);
ReactDOM.render(greeting, rootElement); // генерируем
