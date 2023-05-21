import { useContext } from "react";
import React from "react";
import MyContext from "../MyContext";
import Button from "../Button/Button";
import Breakfast from "./Breakfast/Breakfast";
import Drinks from "./Drinks/Drinks";
import Desserts from "./Desserts/Desserts";
import Salad from "./Salad/Salad";
import Appetizer from "./Appetizer/Appetizer";
import Meal from "./Meal/Meal";
import Gallery from "./Gallery/Gallery";
import PayBill from "./PayBill/PayBill";
import About from "./About/About";
import "./body.css";
import { ReactComponent as DarkMode } from '../Header/img/toggle-on.svg';
import { ReactComponent as LightMode } from "../Header/img/toggle-off.svg";
import { ReactComponent as InstaLogo } from './img/instagram.svg';
import { ReactComponent as TelegramLogo } from "./img/telegram-plane.svg";
export default function Body() {
    const { setBillDisplay, smallNavbarDisplay, dropdownMenu, setDropdownMenu, open_dropdownMenu,
        titleBg, toggleDarkLight, darkModeClass, lightModeClass, headerBtnClass
    } = useContext(MyContext);
    return (
        <div className="restaurant_body">
            <div id={smallNavbarDisplay} className={titleBg}>
                <Button
                    btnClass={headerBtnClass + " header_btn dropdown_btn"}
                    text="منو"
                    onClick={open_dropdownMenu} />
                <div className={dropdownMenu} onMouseLeave={() => setDropdownMenu("hide")}>
                    <a href="#breakfast">صبحانه</a>
                    <a href="#meal">غذاها</a>
                    <a href="#appetizer">پیش غذا</a>
                    <a href="#salad">سالاد</a>
                    <a href="#drinks">نوشیدنی</a>
                    <a href="#desserts">دسر</a>
                </div>
                <Button
                    btnClass={headerBtnClass + " header_btn"}
                    text="صورت حساب"
                    onClick={() => setBillDisplay("show_bill")} />
                <a className={headerBtnClass + " header_btn"} href="#gallery">تصاویر</a>
                <a className={headerBtnClass + " header_btn"} href="#about">درباره ما</a>
                <div className={titleBg + " toggler_div"}>
                    <DarkMode className={darkModeClass} onClick={toggleDarkLight} />
                    <LightMode className={lightModeClass} onClick={toggleDarkLight} />
                </div>
                <div className="small_nav_footer">
                    <a href="https://www.instagram.com/3ptaj" target="_blank" >
                        <InstaLogo className="instagram" />
                    </a>
                    <a href="https://t.me/s3p1d" target="_blank">
                        <TelegramLogo className="telegram" />
                    </a>
                </div>
            </div>
            <PayBill />
            <Breakfast id="breakfast" />
            <Meal id="meal" />
            <Drinks id="drinks" />
            <Desserts id="desserts" />
            <Salad id="salad" />
            <Appetizer id="appetizer" />
            <Gallery id="gallery" />
            <About id="about" />
        </div >
    );
}