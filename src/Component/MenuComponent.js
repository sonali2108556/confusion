import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                  id: 0,
                  name:'Pizza',
                  image: 'assets/images/pizza.jpg',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        
               },
               {
                  id: 1,
                  name:'Icecream',
                  image: 'assets/images/icecream.jpg',
                  category: 'dessert',
                  label:'',
                  price:'1.99',
                  description:'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches.'                        
               },
               {
                  id: 2,
                  name:'Idli Dosa',
                  image: 'assets/images/idli-dosa.jpg',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'Both idli and dosa batter are made from rice and lentils. Idli batter is more thick in consistency than a dosa batter.'                        },
               {
                  id: 3,
                  name:'Momos',
                  image: 'assets/images/momos.jpeg',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'Momo are bite-size dumplings made with a spoonful of stuffing wrapped in dough. Momo are usually steamed, though they are sometimes fried or steam-fried.'                        
                  
              }
           ],
        };
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Menu;