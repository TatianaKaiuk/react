/* <h1>Search Form</h1>
<div>
  <input type="text" />
  <button>Search</button>
</div> */
import React from 'react';
import ReactDOM from 'react-dom';

const elemRoot = document.querySelector('#root');
const element = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);
ReactDOM.render(element, elemRoot);