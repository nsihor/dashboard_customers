import styles from "./styles.module.scss"
import PageTitle from "../PageTitle/PageTitle";
import Search from "../Search/Search";
import Table from "../Table/Table";
import {customers} from "../../constants";

const CustomersBlock = () => {
    return (
        <div className={styles.block}>
            <div className={styles.block__container}>
                <div className={styles.block__container_top}>
                    <PageTitle page='All Customers' addText='Active Members'/>
                    <Search handleChange={() => {}}/>
                </div>
            </div>
            <div className={styles.block__table}>
                <Table customers={customers}/>
            </div>
        </div>
    )
}

export default CustomersBlock;