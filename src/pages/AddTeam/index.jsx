import { useState } from 'react';
import '../../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function AddTeam() {
  const [form, setForm] = useState({});
  const [error, setError] = useState('');
  const handle = (target) => {
    setError('')
    const {value, name} = target;
    setForm({
      ...form,
      [name]: value
    })
    console.log(form)
  }
  
  const navigate = useNavigate()

  const addTeam = async () => {
    try {
      await axios.post('http://localhost:3001/teams', form);
      await axios.get('http://localhost:3001/teams');
      navigate("/teams")
    } catch (error) {
      setError('Erro ao criar');
      console.error('Error creating team:', error);
    }
  }


  return (
    <form>
        Nome: 
        <input 
          type='text' 
          min={3} 
          max={40}
          name='name' 
          placeholder='Digite o nome do time' 
          onChange={(e) => handle(e.target)} 
        />
        Local:
        <input 
          type='text' 
          min={3} 
          max={40}
          name='local'
          placeholder='Digite o local do time' 
          onChange={(e) => handle(e.target)} 
        /> 
        {error ? error : ''}
        <button type='button' onClick={addTeam}>Adicionar</button>
      </form>
  )
}

export default AddTeam