import Logo from "../Logo/Logo";
import MenuLinkList from "../MenuLinkList/MenuLinkList";
import User from "../User/User";
import {users} from "../../constants";
import styles from "./styles.module.scss"


const Aside = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.aside__top}>
                <Logo/>
                <MenuLinkList/>
            </div>
            <User user={users[0]}/>
        </aside>
    )
}

export default Aside