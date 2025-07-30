const ProdutoCard = ({ nome, preco, imagem, descricao, onDelete }) => {
    return (
        <div className="py-2">
            <div className="card p-1">
                {imagem && <img src={imagem} alt={nome} className="card-img-top" />}
                <div className="">
                    <h2 className="card-title">{nome}</h2>
                    <p className="card-text">Preço: R${preco}.00</p>
                    <p className="card-text">Descrição: {descricao}</p>
                </div>

                {onDelete && <button onClick={onDelete} className="btn btn-primary">Excluir</button>}
            </div>
        </div>

    )

}

export default ProdutoCard