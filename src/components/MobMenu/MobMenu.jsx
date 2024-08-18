import styles from "./styles.module.scss"
import MenuLinkList from "../MenuLinkList/MenuLinkList";
import User from "../User/User";
import {users} from "../../constants";

const MobMenu = ({handleCloseMenu}) => {
    return (
        <div className={styles.container}>
            <MenuLinkList handleCloseMenu={handleCloseMenu}/>
            <User user={users[0]}/>
        </div>
    )
}

export default MobMenu;