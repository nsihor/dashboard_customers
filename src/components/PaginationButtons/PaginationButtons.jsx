import styles from "./styles.module.scss";
import PaginationBtn from "../PaginationBtn/PaginationBtn";
import {useEffect, useState} from "react";

const PaginationButtons = ({ handleChangePage, countOfPages, currentPage }) => {
    const [visibleRange, setVisibleRange] = useState(3)

    useEffect(() => {
        const handleResize = () => window.innerWidth >= 992 ? setVisibleRange(3) : setVisibleRange(1);
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderButtons = () => {
        let buttons = [];

        buttons.push(
            <PaginationBtn key={1} p={1} handleChangePage={handleChangePage} currentPage={currentPage} />
        );

        if (currentPage > visibleRange + 1) {
            buttons.push(<p key="start-ellipsis">...</p>);
        }

        const startPage = Math.max(2, currentPage - visibleRange);
        const endPage = Math.min(countOfPages - 1, currentPage + visibleRange);

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <PaginationBtn key={i} p={i} handleChangePage={handleChangePage} currentPage={currentPage} />
            );
        }

        if (currentPage < countOfPages - visibleRange) {
            buttons.push(<p key="end-ellipsis">...</p>);
        }

        buttons.push(
            <PaginationBtn key={countOfPages} p={countOfPages} handleChangePage={handleChangePage} currentPage={currentPage} />
        );

        return buttons;
    };

    return (
        <div className={styles.pgn}>
            <PaginationBtn p="<" handleChangePage={handleChangePage} currentPage={currentPage} countOfPages={countOfPages}/>
            {renderButtons()}
            <PaginationBtn p=">" handleChangePage={handleChangePage} currentPage={currentPage} countOfPages={countOfPages}/>
        </div>
    );
};

export default PaginationButtons;
