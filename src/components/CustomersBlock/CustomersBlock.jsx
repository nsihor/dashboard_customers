import styles from "./styles.module.scss"
import PageTitle from "../PageTitle/PageTitle";
import Search from "../Search/Search";
import Table from "../Table/Table";

const CustomersBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__top}>
                <PageTitle page='All Customers' addText='Active Members'/>
                <Search handleChange={() => {}}/>
            </div>
            <Table/>
        </div>
    )
}

export default CustomersBlock;