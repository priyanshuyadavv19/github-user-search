import { useState, useRef, useEffect } from "react"
function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("")
  const inputElement = useRef(null)
  useEffect(() => {
    inputElement.current.focus()
  },[])
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
    <div className="flex gap-2 max-w-xl mx-auto mt-10">
      <input className="flex-1 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 bg-gray-800 text-white placeholder-gray-400" placeholder="Search GitHub username...." ref={inputElement}
      type="text" value={username} onChange={handleChange} onKeyDown={handleEnter}/>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
      onClick={handleSearch}>Search</button>
    </div>
  )
}
export default SearchBar