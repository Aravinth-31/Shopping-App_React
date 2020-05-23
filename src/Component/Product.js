import React from 'react';
import './Product.css';
class Product extends React.Component{
    addCart =()=>{
        var obj1=document.getElementById('userMail')
        var id=obj1.innerHTML;
        if(id==='')
            alert("Log in First");
        else{
            var obj=JSON.parse(localStorage.getItem(id));
            var list=obj.fav||[],f=1;
            for(var i=0;i<list.length;i++){
                if(list[i].title===this.props.title){
                    f=0;
                    break;
                }
            }
            if(f){
                list.push({title:this.props.title,desc:this.props.desc,pro_img:this.props.pro_img});
                obj.fav=list;
                localStorage.setItem(id,JSON.stringify(obj));
                alert("Product Added To Cart");
            }
            else
                alert("Product Already In Cart");
        }
    }
    render(props){
        return (	
        <div className="card">
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img src={this.props.pro_img} alt="Loading"/>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{this.props.title}</h2><small>
                    <h4 className="card-text">{this.props.desc}</h4></small>
                    <div className="footer"><button onClick={this.addCart}>Add To Cart</button></div>
                </div>
            </div>
        </div>);
    }
}

export default Product;