import Logo from "../Logo/Logo";
import {useEffect, useState} from "react";
import styles from "./styles.module.scss"
import menuSvg from "../../images/svg/burger-menu.svg"
import closeSvg from "../../images/svg/close.svg"
import MobMenu from "../MobMenu/MobMenu";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const svg = isMenuOpen ? `${closeSvg}#close` : `${menuSvg}#burger`;

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className={styles.header}>
                <Logo/>
                <svg className={styles.header__svg} onClick={() => setIsMenuOpen(ps => !ps)}>
                    <use xlinkHref={svg}></use>
                </svg>
            </header>
            {isMenuOpen && <MobMenu handleCloseMenu={() => setIsMenuOpen(false)}/>}
        </>
    )
}

export default Header;