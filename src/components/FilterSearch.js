const FilterSearch = (props) => {
    return (
        <form>
            <input type="text" value={props.filteredSearch} onChange={(e) => props.setFilteredSearch(e.target.value)} />
        </form>
    )
}

export default FilterSearch