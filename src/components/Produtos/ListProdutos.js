import React from 'react';


export default class ListProdutos extends React.Component {
    render (){
        const produto = this.props.produto
        return (
            <div>
               <img src={produto.photo}/>
               <h2>{produto.name}</h2>
               <p>R$ {produto.valor},00</p>
               <button onClick={() => this.props.onAddCarrinho(produto.id)}>Adicionar ao carrinho </button>
            </div>
        );
    }
}