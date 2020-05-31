import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { DISHES } from './shared/dishes';
import { render } from '@testing-library/react';
import Main from './components/MainComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
    render() {
      return (
        <div className="App">
          <Main/>
        </div>
      );
    };
}
export default App