import React from 'react';
import { Card, CardImg,CardTitle,CardImgOverlay,CardBody,CardText } from 'reactstrap';



    function dateformat({ date }) {
        var d= new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
        return d;
    }

    function RenderComment({comments}){
        var com=null;
        if(comments==null)
        {
            console.log("empty");
        }
        else{
            com = comments.map((comselect)=>{
                let date= comselect.date;
                 return(
                     <ul  className="list-unstyled">
                         <p>{comselect.comment}</p>
                         <p>--{comselect.author},<dateformat date ={date}/></p>
                     </ul>
                 )
                     
             });
        }
        
        return(com);
    }
    
    function RenderDish({dish}){
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

    const Dishdetail = (props) =>{
        const dishdetail=props.dishes;
        console.log("Done");
        var comments;
        if(props.dishes)
        {
            console.log("In iF");
            console.log(props.dishes.comments);
            comments=props.dishes.comments;
        }
        else
        {
            console.log("In else");
            console.log(props.dishes);
        }
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={dishdetail}/>
                </div>
                <div  className="col-12 col-md-5 m-1">
                   <h4>Comments</h4>
                  <RenderComment comments={comments}/>
                </div>
            </div>
        );
    }
export default Dishdetail;