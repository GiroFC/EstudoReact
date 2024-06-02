import { useState } from "react";
import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";

import ItemList from "../../components/ItemList";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState();

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;

      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );

      const newRepos = await reposData.json();

      console.log(newRepos);
      setRepos(newRepos);
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="conteudo">
        <img className="background" src={background} alt="background-app"></img>
        <div className="info">
          <div>
            <input
              name="usuario"
              placeholder="@username"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>

          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img
                  src={currentUser.avatar_url}
                  className="profileAvatar"
                  alt="profileAvatar"
                />
                <div className="card-into-profile">
                  <div className="profile-top">
                    <h3> {currentUser.name}</h3>
                    <h6>@{currentUser.login}</h6>
                  </div>
                  <p>{currentUser.bio}</p>
                </div>
              </div>

              <hr />
            </>
          ) : null}
          {repos?.length > 0 ? (
            <div className="repos">
              <h4>Repositórios</h4>

              <div className="repo-items">
              {/* <ItemList title={repos[0].name} description={repos[0].description} /> */}
                {repos.map((repo) => {
                  return <ItemList title={repo.name} description={repo.description} />
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
