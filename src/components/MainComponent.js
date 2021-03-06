import React,{Component} from 'react';
import Menu from './Menucomponets'
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      leaders : LEADERS,
      comments: COMMENTS,
      promotions : PROMOTIONS
    };
    console.log("DISHES");
    console.log(DISHES);
  }
  
   render() {

    const DishWithId=({match})=>{
      
      return(
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    }

     const HomePage=()=>{
       return(
        <Home dish ={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
       );
     }
     const AboutPage=()=>{
       return(
        <About leaders={this.state.leaders}/>
       );
     }
      return (
        
        <div >
         
          < Header/>
          <Switch>
              <Route path="/home" component={HomePage}></Route>
              <Route exact path="/menu" component={()=> <Menu dishes = {this.state.dishes}/>}></Route>
              <Route path="/menu/:dishId" component={DishWithId}></Route>
              <Route exact path="/contactus" component={Contact} ></Route>
              <Route exact path="/about" component={AboutPage} ></Route>
              <Redirect to= "/home"></Redirect>
          </Switch>
          <Footer/>
        </div>
      );
    };
}
export default Main