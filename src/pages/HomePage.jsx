import { useState } from "react"
import SearchBar from "../components/SearchBar"
import instance from "../api/githubApi"
import UserCard from "../components/UserCard"
function HomePage() {
  const [user, setUser] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  async function handleSearch(username) {
    try {
      setLoading(true)
      setError(null)
      setUser(null)
      const response = await instance.get(`/users/${username}`)
      setUser(response.data)
      setLoading(false)
    } catch(err) {
      setError(err)
      setLoading(false)
    }
  }
  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      {isLoading && <p>Searching.....</p>}
      {error && <p>{error.message}</p>}
      {user && <UserCard user={user}/>}
    </>
  )
}
export default HomePage