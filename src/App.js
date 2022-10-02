import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from './Component/MenuComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante con fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>
    )
  }
}

export default App;
