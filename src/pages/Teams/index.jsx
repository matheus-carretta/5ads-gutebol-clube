import { useState, useEffect } from 'react';
import '../../App.css'
import ListItem from '../../components/ListItem';
import Loading from '../../components/Loading';
import axios from 'axios';

function Teams() {
  const [teamList, setTeamList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamList = async () => {
      try {
        const response = await axios.get('http://localhost:3001/teams');
        setTeamList(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };
    
    fetchTeamList();
  }, []);

  return (
    <>
      <h1>Times</h1>
      <ul>
        {
          loading ?
          <Loading /> :
          teamList.map((time) => <ListItem team={time.name} id={time.id} local={time.local} setTeamList={setTeamList} />)
        }
      </ul>
    </>
  )
}

export default Teams
