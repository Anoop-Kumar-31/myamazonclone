import css from "./SearchBar.module.css";
export default function SearchBar() {
    return (
        <div className={css.search}>
            <input type="text" placeholder="Search Amazon.in" className={css.search_input} />
            <button className={css.search_button}>
                <img src="searchbar.png" alt="" />
            </button>
        </div>
    )
}