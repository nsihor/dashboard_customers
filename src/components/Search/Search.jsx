import searchSvg from "../../../src/images/svg/search.svg"
import styles from "./styles.module.scss"

const Search = ({handleChange}) => {
    return (
        <div className={styles.container}>
            <svg className={styles.container__svg}>
                <use xlinkHref={`${searchSvg}#search`}></use>
            </svg>
            <input className={styles.container__input} type="text" placeholder='Search' onChange={handleChange}/>
        </div>
    )
}

export default Search;