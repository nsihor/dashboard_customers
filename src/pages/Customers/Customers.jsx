import styles from "./styles.module.scss"
import Greeting from "../../components/Greeting/Greeting";
import CustomersBlock from "../../components/CustomersBlock/CustomersBlock";
import {users} from "../../constants";

const Customers = () => (
    <div className={styles.container}>
        <div className={styles.container__greeting}>
            <Greeting name={users[0].name}/>
        </div>
        <CustomersBlock/>
    </div>
)

export default Customers;