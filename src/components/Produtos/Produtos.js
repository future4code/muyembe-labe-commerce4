import React from 'react';
import ListProdutos from './ListProdutos';


export default class Produtos extends React.Component {
    state = {
        sort: 'CRESCENTE'
    }


    getFiltroLista = () => {
        return this.props.produtos
        .filter((produto) => this.props.minFiltro ? produto.valor < this.props.minFiltro : true)
        .filter((produto) => this.props.maxFiltro ? produto.valor > this.props.maxFiltro : true)
        .filter((produto) => this.props.nameFiltro ? produto.name.includes(this.props.nameFiltro) : true)
        .sort((one, two) => this.state.sort === 'CRESCENTE' ? one.valor - two.valor : two.valor - one.valor)
    }
 
    onChangeRandom = (event) => {
        this.setState({sort: event.target.value})
      }

    render () {
        const filtroLista = this.getFiltroLista () 
        return (
            <div>
               <h1>Quantidade de produtos: {filtroLista.length}</h1>
               <label>
                   Ordenação:
                   <select value={this.state.random}>
                       <option value={'CRESCENTE'}>Crescente</option>
                       <option value={'DECRESCENTE'}n>Decrescente</option>
                   </select>
               </label>
                {filtroLista.map((produto) => {
                    return <ListProdutos produto={produto}
                    onAddCarrinho={this.props.onAddCarrinho}/>
                })}
            </div>
        );
    }
}