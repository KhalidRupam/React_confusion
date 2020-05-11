import React, { Component } from 'react';
import { Card, CardImg,CardTitle,CardImgOverlay,CardBody,CardText } from 'reactstrap';


class Dishdetail extends Component{
    
    constructor(props){
        super(props)
    }

    dateformat({ date }) {
        
        var d= new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });

        return d;
      }

    renderComment(comments){
        const com = comments.map((comselect)=>{
           let date= comselect.date;
            return(
                <div>
                    <p>{comselect.comment}</p>
                    <p>--{comselect.author},{this.dateformat({date})}</p>
                </div>
            );
        })
        return(com);
    }
    
    renderDish(dish){
        if (dish!=null) {
            return(
                 <Card key={dish.id}>
                     <CardImg top src={dish.image} alt={dish.name}></CardImg>
                         <CardBody>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                         </CardBody>
                 </Card>
                );
            }
            else
            {
                return(
                    <div></div>
                );
            }
    }

    render(){
        const Dishdetail=this.props.dishes;
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(Dishdetail)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                   <h4>Comment</h4>
                  {this.renderComment(Dishdetail.comments)}
                </div>
            </div>
        );
        
       
    }
}

export default Dishdetail;