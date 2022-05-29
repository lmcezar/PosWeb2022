import React, { Suspense } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const ListarClientesApp = React.lazy(() => import('listar/ListarClientesApp'));
const CadastrarClienteApp = React.lazy(() => import('cadastrar/CadastrarClienteApp'));
const DetalheClienteApp = React.lazy(() => import('detalhes/DetalheClienteApp'));

export function Navegacao(){
    const navegacao = useNavigate();
    const url = useLocation();

    return(
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <ListarClientesApp navegar={navegacao} />
                </Suspense>
            }/>
            <Route path="/cadastrar" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <CadastrarClienteApp navegar={navegacao}/>
                </Suspense>
            }/>

            <Route path="/detalhes/:id" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <DetalheClienteApp navegar={navegacao} url={url} />
                </Suspense>
            }/>
        </Routes>
    );
}