import { useEffect, useState } from "react";

function GithubStats() {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://api.github.com/users/github/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });

  }, []);


  if (loading) {
    return <p>Chargement des projets GitHub...</p>;
  }


  return (
    <section>

      <h2>Contributions GitHub</h2>

      {repos.slice(0, 5).map((repo) => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
        </div>
      ))}

    </section>
  );
}

export default GithubStats;