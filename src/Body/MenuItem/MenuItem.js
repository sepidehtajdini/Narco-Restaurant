import { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from "../../Button/Button";
import MyContext from '../../MyContext';
import "./menuItem.css";
export default function MenuItem({ picClass, itemName, ingredients, price, onClick }) {
    const { setNumber } = useContext(MyContext);
    return (
        <div className="menuItem">
            <div className={picClass + " item_pic"} />
            <h6>{itemName}</h6>
            قیمت: {price} تومان
            <Button btnClass="selectBtn" onClick={onClick} text="انتخاب" />
            <div className='numberOfOrders'>
                تعداد <select onChange={(e) => setNumber(e.target.value)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                </select>
            </div>
            {ingredients ? <div className="ingredients"> محتویات: {ingredients}</div> : null}
        </div>
    )
}