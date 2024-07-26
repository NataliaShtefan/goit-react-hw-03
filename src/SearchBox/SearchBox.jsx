import s from "./SearchBox.module.css"

const SearchBox = ({ searchValue, handleSearchChange }) => {
  return (
    <div className={s.container}>
        <label>
      <input type="text" 
      className={s.inputSearch}
      placeholder="Search contacts..." 
      value={searchValue} 
      onChange={(e) => handleSearchChange(e.target.value)} 
      />
      </label>
    </div>
  )
}

export default SearchBox
