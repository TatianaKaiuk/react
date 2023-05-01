import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    // срабатывает первым, при создании компоненты, далее идет рендер
    super(props);
    console.log('constructor: good place to create state');
  }

  // методы жизненного цикла записываются так как вызываются: 1й - constructor, последний - рендер

  componentDidMount() {
    // через этот метод можно давать запрос на сервер через fetch, лучше использовать функцией
    // после отрисовки рендера срабатывает этот метод, когда компонент уже попал на страницу
    console.log('componentDidMount: API calls, subscriptions');
  }
  shouldComponentUpdate(nextProps, nextState) {
    // всегда возвращает булевое значение. проверяет, нужно ли отрисовывать еще раз рендер
    // запускается до рендера, срабатывает при обновлении данных, получает и проверяет новые данные
    console.log(
      'shouldComponentUpdate(nextProps, nextState): decide to render or not to render'
    );
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    // срабатывает после рендер, но уже с обновленными данными, здесь можно делать разные подписки
    console.log(
      'componentDidUpdate(prevProps, prevState): some updates based on new props'
    );
  }

  componentWillUnmount() {
    // срабатывает при выходе компоненты, напр при ощистке чего либо
    console.log(
      'componentWillUnmount(): cleanup before DOM related to component will be removed'
    );
  }

  render() {
    // срабатывает 2м
    console.log('return React element to build DOM');
    return <div>{this.props.number}</div>;
  }
//   чтобы получить доступ к props, пишем this.props и свойство к которому нужен доступ
}
export default Life;
