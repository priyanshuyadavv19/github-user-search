import SearchBar from "../components/SearchBar"
import instance from "../api/githubApi"
function HomePage() {
  function handleSearch(username) {
    const fetchData = async () => {
      try {
        const response = await instance.get(`/users/${username}`)
        console.log(response.data)
      } catch(err) {
        console.error(err)
      }
    }
    fetchData()
  }
  return (
    <>
      <SearchBar onSearch={handleSearch}/>
    </>
  )
}
export default HomePage