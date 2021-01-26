import React from 'react';
import ItemCarrinho from './ItemCarrinho';


export default class Carrinho extends React.Component {
    valorTotal = () => {
        let totalValor = 0

        for (let produto of this.props.produtoCarrinho){
            totalValor += produto.valor * produto.quantity
        }
        return totalValor
    }


    render (){
        return (
            <div>
                <h2>Carrinho:</h2>
                {this.props.produtoCarrinho.map((produto) => {
                    return  <ItemCarrinho carItem={produto}
                    removeCarrinho={this.props.removeCarrinho}/>
                })}
                <p>Valor total: R${this.valorTotal()},00</p>
            </div>
        );
    }
}