import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function DetalheCliente(props){

    const [cliente, setCliente] = useState({});

      useEffect(()=>{
          getData();
      },[]);
  
      async function getData(){
        let id = props.url.pathname.split('/')
        id = id[2]
        console.log(id)
        const response = await api.get(`/clientes/${id}`)
        setCliente(response.data);
      }
  
      return(
          <ul>
              <li><b>ID:</b> {cliente.id}</li>
              <li><b>Nome:</b> {cliente.nome}</li>
              <li><b>Altura:</b> {cliente.altura}</li>
              <li><b>Peso:</b> {cliente.peso}</li>
              <li><b>Sexo:</b> {cliente.sexo}</li>
              <li><b>IMC:</b> {cliente.imc}</li>
          </ul>
      );

    

}