import {useState} from "react";
import styles from "./styles.module.scss"
import PageTitle from "../PageTitle/PageTitle";
import Search from "../Search/Search";
import Table from "../Table/Table";
import CustomersPageInfo from "../CustomersPageInfo/CustomersPageInfo";
import PaginationButtons from "../PaginationButtons/PaginationButtons";
import {customers} from "../../constants";

const CustomersBlock = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredCustomers, setFilteredCustomers] = useState(customers)

    const customersPerPage = 8;
    const lastCustomerIndex = currentPage * customersPerPage;
    const firstCustomerIndex = lastCustomerIndex - customersPerPage;

    const currentCustomers = filteredCustomers.slice(firstCustomerIndex, lastCustomerIndex);
    const countOfCustomers = filteredCustomers.length;
    const lastCustomerIndexInfo = lastCustomerIndex > countOfCustomers ? countOfCustomers : lastCustomerIndex;
    const CountOfPages = Math.ceil(countOfCustomers / 8);

    const handleSearchChange = e => {
        const value = e.target.value;

        if (value === '') {
            setFilteredCustomers(customers)
        } else {
            const filteredArray = customers.filter(customer =>
                customer.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCustomers(filteredArray);
        }
    }

    return (
        <div className={styles.block}>
            <div className={styles.block__top}>
                <PageTitle page='All Customers' addText='Active Members'/>
                <Search handleChange={handleSearchChange}/>
            </div>

            {countOfCustomers > 0 &&
                <div className={styles.block__table}>
                    <Table customers={currentCustomers}/>
                </div>}

            {countOfCustomers > 0 &&
                <div className={styles.block__bottom}>
                    <CustomersPageInfo from={firstCustomerIndex + 1} to={lastCustomerIndexInfo}
                                       overall={countOfCustomers}/>
                    {countOfCustomers > customersPerPage &&
                        <PaginationButtons handleChangePage={setCurrentPage} countOfPages={CountOfPages}
                                           currentPage={currentPage}/>}
                </div>}

            {countOfCustomers === 0 &&
                <div className={styles.block__noresults}>
                    <p>No results found</p>
                </div>}
        </div>
    )
}

export default CustomersBlock;