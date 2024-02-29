import { useContext } from "react"
import MyContext from "../../MyContext"
import MenuItem from "../MenuItem/MenuItem";
import coldDrinkPhoto from "../../img/svgs/orange-juice-juice-svgrepo-com.svg";
import "./drinks.css"
export default function Colddrinks() {
    const { drinks, order, flexType, titleBg } = useContext(MyContext);
    function order_juice() {
        order(drinks.coldDrinks.juice.name, drinks.coldDrinks.juice.price);
    }
    function order_lemonade() {
        order(drinks.coldDrinks.lemonade.name, drinks.coldDrinks.lemonade.price);
    }
    function order_peanutShake() {
        order(drinks.coldDrinks.peanutShake.name, drinks.coldDrinks.peanutShake.price);
    }
    function order_nutellaShake() {
        order(drinks.coldDrinks.nutellaShake.name, drinks.coldDrinks.nutellaShake.price);
    }
    function order_icedAmericano() {
        order(drinks.coldDrinks.icedAmericano.name, drinks.coldDrinks.icedAmericano.price);
    }
    function order_icedLate() {
        order(drinks.coldDrinks.icedLate.name, drinks.coldDrinks.icedLate.price);
    }
    return (
        <div className="item_wall cold_wall">
            <div className={titleBg + " title"}>
                <img className="icon" src={coldDrinkPhoto} alt="cold drink icon" />
                نوشیدنی سرد
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="juice"
                    itemName={drinks.coldDrinks.juice.name}
                    price={drinks.coldDrinks.juice.price}
                    onClick={order_juice} />
                <MenuItem
                    picClass="lemonade"
                    itemName={drinks.coldDrinks.lemonade.name}
                    price={drinks.coldDrinks.lemonade.price}
                    onClick={order_lemonade}
                    ingredients={drinks.coldDrinks.lemonade.ingredients} />
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="peanutShake"
                    itemName={drinks.coldDrinks.peanutShake.name}
                    price={drinks.coldDrinks.peanutShake.price}
                    onClick={order_peanutShake}
                    ingredients={drinks.coldDrinks.peanutShake.ingredients}
                />
                <MenuItem
                    picClass="nutellaShake"
                    itemName={drinks.coldDrinks.nutellaShake.name}
                    price={drinks.coldDrinks.nutellaShake.price}
                    onClick={order_nutellaShake}
                    ingredients={drinks.coldDrinks.nutellaShake.ingredients}
                />
            </div>
            <div className={flexType}>
                <MenuItem
                    picClass="icedAmericano"
                    itemName={drinks.coldDrinks.icedAmericano.name}
                    price={drinks.coldDrinks.icedAmericano.price}
                    onClick={order_icedAmericano}
                    ingredients={drinks.coldDrinks.icedAmericano.ingredients}
                />
                <MenuItem
                    picClass="icedLate"
                    itemName={drinks.coldDrinks.icedLate.name}
                    price={drinks.coldDrinks.icedLate.price}
                    onClick={order_icedLate}
                    ingredients={drinks.coldDrinks.icedLate.ingredients}
                />
            </div>
        </div>
    )
}