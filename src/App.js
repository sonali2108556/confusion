import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from './Component/MenuComponent';
import{DISHES} from './shared/dishes';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      dishes: DISHES
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante con fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes= {this.state.dishes}/>
        
      </div>
    )
  }
}

export default App;
