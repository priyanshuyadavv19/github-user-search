function UserCard({ user }) {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 max-w-sm mx-auto">
      <img className="rounded-full w-24 h-24 mb-3"
       src={user.avatar_url} alt={user.login} />
      <h2 className="text-xl font-bold">
        {user.name || user.login}
      </h2>
      <p className="text-gray-500 text-sm">
        @{user.login}
      </p>
      <p className="text-gray-600 text-sm mt-2">
        {user.bio || "No bio available."}
      </p>
      <div className="flex gap-6 mt-4">
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-xs">Repos</span>
          <span className="font-bold text-lg">{user.public_repos}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-xs">Followers</span>
          <span className="font-bold text-lg">{user.followers}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-xs">Following</span>
          <span className="font-bold text-lg">{user.following}</span>
        </div>
      </div>
      <a className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
       href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
    </section>
  )
}
export default UserCard