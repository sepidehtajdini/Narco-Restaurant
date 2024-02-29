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
import { ReactComponent as DarkMode } from '../img/svgs/toggle-on.svg';
import { ReactComponent as LightMode } from "../img/svgs/toggle-off.svg";
import { ReactComponent as InstaLogo } from '../img/svgs/instagram.svg';
import { ReactComponent as TelegramLogo } from "../img/svgs/telegram-plane.svg";
export default function Body() {
    const { setBillDisplay, smallNavbarDisplay, dropdownMenu, setDropdownMenu, open_dropdownMenu,
        titleBg, toggleDarkLight, darkModeClass, lightModeClass, headerBtnClass, setSmallNavbarDisplay,
    } = useContext(MyContext);
    return (
        <div className="restaurant_body">
            <div id={smallNavbarDisplay} className={titleBg}>
                <Button
                    btnClass={headerBtnClass + " header_btn dropdown_btn"}
                    text="منو"
                    onClick={open_dropdownMenu} />
                <div className={dropdownMenu}>
                    <a
                        href="#breakfast"
                        onClick={() => {
                            setDropdownMenu("hide");
                            setSmallNavbarDisplay("header_smallNavbar_hide")
                        }}>صبحانه</a>
                    <a href="#meal"
                        onClick={() => {
                            setDropdownMenu("hide");
                            setSmallNavbarDisplay("header_smallNavbar_hide")
                        }}>غذاها</a>
                    <a href="#appetizer"
                        onClick={() => {
                            setDropdownMenu("hide");
                            setSmallNavbarDisplay("header_smallNavbar_hide")
                        }}>پیش غذا</a>
                    <a href="#salad"
                        onClick={() => {
                            setDropdownMenu("hide");
                            setSmallNavbarDisplay("header_smallNavbar_hide")
                        }}>سالاد</a>
                    <a href="#drinks"
                        onClick={() => {
                            setDropdownMenu("hide");
                            setSmallNavbarDisplay("header_smallNavbar_hide")
                        }}>نوشیدنی</a>
                    <a href="#desserts"
                        onClick={() => {
                            setDropdownMenu("hide");
                            setSmallNavbarDisplay("header_smallNavbar_hide")
                        }}>دسر</a>
                </div>
                <Button
                    btnClass={headerBtnClass + " header_btn"}
                    text="صورت حساب"
                    onClick={() => { setBillDisplay("show_bill"); setSmallNavbarDisplay("header_smallNavbar_hide") }} />
                <a href="#gallery"
                    className={headerBtnClass + " header_btn"}
                    onClick={() => setSmallNavbarDisplay("header_smallNavbar_hide")}>تصاویر</a>
                <a href="#about"
                    className={headerBtnClass + " header_btn"}
                    onClick={() => setSmallNavbarDisplay("header_smallNavbar_hide")}>درباره ما</a>
                <div className={titleBg + " toggler_div"}>
                    <DarkMode className={darkModeClass} onClick={toggleDarkLight} />
                    <LightMode className={lightModeClass} onClick={toggleDarkLight} />
                </div>
                <div className="small_nav_footer">
                    <a href="https://www.instagram.com/3ptaj" target="_blank" rel="noreferrer" >
                        <InstaLogo className="instagram" />
                    </a>
                    <a href="https://t.me/s3pid" target="_blank" rel="noreferrer">
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