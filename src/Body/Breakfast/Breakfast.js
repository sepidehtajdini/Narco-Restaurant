import { useContext } from "react";
import MenuItem from "../MenuItem/MenuItem";
import MyContext from "../../MyContext";
import breakfastPhoto from "../../img/svgs/breakfast-svgrepo-com.svg";
import "./breakfast.css";
export default function Breakfast({ id }) {
    const { breakfast, order, flexType, titleBg } = useContext(MyContext);
    function order_omlet() {
        order(breakfast.omlet.name, breakfast.omlet.price);
    }
    function order_friedEgg() {
        order(breakfast.friedEgg.name, breakfast.friedEgg.price);
    }
    function order_sausages() {
        order(breakfast.sausages.name, breakfast.sausages.price);
    }
    return (
        <div id={id} className="item_wall breakfast_wall">
            <div className={titleBg + " title"}>
                <img className="icon" src={breakfastPhoto} alt="breakfast icon" />
                صبحانه
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="omlet"
                    itemName={breakfast.omlet.name}
                    price={breakfast.omlet.price}
                    onClick={order_omlet} />
                <MenuItem
                    picClass="friedEgg"
                    itemName={breakfast.friedEgg.name}
                    price={breakfast.friedEgg.price}
                    onClick={order_friedEgg} />
                <MenuItem
                    picClass="sausages"
                    itemName={breakfast.sausages.name}
                    price={breakfast.sausages.price}
                    onClick={order_sausages} />
            </div>
        </div>
    )
}