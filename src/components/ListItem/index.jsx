import { useState } from "react";
import coracaoVazio from '../../assets/images/coracao-vazio.png';
import coracaoVermelho from '../../assets/images/coracao-vermelho.png';
import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({team, id, local, setTeamList }) {

  const [isFavorit, setIsFavorit] = useState(false);

  const handleClick = () => {
    setIsFavorit(!isFavorit);
  }

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/teams/${id}`);
    const response = await axios.get('http://localhost:3001/teams');
    setTeamList(response.data)
  }

  return (
    <>
      <li key={id}><Link to={`/teams/details/${id}`}>{team} - {local} </Link>
        <img src={'https://vasco.com.br/wp-content/uploads/2020/10/ESCUDO-VASCO-RGB-1-450x450.png'} width='50px' />
        <button type="button" onClick={handleDelete}>Deletar</button>
        <button type="button" onClick={handleClick}>{isFavorit ? 'Desfavoritar' : 'Favoritar'}</button>
        <img src={isFavorit ? coracaoVermelho : coracaoVazio} width={'30px'}></img>
      </li>
    </>
  )
}

export default ListItem;