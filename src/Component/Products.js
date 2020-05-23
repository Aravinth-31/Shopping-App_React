import React,{Component} from 'react';
import Product from "./Product";
class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            productsInfo:[{title:"Microtek Tuff Power Pro+ 650VA UPS",desc:"This Microtek UPS is a great choice for your computer system and its peripherals. Featuring a remarkable microprocessor, this computer UPS is highly reliable and protects your computer from electrical surges, voltage fluctuations and short circuits",pro_img:"https://rukminim1.flixcart.com/image/416/416/k0o69ow0/ups/p/g/6/650va-microtek-original-imafke9z8gdfgsys.jpeg?q=70"},
            {title:"boAt Bassheads 242 Wired Headset  (Active Black, Wired in the ear)",desc:"Get ready to redefine fitness fashion and utility with the boAt Bassheads 242, itÃ¢ÂÂs time to get your sport on. It carries ear hooks that are crafted from silicon to maximize comfort and a secure fit that allows you to maximize your workouts.",pro_img:"https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/headphone/w/y/z/boat-bassheads-242-original-imafhbjuwkzr9tzg.jpeg?q=70"},
            {title:"Boult Audio AirBass Monopod Bluetooth Headset  (Black, True Wireless)",desc:"The Boult Monopod will never disappoint you as you listen to your favourite band or have a hearty chat with your loved one. With crystal clear sound output delivery, flexible and snug fit and with a long-lasting battery, this Bluetooth headset is your perfect companion for those uninterrupted conversations and music.",pro_img:"https://rukminim1.flixcart.com/image/416/416/k2xmd8w0/headphone/j/a/z/boult-audio-ba-unipod-blk-original-imafhjm8rpex4aqa.jpeg?q=70"}
            ]
        }
    }
    componentDidMount(){
        let list=[...this.state.productsInfo];
        var keys=Object.keys(localStorage),n=keys.length,i=n-1;
        while(i>=0){
            if(keys[i].match(/^product-/)){
                list.push(JSON.parse(localStorage.getItem(keys[i])));
            }
            i--;
        }
        this.setState({productsInfo:list});
    }
    render(){
        return (
            <div>
                {this.state.productsInfo.map(pro=>
                    <Product title={pro.title} desc={pro.desc} pro_img={pro.pro_img}></Product>)}
            </div>
        );
    }
}
export default Products;