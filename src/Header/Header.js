import { useContext, useEffect, useState } from "react";
import MyContext from "../MyContext";
import Button from "../Button/Button";
import Anchor from "./Anchor/Anchor";
import "./header.css";
import { ReactComponent as DarkMode } from '../img/svgs/toggle-on.svg';
import { ReactComponent as LightMode } from "../img/svgs/toggle-off.svg";
export default function Header() {
    const { setBillDisplay, smallNavbarDisplay, setSmallNavbarDisplay, largeNavbarDisplay, setLargeNavbarDisplay,
        setFlexType, dropdownMenu, setDropdownMenu, titleBg, open_dropdownMenu, toggleDarkLight,
        darkModeClass, lightModeClass, navbarToggleBtnMode } = useContext(MyContext);
    const [smallNav, setSmallNav] = useState("hide");
    const [navbarToggleBtn, setNavbarToggleBtn] = useState("hide");

    useEffect(() => {
        window.addEventListener("resize", function () {
            if (this.window.innerWidth < 992) {
                if (window.innerWidth < 768) {
                    setFlexType("flex_column_div")
                }
                else {
                    setFlexType("flex_row_div")
                }
                setNavbarToggleBtn("navbarToggleBtn");
                setSmallNav(`${titleBg} restaurant_header`)
                setLargeNavbarDisplay("hide");
            }
            else if (this.window.innerWidth >= 992) {
                setNavbarToggleBtn("hide");
                setSmallNav("hide")
                setLargeNavbarDisplay(`${titleBg} restaurant_header`);
            }
        });
        if (window.innerWidth < 992) {
            if (window.innerWidth < 500) {
                setFlexType("flex_column_div")
            }
            else {
                setFlexType("flex_row_div")
            }
            setNavbarToggleBtn("navbarToggleBtn");
            setSmallNav(`${titleBg} restaurant_header`)
            setLargeNavbarDisplay("hide");
        }
        else if (window.innerWidth >= 992) {
            setNavbarToggleBtn("hide");
            setSmallNav("hide");
            setLargeNavbarDisplay(`${titleBg} restaurant_header`);
        }
    }, [setLargeNavbarDisplay, setFlexType, titleBg]);

    function smallNavbar_display() {
        if (smallNavbarDisplay === "header_smallNavbar_hide") {
            setSmallNavbarDisplay("header_smallNavbar");
        }
        else {
            setSmallNavbarDisplay("header_smallNavbar_hide");
        }
    }

    return (
        <>
            <div className={smallNav}>
                <img alt="narco restaurant logo" src="/logo512.png" />
                کافه رستوران نارکو
                <Button
                    btnClass={navbarToggleBtn}
                    id={navbarToggleBtnMode}
                    onClick={smallNavbar_display} />
            </div>

            <div className={largeNavbarDisplay}>
                <div className={titleBg + " sibling_1"}>
                    <img alt="narco restaurant logo" src="/logo512.png" />
                    کافه رستوران نارکو
                </div>
                <Anchor
                    divClass={titleBg + " div_gallery"}
                    aClass={titleBg + " anchor a_gallery"}
                    text="تصاویر"
                    href="#gallery" />
                <Anchor
                    divClass={titleBg + " div_menu"}
                    aClass={titleBg + " anchor a_menu"}
                    text="منو"
                    href="#menu"
                    onClick={open_dropdownMenu}
                />
                <Anchor
                    divClass={titleBg + " div_bill"}
                    aClass={titleBg + " anchor a_bill"}
                    text="صورت حساب"
                    href="#bill"
                    onClick={() => setBillDisplay("show_bill")} />

                <Anchor
                    divClass={titleBg + " div_about"}
                    aClass={titleBg + " anchor a_about"}
                    text="درباره ما"
                    href="#about" />

                <div className={titleBg + " sibling_2"} />
                <div className={dropdownMenu} onClick={()=> setDropdownMenu("hide")}>
                    <a href="#breakfast">صبحانه</a>
                    <a href="#meal">غذاها</a>
                    <a href="#appetizer">پیش غذا</a>
                    <a href="#salad">سالاد</a>
                    <a href="#drinks">نوشیدنی</a>
                    <a href="#desserts">دسر</a>
                </div>
                <div className={titleBg + " toggler_div"}>
                    <DarkMode className={darkModeClass} onClick={toggleDarkLight} />
                    <LightMode className={lightModeClass} onClick={toggleDarkLight} />
                </div>
            </div>
        </>
    )
}