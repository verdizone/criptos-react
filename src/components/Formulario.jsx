import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {

      const [criptos, setCriptos] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      // console.log("Consultando la API");
      const url =
        await "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName,
        };
        // console.log(objeto);
        return objeto
      });
      
      // console.log(arrayCriptos);
      setCriptos(arrayCriptos)
    };
    consultarAPI();
  }, []);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige la moneda", monedas);

  return (
    <div>
      <form action="">
        <SelectMonedas />

        <InputSubmit
          type="text"
          placeholder="Para texto"
          //   value='Cotizar'
        />
      </form>
    </div>
  );
};

export default Formulario;
