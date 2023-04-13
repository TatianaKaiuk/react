const rootElement = document.querySelector('#root');

// если есть вложенность, первый элем создаем и 3 аргумент в виде массива - перечисляем дочерние элементы
const renderGreeting = React.createElement('div', { className: 'greeting' }, [
  React.createElement('div', { className: 'greeting__title' }, 'Hello, world!'),
  React.createElement(
    'div',
    { className: 'greeting__text' },
    "I'm learning React"
  ),
]);

ReactDOM.render(renderGreeting, rootElement);