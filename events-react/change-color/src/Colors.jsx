import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

// изменяем цвет тела
class Colors extends Component {

  setBodyColor= color => {
    document.body.style.backgroundColor = color;  // получаем доступ к body, а именно к бекграунту и устанавливаем ему цвет, который передаем как аргум
  }

  render() {
    // отрисовка- стиль style={{ backgroundColor: RED }} только в таком виде
    // обраработчик событий onClick - помещаем функц, при использовании bind, доп возвращает event событие, его использовать
    // если нужен event, если нет - просто стрелочную функцию
    // при клике, срабатывает функц setBodyColor и меняет backgroundColor
    return (
      <div className="colors">
        <button
          style={{ backgroundColor: RED }}
          onClick={this.setBodyColor.bind(this, RED)}
          className="colors__button"
        ></button>

        <button
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyColor(GREEN)}
          className="colors__button"
        ></button>

        <button
          style={{ backgroundColor: BLUE }}
          onClick={() => this.setBodyColor(BLUE)}
          className="colors__button"
        ></button>
      </div>
    );
  }
}
export default Colors;

// если нужно поставить обработчик на этапе погружения - называем обработчик onClickCapture={}