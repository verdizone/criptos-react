
import styled from '@emotion/styled'

import ImagenCriptos from './img/imagen-criptos.png'
import Formulario from "./components/Formulario"

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px, auto 0 auto;
  display: block;

`
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`


////////////////////////////////////////////

const App = () => {

/*   const consultarAPI = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    
    fetch(url)
    .then( response => response.json())
    .then( json => json.forEach(comentario => console.log(comentario)))
  }

  const consultarAPI2 = async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'

     const response = await fetch(url)
     const resultado = await response.json()
     resultado.forEach( comentario => console.log(comentario))
  } */
  
  return (
    <Contenedor>
      <Imagen 
        src={ImagenCriptos} 
        alt="ImagenCriptos" 
      />

      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario />     
      </div>


    </Contenedor>
  )
}

export default App
