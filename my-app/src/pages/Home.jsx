import { useState, useEffect, } from "react";
import ProdutoCard from "../components/ProdutoCard";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';




function Home() {

    // 1- Lista dinamica dos produtos renderizados na tela 
    const [produtos, setProdutos] = useState([]);
    const [novoProduto, setNovoProduto] = useState({
        nome: "",
        preco: "",
        descricao: ""
    });

    useEffect(() => {
        const ListaDeProduto = [
            { id: 0, nome: "Camisa", preco: 50.00, descricao: 'Camisa Oversized' },
            { id: 1, nome: "Calça", preco: 80.00, descricao: 'Calça joker' },
            { id: 2, nome: 'Bermuda', preco: 45.00, descricao: 'Bermuda Cargo' }
        ];
        setTimeout(() => {
            setProdutos(ListaDeProduto);
        }, 1200);
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault()

        const novo = {
            ...novoProduto,
            id: Date.now(),
        }
        setProdutos([...produtos, novo])
        setNovoProduto({ nome: '', preco: '', descricao: '', imagem: '' })
    }

    const handleDeleteProduto = (id) => {
        const novaLista = produtos.map(produto => produto.id !== id);
        setProdutos(novaLista);
    }


    return (
        <>
            <>
                <div className="p-4 m-5" >
                    <h3>Lista de produtos:</h3>
                    <div className="p-3 m-4">
                        <div key={produtos.id} >
                            <> {produtos.map((produtos) => <ProdutoCard key={produtos.id} {...produtos} onDelete={() => handleDeleteProduto(produtos.id)} />)}</>
                        </div>
                    </div>

                </div>



                <form onSubmit={handleSubmit} className="">
                    <h2 className="p-4 m-5">Adicionar Novo Produto:</h2>
                    <div className="d-flex justify-content-center align-items-center py-3 b-2">
                        <>
                            <div className="p-1 ">
                                <label htmlFor="nome">Nome:</label>
                                <input
                                    type="text"
                                    value={novoProduto.nome}
                                    onChange={(e) =>
                                        setNovoProduto({ ...novoProduto, nome: e.target.value })
                                    }
                                />

                            </div>
                            <div className="p-1">
                                <label htmlFor="preco">Preço:</label>
                                <input
                                    type="text"
                                    value={novoProduto.preco}
                                    onChange={(e) =>
                                        setNovoProduto({ ...novoProduto, preco: e.target.value })
                                    }
                                />
                            </div>
                            <div className="p-1">
                                <label htmlFor="descricao">Descrição:</label>
                                <input
                                    type="text"
                                    value={novoProduto.descricao}
                                    onChange={(e) =>
                                        setNovoProduto({ ...novoProduto, descricao: e.target.value })
                                    }
                                />
                            </div>
                        </>
                        <button type="submit" className="btn btn-primary ">Enviar</button>

                    </div>
                    
                </form>
            </>
        </>
    );
}


export default Home