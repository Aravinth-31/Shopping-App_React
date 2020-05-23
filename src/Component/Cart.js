import React from 'react';
import Product from './Product';
class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={id:'',obj:[]}
    }
    componentDidMount(){
        if (document.readyState === 'complete') {
            var id1=document.getElementById("userMail").innerHTML;
            var obj1=JSON.parse(localStorage.getItem(id1))||{fav:[]};
            this.setState({id:id1,obj:obj1.fav});
        }
    }
    render(){
        if(this.state.id==='')
            return(
                <div>
                    <h1>Log In First</h1>
                </div>
            )
        if(this.state.obj.length>0)
            return(
                <div>
                    {this.state.obj.map(pro=>
                        <Product title={pro.title} desc={pro.desc} pro_img={pro.pro_img}></Product>)}
                </div>
            );
        else
            return(
                <div>
                    <h1>Cart Is Empty</h1>
                </div>
            )
    }
}
export default Cart;