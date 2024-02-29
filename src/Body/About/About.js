import { useContext } from "react";
import MyContext from "../../MyContext";
import { ReactComponent as InstaLogo } from '../../img/svgs/instagram.svg';
import { ReactComponent as TelegramLogo } from "../../img/svgs/telegram-plane.svg";
import infoPhoto from "../../img/svgs/info-blue.svg";
import "./about.css";
export default function About({ id }) {
    const { titleBg } = useContext(MyContext);
    return (
        <div id={id}>
            <div className={titleBg + " title"}>
                <img src={infoPhoto} className="icon" alt="info icon" />
                درباره ما
            </div>
            <div className="about">
                <div>
                    <h3 style={{color:"red"}}>درباره ی نارکو</h3>
                    <div className="pattern" />
                </div>
                <p>
                    لذت صرف غذای سالم در محیطی درخور شان،
                    یکی از حس‌هایی است که می‌تواند خستگی یک هفته سخت و پر دغدغه را رفع کند
                    و انرژی مورد نیاز برای روزهای پیش رو را برای ما فراهم سازد.
                </p>
                <p>
                    ما در رستوران‌ نارکو با بیش از 10 سال تجربه
                    همواره افتخار داریم در محیطی اصیل بر پایه معماری و طراحی مدرن،
                    متناسب با هر نوع سلیقه و ذائقه‌ای با تکیه بر مهارت آشپزان آموزش دیده میزبان محافل دوستانه و کاری، جشن ها و مراسم های شما عزیزان باشیم تا اوقاتی خوش را در کنار یکدیگر تجربه نمایید.
                </p>
                <div className="flex_column_div">
                    <iframe title="narco location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.099167173883!2d51.50479217080486!3d35.790194086616495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b90e9d09bc245de!2zMzXCsDQ3JzI0LjciTiA1McKwMzAnMTUuMyJF!5e0!3m2!1sfa!2s!4v1648138526555!5m2!1sfa!2s"
                        allowFullScreen="" />
                    <div className="flex_row_div">
                        <a href="https://www.instagram.com/3ptaj" target="_blank">
                            <InstaLogo className="instagram" />
                        </a>
                        <a href="https://t.me/s3p1d" target="_blank">
                            <TelegramLogo className="telegram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}