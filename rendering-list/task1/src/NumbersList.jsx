import React from 'react';

const NumbersList = ({numbers}) => { // сразу вытягиваем нужное свойство деструктуризацией
return ( // с помощью преобразованого метода в jsx, рендерим список 
    <ul>
        {numbers.map(num => ( 
            <li key={num}>{num}</li>
        ))}
    </ul>
);
};
export default NumbersList;

// каждый элемент li должен иметь своство key, и это обязательно
// оно должно быть уникальным 