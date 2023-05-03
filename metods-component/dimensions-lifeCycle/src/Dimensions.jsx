import React, { Component } from 'react';

class Dimensions extends Component {
  state = { // начальное значение размеров страницы
    width: null,
    height: null,
  };

  componentDidMount() {
    // чтобы получить текущие размеры, назначаем обработчик на window, "resize"
    window.addEventListener('resize', this.onResize);

    const { innerWidth, innerHeight } = window; // деструктуризацией достаем параметры размеров
    this.setDimensions(innerWidth, innerHeight); // функция которая меняет стейт
  }

  componentWillUnmount() { // делаем отписку, для экономии памяти
    window.removeEventListener('resize', this.onResize);
  }

  onResize = (e) => {  // функция для отслуживания изменения размеров экрана 
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`; // устанавливаем размеры в название документа
  };

  render() {
    return (
      <div className="dimensions">
        {`${this.state.width}px - ${this.state.height}px`}
      </div>
    );
  }
}
export default Dimensions;
