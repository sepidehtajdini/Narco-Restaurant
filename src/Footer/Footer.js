import { useContext } from "react";
import MyContext from "../MyContext";
import "./footer.css";
import { ReactComponent as Top } from "./arrow-alt-circle-up.svg";
export default function Footer() {
    const { titleBg } = useContext(MyContext);
    return (
        <div className={titleBg + " restaurant_footer"}>
            کلیه حقوق مادی و معنوی این سایت مربوط به سپیده تاجدینی می‌باشد
            <a href="#">
                <Top style={{ fill: "red" }} />
            </a>
        </div>
    )
}