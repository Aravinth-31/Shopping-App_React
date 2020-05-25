import React from 'react';
import './Product.css';
class Product extends React.Component{
    favourite=(e)=>{
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
            }
            else{
                var list1=[];
                for(i=0;i<list.length;i++){
                    if(list[i].title===this.props.title){
                        continue;
                    }
                    else{
                        list1.push(list[i]);
                    }
                }
                obj.fav=list1;
                localStorage.setItem(id,JSON.stringify(obj));
            }
            if(e.target.src==="https://i.pinimg.com/originals/f2/bf/ba/f2bfbaf07b263d2ff6e417295e65abca.png")
                e.target.src="https://photos3.fotosearch.com/bthumb/CSP/CSP519/red-heart-clip-art__k20648489.jpg";
            else
                e.target.src="https://i.pinimg.com/originals/f2/bf/ba/f2bfbaf07b263d2ff6e417295e65abca.png";
        }
    }
    addCart =()=>{
        var obj1=document.getElementById('userMail')
        var id=obj1.innerHTML;
        if(id==='')
            alert("Log in First");
        else{
            var obj=JSON.parse(localStorage.getItem(id));
            var list=obj.cart||[],f=1;
            for(var i=0;i<list.length;i++){
                if(list[i].title===this.props.title){
                    f=0;
                    break;
                }
            }
            if(f){
                list.push({title:this.props.title,desc:this.props.desc,pro_img:this.props.pro_img});
                obj.cart=list;
                localStorage.setItem(id,JSON.stringify(obj));
                alert("Product Added To Cart");
            }
            else
                alert("Product Already In Cart");
        }
    }
    checkFav=()=>{
        let obj1=document.getElementById('userMail')||{innerHTML:''};
        let id=obj1.innerHTML;
        let obj=JSON.parse(localStorage.getItem(id))||{fav:[]};
        let list=obj.fav,f=false;
        for(var i=0;i<list.length;i++){
            if(list[i].title===this.props.title){
                f=true;
                break;
            }
        }
        return f;
    }
    render(props){
        if(this.checkFav()){
            return (	
                <div className="card">
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                            <img src={this.props.pro_img} alt="Loading"/>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{this.props.title}</h2><small>
                            <h4 className="card-text">{this.props.desc}</h4></small>
                            <div className="footer">
                                <button onClick={this.addCart}>Add To Cart</button>
                                <img onClick={this.favourite} className="fav_img" src="https://photos3.fotosearch.com/bthumb/CSP/CSP519/red-heart-clip-art__k20648489.jpg" alt="Favourite"/>
                            </div>
                        </div>
                    </div>
                </div>);
        }
        else{
            return (	
                <div className="card">
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                            <img src={this.props.pro_img} alt="Loading"/>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{this.props.title}</h2><small>
                            <h4 className="card-text">{this.props.desc}</h4></small>
                            <div className="footer">
                                <button onClick={this.addCart}>Add To Cart</button>
                                <img onClick={this.favourite} className="fav_img" src="https://i.pinimg.com/originals/f2/bf/ba/f2bfbaf07b263d2ff6e417295e65abca.png" alt="Favourite"/>
                            </div>
                        </div>
                    </div>
                </div>);
        }
    }
}

export default Product;