import React, { Component } from 'react';
import { CardImgOverlay, Card, CardImg, CardTitle, Media, CardText, CardBody } from 'reactstrap';
import Dish from './DishdetailComponent'; 
class Menu extends Component {
  

  
  
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id}
            onClick={() => this.props.onDishSelect(dish)}>
            <CardImg height="300px" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>

        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <Dish selectedDish={this.props.selectedDish}/>
      </div>
    );
  }
}

export default Menu;