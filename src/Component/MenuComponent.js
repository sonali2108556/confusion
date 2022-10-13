import React, { Component } from 'react';
import { CardImgOverlay, Card, CardImg, CardTitle, Media, CardText, CardBody } from 'reactstrap';

class Menu extends Component {
  

  
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg  top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }

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
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;