import { useState } from "react"
import instance from "../api/githubApi"
import SearchBar from "../components/SearchBar"
import UserCard from "../components/UserCard"
import ReposList from "../components/ReposList"
function HomePage() {
  const [user, setUser] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [repos, setRepos] = useState([])
  async function handleSearch(username) {
    try {
      setLoading(true)
      setError(null)
      setUser(null)
      setRepos([])
      const response = await instance.get(`/users/${username}`)
      setUser(response.data)
      const reposResponse = await instance.get(`/users/${username}/repos`)
      setRepos(reposResponse.data)
    } catch(err) {
      if (err.response?.status === 404) {
        setError("User not found.....")
      } else {
        setError("Something went wrong....")
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      {isLoading && <p>Searching.....</p>}
      {error && <p>{error}</p>}
      {user && <UserCard user={user}/>}
      {repos.length > 0 && <ReposList repos={repos}/>}
    </>
  )
}
export default HomePage