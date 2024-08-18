import {PAGES} from "../../constants";
import MenuLink from "../MenuLink/MenuLink";
import styles from "./styles.module.scss"

const MenuLinkList = ({handleCloseMenu}) => {
    return (
        <ul className={styles.list}>
            {Object.values(PAGES).map(link => <li key={link}><MenuLink page={link} handleCloseMenu={handleCloseMenu}/></li>)}
        </ul>
    )
}

export default MenuLinkList;