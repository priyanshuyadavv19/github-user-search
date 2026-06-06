function ReposList({ repos }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {[...repos].sort((a,b) => (b.stargazers_count - a.stargazers_count))
      .slice(0,6).map((repo) => (
        <div key={repo.id} className="bg-gray-800 rounded-xl p-4 flex flex-col gap-2">
          <h3 className="text-white font-semibold">{repo.name}</h3>
          <p className="text-gray-400 text-sm flex-1 ">
            {repo.description || "No description available."}</p>
          <p className="text-yellow-400 text-sm">⭐{repo.stargazers_count}</p>
          <a className="text-blue-400 text-sm hover:underline"
          href={repo.html_url} target="_blank" rel="noopener noreferrer">View Repo</a>
        </div>
      ))}
    </div>
  )
}
export default ReposList