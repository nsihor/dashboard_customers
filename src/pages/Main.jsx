import Logo from "../components/Logo/Logo";
import MenuLink from "../components/MenuLink/MenuLink";
import MenuLinkList from "../components/MenuLinkList/MenuLinkList";
import User from "../components/User/User";
import {users} from "../constants";
import Greeting from "../components/Greeting/Greeting";

const Main = () => (
    <div>
        <Logo/>
        <MenuLinkList/>
        <User user={users[0]}/>
        <Greeting name={users[0].name}/>
    </div>
)

export default Main;