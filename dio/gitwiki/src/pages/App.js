import { useState } from 'react';
import githubLogo from '../assets/github-logo.png'
import Input from '../components/input';
import ItemsRepo from '../components/input/itemRepo';

import {Container} from './styles'
import { api } from '../services/api';

function App() {
  const [currentSearch, setcurrentSearch] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    const {data} = await api.get(`/repos/${currentSearch}`)

    if(data.id){

      const exist = repos.find(repo => repo.id === data.id)
      if(!exist){
        setRepos(prev => [...prev, data]);
        setcurrentSearch('')
      }

    }
  }

  const handleRemoveRepo = (id) => {
    const updatedRepos = repos.filter(item => item.id !== id);
    setRepos(updatedRepos);
  }

  return (
    <Container className="App">
      <img src={githubLogo} width={72} height={72} alt="gihub-logo"/>
      <Input value={currentSearch} onChange={(e) => setcurrentSearch(e.target.value)} onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemsRepo handleRemoveRepo={handleRemoveRepo}  repo={repo}/>)}
      
    </Container>
  );
}

export default App;
