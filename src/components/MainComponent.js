import React,{Component} from 'react';
import Menu from './Menucomponets'
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId){
    this.setState({selectedDish: dishId});
}
    render() {
      return (
        <div >
          < Header/>
          <div className="container">
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <Dishdetail dishes={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
          </div>
          <Footer/>
        </div>
      );
    };
}
export default Main