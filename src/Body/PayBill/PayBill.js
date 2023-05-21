import { useContext } from "react";
import MyContext from "../../MyContext";
import Button from "../../Button/Button";
import "./payBill.css";
export default function PayBill() {
    const { billDisplay, setBillDisplay, counter, setCounter } = useContext(MyContext);
    const keyValues = [];
    const keys = [];
    const values = [];
    const numberOfOrder = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        const result = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        values.push(
            <td>
                {result.price}
                <Button
                    btnClass="delete_btn"
                    text="حذف"
                    onClick={() => {
                        setCounter(counter - (result.price * result.number));
                        alert(`${sessionStorage.key(i)} حذف شد.`);
                        sessionStorage.removeItem(sessionStorage.key(i));
                    }} />
            </td>
        );
        keys.push(<td>{sessionStorage.key(i)}</td>);
        numberOfOrder.push(<td className="number">{result.number}</td>);
        keyValues.push(<tr key={i}>{keys[i]}{values[i]}{numberOfOrder[i]}</tr>);
    }
    return (
        <div className={billDisplay}>
            <Button
                btnClass="close"
                onClick={() => setBillDisplay("hide")} />
            <h6>صورت حساب:</h6>
            <table>
                <thead>
                    <tr>
                        <th>نام</th>
                        <th>بهای واحد (تومان)</th>
                        <th className="number">تعداد</th>
                    </tr>
                </thead>
                <tbody>
                    {keyValues}
                </tbody>
                <tfoot>
                    <tr>
                        <td>قابل پرداخت:</td>
                        <td className="darkred" colSpan={2}>{counter} تومان</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}