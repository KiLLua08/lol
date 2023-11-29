import { useState } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [playerSearch, setplayerSearch] = useState("")
  const [playerData, setplayerData] = useState({})

  console.log(playerSearch)
  
  const API_KEY = "RGAPI-6b6acaea-c6e6-4473-a5b4-a0a4dd06960e"
  const Icons = "http://ddragon.leagueoflegends.com/cdn/13.18.1/img/profileicon/" + playerData.profileIconId
  + ".png"
  
//https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Doublelift?api_key=RGAPI-6b6acaea-c6e6-4473-a5b4-a0a4dd06960e
  function searchForplayer(event) {
    var APIcall ="https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + playerSearch + "?api_key=" + API_KEY
    axios.get(APIcall).then(function(res) {
    setplayerData(res.data)
    console.log(playerData)
    }).catch(function(error) {
    console.log(error)
    })
  }

  return (
  <div className='App'>
    <div className="Container">
        <h5>League of Legends Player Search</h5>
        <input type="text" onChange={e => setplayerSearch(e.target.value)}/>
        <button onClick={e => searchForplayer(e)}>Search Player</button>
        <div className='usee!'>
        {JSON.stringify(playerData) !== '{}' ?
       <>
       <p>Summoner Name : {playerData.name}</p>
       <p>Summoner LvL : {playerData.summonerLevel}</p>
       <img width="100px" height="100px" alt='icon' src={Icons}/>
       </> 
       : 
       <><p>there is no data</p></>
    }
        </div>
    </div>
  </div>   
  );
}

export default App;
