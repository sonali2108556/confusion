import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from './Component/MenuComponent';
import{DISHES} from './shared/dishes';
import Main from './Component/MainComponent';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
