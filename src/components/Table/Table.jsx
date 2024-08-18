import Thead from "../Thead/Thead";
import Tbody from "../Tbody/Tbody";
import styles from "./styles.module.scss"

const Table = ({customers}) => {
    return (
        <table className={styles.table}>
            <Thead/>
            <Tbody customer={customers[0]}/>
        </table>
    )
}

export default Table;