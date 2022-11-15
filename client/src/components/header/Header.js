import React from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function Header() {
    return (
        <div className="header flex-column ">
            <div className="header_strip ">
                    <h1  className="site_title"> JarMountain </h1>
                    <button className="header_buttons">Оплата і доставка</button>
                    <button className="header_buttons">Категорії</button>
                    <button className="header_buttons">Про Нас</button>
                    <button className="contact">Контакт</button>
            </div>
            <div className="header_goods d-flex justify-content-center ">
                <button className="header_goods_buttons">Варення</button>
                <button className="header_goods_buttons">Чай</button>
                <button className="header_goods_buttons">Кава</button>
                <button className="header_goods_buttons">Інші продукти</button>
                <Button className="header_goods_ss rounded-pill" variant="outline-success">Новинки</Button>
                <Button className="header_goods_ss rounded-pill" variant="outline-success">Акції</Button>
            </div>
        </div>

    );
}
export default Header;
