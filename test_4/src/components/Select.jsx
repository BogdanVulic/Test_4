

const Select = ({ launches, setSelect }) => {
    return (
        <select onChange={(e) => {
            setSelect(e.target.value)
        }} >
            <option value={launches.length}>All</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
        </select>
    )
}

export default Select
