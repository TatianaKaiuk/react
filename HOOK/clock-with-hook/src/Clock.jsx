import React, { useEffect, useState } from 'react';
import moment from 'moment';


const time = (time) => moment(time).format('h:mm:ss A');

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    const getTimeWithOffset = () => {
      const currentTime = new Date();
      const currentOffset = currentTime.getTimezoneOffset() / 60; // Получаем текущее смещение относительно нулевого меридиана в часах
      const targetOffset = offset - currentOffset; // Вычисляем смещение для заданного города

      currentTime.setHours(currentTime.getHours() + targetOffset); // Применяем смещение к текущему времени

      return currentTime.toLocaleTimeString();
    };
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{getTimeWithOffset()}</div>
    </div>
  );
};
export default Clock;
