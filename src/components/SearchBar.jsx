import { useState } from "react"
function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("")
  function handleChange(event) {
    setUsername(event.target.value)
  }
  function handleSearch() {
    if (username.trim() === "") return
    onSearch(username)
  }
  function handleEnter(event) {
    if (event.key === "Enter") {
      handleSearch()
    }
  }
  return (
    <>
      <input type="text" value={username} onChange={handleChange} onKeyDown={handleEnter}/>
      <button onClick={handleSearch}>Search</button>
    </>
  )
}
export default SearchBar