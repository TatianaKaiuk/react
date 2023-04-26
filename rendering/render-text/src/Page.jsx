import React, { Component } from 'react';
import Info from './Info';

const IPhone13 = 'Price is 500$. Available in 2 colors';
const  IPhone13Pro = 'Price is 600$. Not available';

class Page extends Component {
    state = { // конструктор используем если нужен доступ к props
        info: null
    };

    setInfo = info => {
        this.setState({
            info
        })
    }

    render(){
        return (
          <div className="page">
            <Info info={this.state.info} />
            <div className="actions">
              <button className="btn" onClick={() => this.setInfo(IPhone13)}>
                IPhone 13
              </button>
              <button className="btn" onClick={() => this.setInfo(IPhone13Pro)}>
                IPhone 13 Pro
              </button>
              <button className="btn" onClick={() => this.setInfo('')}>
                Clear
              </button>
            </div>
          </div>
        );
    }
}
export default Page;