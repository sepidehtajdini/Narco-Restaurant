import { useContext } from "react";
import MyContext from "../MyContext";
import "./footer.css";
import { ReactComponent as Top } from "../img/svgs/arrow-alt-circle-up.svg";
export default function Footer() {
    const { titleBg } = useContext(MyContext);
    return (
        <div className={titleBg + " restaurant_footer"}>
            کلیه حقوق مادی و معنوی این سایت متعلق به سپیده تاجدینی می‌باشد
            <a href="#breakfast">
                <Top style={{ fill: "red"}} />
            </a>
        </div>
    )
}