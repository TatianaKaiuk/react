import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const elemRoot = document.querySelector('#root');

const renderSeconds = (time) => {
  const seconds = new Date().getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000'; // прописываем стили
  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';

  const styles = {
    color: textColor,
    backgroundColor,
  };

  const element = // отрисовываем элементы со стилем   // переменная  {seconds} - нужные данные 
    (
      <div className="seconds" style={styles}>
        {seconds}
      </div>
    );

  ReactDOM.render(element, elemRoot);
};
renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000);