import Thead from "../Thead/Thead";
import Tbody from "../Tbody/Tbody";
import styles from "./styles.module.scss"

const Table = ({customers}) => {
    return (
        <table className={styles.table}>
            <Thead/>
            {customers.map(customer => <Tbody key={customer.id} customer={customer}/>)}
        </table>
    )
}

export default Table;