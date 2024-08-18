import styles from "./styles.module.scss"
import PageTitle from "../PageTitle/PageTitle";
import Search from "../Search/Search";
import Table from "../Table/Table";
import {customers} from "../../constants";
import CustomersPageInfo from "../CustomersPageInfo/CustomersPageInfo";

const CustomersBlock = () => {
    return (
        <div className={styles.block}>
            <div className={styles.block__top}>
                <PageTitle page='All Customers' addText='Active Members'/>
                <Search handleChange={() => {}}/>
            </div>
            <div className={styles.block__table}>
                <Table customers={customers}/>
            </div>
            <div className={styles.block__bottom}>
                <CustomersPageInfo/>
            </div>
            </div>
    )
}

export default CustomersBlock;