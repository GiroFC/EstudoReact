import React from "react";

import { ItemContainer } from "./styles";

function ItemsRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div className="options">
        <a href={repo.html_url} target="_blank" className="vizualizar">
          Vizualizar
        </a>
        <a className="remover" onClick={handleRemove}>
          Remover
        </a>
      </div>

      <hr />
    </ItemContainer>
  );
}

export default ItemsRepo;
