import styles from "./styles.module.scss"
import Greeting from "../../components/Greeting/Greeting";
import CustomersBlock from "../../components/CustomersBlock/CustomersBlock";

const Customers = () => (
    <div className={styles.container}>
        <div className={styles.container__greeting}>
            <Greeting/>
        </div>
        <CustomersBlock/>
    </div>
)

export default Customers;