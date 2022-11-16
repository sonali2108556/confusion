import React, { Component } from 'react';
import { CardImgOverlay, Card, CardImg, CardTitle, Media, CardText, CardBody, List } from 'reactstrap';
class Dish extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
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
  renderComments(dish) {
    if (dish != null)
      return (
        <ul className='list-group'>

          {dish.comments.map((comment) => {

            return (
              
                 <li className="list-group-item" key={comment.id}>
                  <br/>{comment.comment}
                  <br/>--{comment.author} {new Date(comment.date).toLocaleString()}
                </li>
              
            )
          }
          )}
        </ul>

      )
    else
      return (
        <div></div>
      )
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className='col-12 col-md-5 m-1'>
          <h4 >comments</h4>
          {this.renderComments(this.props.selectedDish)}
        </div>
      </div>

    )
  }



}
export default Dish;