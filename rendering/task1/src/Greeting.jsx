import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

const Greeting = props => {
    if(props.isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
export default Greeting;
// 
// есть 3 варианта проверит залогинен ли пользователь 

// const Greeting = (props) => {
//     const { isLoggedIn } = props; // деструктуризация
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// };

// const Greeting = ( {isLoggedIn}) => {  // сразу указываем в аргументах то свойство которое нужно
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// };