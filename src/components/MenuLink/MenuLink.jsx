import { NavLink } from "react-router-dom";
import {useState} from "react";
import clsx from "clsx";
import spriteG from "../../images/svg/menu/symbol-defs-g.svg";
import spriteW from "../../images/svg/menu/symbol-defs-w.svg";
import styles from "./styles.module.scss";
import {PAGES} from "../../constants";

const MenuLink = ({ page }) => {
    const [hover, setHover] = useState(false)
    const to = page === PAGES.DASHBOARD ? '/' : `/${page}`;
    const chosenSprite = (isActive, hover) => isActive || hover ? spriteW : spriteG;

    return (
        <NavLink className={styles.wrap} to={to}
                 onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}
        >
            {({ isActive }) => (
                <div className={clsx(styles.link, isActive && styles.link_active)}>
                    <svg className={styles.link__svg}>
                        <use xlinkHref={`${chosenSprite(isActive, hover)}#icon-${page}`}></use>
                    </svg>
                    <span>{page.charAt(0).toUpperCase() + page.slice(1)}</span>
                    {page !== PAGES.DASHBOARD &&
                    <svg className={styles.link__svg_arr}>
                        <use xlinkHref={`${chosenSprite(isActive, hover)}#icon-m-arrow`}></use>
                    </svg>}
                </div>
            )}
        </NavLink>
    );
};

export default MenuLink;
