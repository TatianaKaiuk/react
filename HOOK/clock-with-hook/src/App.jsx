import React, {useState, useEffect} from 'react';
import Clock from './Clock';

const App = () => {
    const [visible, setVisible] = useState(true);

const Hide = () => {
setVisible(false)
}
    return (
      <>
        <button className="btn" onClick={Hide}>
          Hide
        </button>
        <div>
          {visible && (
            <>
              <Clock offset={0} location="London" />
              <Clock offset={2} location="Kyiv" />
              <Clock offset={-5} location="New York" />
            </>
          )}
        </div>
      </>
    );
}
export default App;