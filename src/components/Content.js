import React from "react";
import { Link } from "react-router-dom";
import './Content.css';
import img from '../assets/img/66.jpg'
import img1 from '../assets/img/j.jpg'
import img2 from '../assets/img/mock.png'
import img3 from '../assets/img/mock3.jpg'
import img4 from '../assets/img/mock2.jpg'
import WOW from 'wowjs';

class Content extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
        
            
        <div className="alert alert-primary" role="alert">
            <img src={img} className="img-fluid" />
            <section className="section-intro bg-faded text-xs-center animate__animated animate__backInUp wow">
      <div className="container">
        <h3 className="m-b-3">УСЛУГИ ОПЫТНЫХ САНТЕХНИКОВ. ВСЕ ВИДЫ САНТЕХНИЧЕСКИХ РАБОТ.</h3>
        <p className="lead wp wp-2">Быстро выезжаем в любой район города и удалённые районы.</p>
        
      </div>
    </section>
      <div className="animate__animated animate__backInUp wow">
    <a href="tel:+77071793498"><button type="button" className="btn btn-primary btn-lg">+77071793498</button></a>
    <div></div>
    <a href="tel:+77077776752"><button type="button" className="btn btn-primary btn-lg">+77077776752</button></a>
    <div></div>
    <a href="https://wa.me/+77071793498"><button type="button" className="btn btn-success btn-lg">Написать WhatsAp</button></a>
    </div>
    <img src={img1} className="img-fluid animate__animated animate__backInUp wow" />
     
    <section className="section-intro bg-faded text-xs-center animate__animated animate__backInUp wow">
      <div className="container">
        <h3 className="m-b-3">МОНТАЖ ОТОПЛЕНИЯ, ВОДОПРОВОДА, КАНАЛИЗАЦИИ ЛЮБОЙ СЛОЖНОСТИ.</h3>
        <p className="lead wp wp-2">Даём гарантию на все виды работ. Если возникнут недочёты — исправим.</p>
        
      </div>
    </section>
    <img src={img2} className="img-fluid animate__animated animate__backInUp wow" />
    <section className="section-intro bg-faded text-xs-center animate__animated animate__backInUp wow">
      <div className="container">
        <h3 className="m-b-3">ПРОФЕССИОНАЛЬНАЯ ПРОБИВКА КАНАЛИЗАЦИИ ЛЮБОЙ СЛОЖНОСТИ.</h3>
        <p className="lead wp wp-2">Соблюдаем чистоту!</p>
        
      </div>
    </section>
    <img src={img3} className="img-fluid animate__animated animate__backInUp wow" />
    <section className="section-intro bg-faded text-xs-center animate__animated animate__backInUp wow">
      <div className="container">
        <h3 className="m-b-3">МЕЛКОСРОЧНЫЕ ВЫЗОВЫ: ЗАМЕНА СМЕСИТЕЛЯ, СИФОНА, УНИТАЗА.</h3>
        <p className="lead wp wp-2">Ремонтируем сантехнику качественно!</p>
        
      </div>
    </section >
    <img src={img4} className="img-fluid animate__animated animate__backInUp wow" />
    <section className="section-intro bg-faded text-xs-center animate__animated animate__backInUp wow">
      <div className="container">
        <h3 className="m-b-3">Большой опыт!</h3>
        <p className="lead wp wp-2">Благодаря фокусировке именно на сантехнических работах, мы с уверенностью можем сказать, 
        что знаем об этой сфере все и выполняем работу качественно.
         Нашим специалистам по плечу любые услуги: от устранения засора и до установки джакузи</p>
        
      </div>
    </section>
    
    
      </div>
   

        
    )
}
}

export default Content;