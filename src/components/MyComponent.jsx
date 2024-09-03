import React from 'react'
import axios from 'axios'

axios.get('https://testejean.free.beeceptor.com/cientistas-brasileiras')
    .then(data => {
        alert(`Conheça algumas cientistas brasileiras: ${data}`);
    })
    .catch(error => {
        alert(`Ops! Erro a seguir: ${error}`);
    })

axios.post('https://testejean.free.beeceptor.com/cientistas-brasileiras', {
    nome: 'Fulana',
    area: 'Alguma'
})
    .then(data => {
        alert(`Conheça algumas cientistas brasileiras: ${data}`);
    })
    .catch(error => {
        alert(`Ops! Erro a seguir: ${error}`);
    })

axios.delete('https://testejean.free.beeceptor.com/cientistas-brasileiras', {
    nome: 'Fulana',
    area: 'Alguma'
})
    .then(data => {
        alert(`Conheça algumas cientistas brasileiras: ${data}`);
    })
    .catch(error => {
        alert(`Ops! Erro a seguir: ${error}`);
    })

axios.put('https://testejean.free.beeceptor.com/cientistas-brasileiras', {
    nome: 'Fulana',
    area: 'Alguma'
})
    .then(data => {
        alert(`Conheça algumas cientistas brasileiras: ${data}`);
    })
    .catch(error => {
        alert(`Ops! Erro a seguir: ${error}`);
    })

export const MyComponent = () => {

    return (
        <></>
    )
}

export default MyComponent