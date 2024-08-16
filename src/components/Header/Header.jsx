import Logo from "../Logo/Logo";
import {useState} from "react";
import styles from "./styles.module.scss"
import menuSvg from "../../images/svg/burger-menu.svg"
import closeSvg from "../../images/svg/close.svg"
import MobMenu from "../MobMenu/MobMenu";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const svg = isMenuOpen ? `${closeSvg}#close` : `${menuSvg}#burger`;

    return (
        <>
            <header className={styles.header}>
                <Logo/>
                <svg className={styles.header__svg} onClick={() => setIsMenuOpen(ps => !ps)}>
                    <use xlinkHref={svg}></use>
                </svg>
            </header>
            {isMenuOpen && <MobMenu/>}
        </>
    )
}

export default Header;