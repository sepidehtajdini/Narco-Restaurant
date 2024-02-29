import { useContext } from "react";
import MyContext from "../../MyContext";
import MenuItem from "../MenuItem/MenuItem";
import hotDrinkPhoto from "../../img/svgs/chai-tea-svgrepo-com.svg";
import "./drinks.css"
export default function Hotdrinks() {
    const { drinks, order, flexType, titleBg } = useContext(MyContext);
    function order_masala() {
        order(drinks.hotDrinks.masala.name, drinks.hotDrinks.masala.price);
    }
    function order_hotChocolate() {
        order(drinks.hotDrinks.hotChocolate.name, drinks.hotDrinks.hotChocolate.price);
    }
    function order_whiteChocolate() {
        order(drinks.hotDrinks.whiteChocolate.name, drinks.hotDrinks.whiteChocolate.price);
    }
    function order_tea() {
        order(drinks.hotDrinks.tea.name, drinks.hotDrinks.tea.price);
    }
    return (
        <div className="item_wall hot_wall">
            <div className={titleBg + " title"}>
                <img className="icon" src={hotDrinkPhoto} alt="hot drink icon" />
                نوشیدنی گرم
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="masala"
                    itemName={drinks.hotDrinks.masala.name}
                    price={drinks.hotDrinks.masala.price}
                    onClick={order_masala}
                    ingredients={drinks.hotDrinks.masala.ingredients}
                />
                <MenuItem
                    picClass="hotChocolate"
                    itemName={drinks.hotDrinks.hotChocolate.name}
                    price={drinks.hotDrinks.hotChocolate.price}
                    onClick={order_hotChocolate}
                    ingredients={drinks.hotDrinks.hotChocolate.ingredients}
                />
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="whiteChocolate"
                    itemName={drinks.hotDrinks.whiteChocolate.name}
                    price={drinks.hotDrinks.whiteChocolate.price}
                    onClick={order_whiteChocolate}
                    ingredients={drinks.hotDrinks.whiteChocolate.ingredients}
                />
                <MenuItem
                    picClass="tea"
                    itemName={drinks.hotDrinks.tea.name}
                    price={drinks.hotDrinks.tea.price}
                    onClick={order_tea}
                />
            </div>
        </div>
    )
}