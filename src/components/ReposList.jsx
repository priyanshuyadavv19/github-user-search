function ReposList({ repos }) {
  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description || "No description available."}</p>
          <p>⭐{repo.stargazers_count}</p>
          <a href={repo.html_url} target="_blank">View Repo</a>
        </div>
      ))}
    </div>
  )
}
export default ReposList