import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


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
            console.log("if");
            return(
                
                 <Card key={dish.id}>
                     <h3>Return</h3>
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
                console.log("else");
                return(
                    <div></div>
                );
            }
    }

    const Dishdetail = (props) =>{
        console.log("props.dish");
        console.log(props.dish);
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                        <hr />  
                        </div>     
                </div>
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                        <RenderComment comments={props.comments}/>
                    </div>
                </div>
            </div>
            
        );
    }
export default Dishdetail;