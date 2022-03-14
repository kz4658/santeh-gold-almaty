import React from "react";
import './Footer.css';
import WOW from 'wowjs';


class Footer extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
        
        <div className="alert alert-dark animate__animated animate__backInUp wowgit" role="alert">
        <a href="tel:+77071793498"><button type="button" className="btn btn-primary btn-lg">+77071793498</button></a>
    <div></div>
    <a href="tel:+77077776752"><button type="button" className="btn btn-primary btn-lg">+77077776752</button></a>
    <div></div>
    <a href="https://wa.me/+77071793498"><button type="button" className="btn btn-success btn-lg">Написать WhatsAp</button></a>
      </div> 
    
   

        
    )
}
}
//"homepage": "http://kz4658.github.io/s_g",

export default Footer;