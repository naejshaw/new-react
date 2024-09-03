import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import './App.css';

const TopicoBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const Item = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    border: 1px solid #cecece;
`;
export default function App() {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        fetch('https://testejean.free.beeceptor.com/cientistas-brasileiras')
        .then(response => response.json())
        .then(data => {
            setNomes(data);
        })
        .catch(error => {
            alert('Ops! Erro a seguir: ' + error)
        })
    }, []);

    const [name, setName] = useState('');
    const [area, setArea] = useState('');

    // Handle input changes
    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleAreaChange = (event) => {
      setArea(event.target.value);
    };

    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();

      const scientist = { name, area };

      fetch('https://testejean.free.beeceptor.com/cientistas-brasileiras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(scientist),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    };

    return (
        <TopicoBlock>
            <h1>Cientistas Brasileiras</h1>
            <ul>
                {nomes.map((item, index) => (
                    <Item key={index}>
                        <div><b>nome: </b>{item.name}</div>
                        <div><b>área: </b>{item.area}</div>
                    </Item>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input type="text" value={name} onChange={handleNameChange} />
              </label>
              <label>
                Área:
                <input type="text" value={area} onChange={handleAreaChange} />
              </label>
              <button type="submit">Add</button>
            </form>
        </TopicoBlock>
    )
}
