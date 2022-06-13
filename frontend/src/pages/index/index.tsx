import { useEffect, useState, useRef } from "react";

type pedreirosType = {
    nome: string,
    localizacao: string,
    disponibilidade: boolean,
    tipoServico: string,
    telefone: string,
    email: string,
}

export function TestandoAPI() {

    const [pedreiros, setPedreiros] = useState<pedreirosType[]>([]);
    const pedreiroRef = useRef<pedreirosType[]>([]);

    // pedreiroRef.current = [];

    /* 
    
    Criando uma variavel pedreiros
    E criando um setPedreiros que irá atualizar a variavel pedreiro
    E ele usa a tipagem pedreirosType para o objeto com suas caracteristicas
    O [] no pedreirosType quer dizer que é um objeto, e que começará vazio []>([]) 
    
    */



    useEffect(() => {
        pedreiroRef.current = [];
        let testeAPI: any;
        fetch("http://localhost:1337/api/servicos").then(resposta => {
            return resposta.json()
        }).then(corpo => {
            testeAPI = corpo;
        });

        testeAPI?.forEach((element: pedreirosType) => {
            let pedreiro = {
                nome: element.nome,
                localizacao: element.localizacao,
                disponibilidade: element.disponibilidade,
                tipoServico: element.tipoServico,
                telefone: element.telefone,
                email: element.email,
            }

            pedreiroRef.current.push(pedreiro);
        });

        setPedreiros(pedreiroRef.current);
        setTimeout(() => {
            console.log(pedreiroRef.current);
        }, 5000);
    }, [])


    return (
        <div>
            <h1>Testando API</h1>
        </div>
    )
}

