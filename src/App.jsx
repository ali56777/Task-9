// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './App.css';

// رسالة الترحيب
const usePopup = (count) => {
  useEffect(() => {
    if (count === 10 || count === 100 || count === 1000) {
      alert(`Count reached ${count}!`);
    }
  }, [count]);

  useEffect(() => {
    alert('Welcome to the Counter App!');
  }, []);
};

// تغيير لون الخلفية
const useBackgroundColor = (count) => {
  useEffect(() => {
    if (count === 10 || count === 100 || count === 1000) {
      document.body.style.backgroundColor = 'lightblue';
    } else {
      document.body.style.backgroundColor = '';
    }
  }, [count]);
};

const CounterWithPopupAndBackground = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [showDecrementButton, setShowDecrementButton] = useState(false);


  usePopup(count);
  useBackgroundColor(count);

 
  const handleIncrement = () => {
    if (count < 1000) {
      setCount(count + increment);
    }
  };

 
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - increment);
    }
  };

  
  useEffect(() => {
    if (count >= 1000) {
      setIncrement(100);
      setShowDecrementButton(true);
    } else if (count >= 100) {
      setIncrement(100);
    } else if (count >= 10) {
      setIncrement(10);
    } else {
      setIncrement(1);
    }
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      {!showDecrementButton ? (
        <button onClick={handleIncrement}>Increment by {increment}</button>
      ) : (
        <button onClick={handleDecrement}>Decrement by {increment}</button>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <CounterWithPopupAndBackground />
    </div>
  );
};

export default App;
