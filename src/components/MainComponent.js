import React,{Component} from 'react';
import Menu from './Menucomponets'
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
   render() {
     const HomePage=()=>{
       return(
        <Home/>
       );
     }
      return (
        <div >
          < Header/>
          <Switch>
              <Route path="/home" component={HomePage}></Route>
              <Route path="/menu" component={()=> <Menu dishes = {this.state.dishes}/>}></Route>
              <Redirect to= "/home"></Redirect>
          </Switch>
          <Footer/>
        </div>
      );
    };
}
export default Main