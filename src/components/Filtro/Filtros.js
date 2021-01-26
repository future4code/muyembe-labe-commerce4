import React from 'react';


export default class Filtros extends React.Component {
    render (){
        return (
            <div>
               <h3>Filtros</h3>
               <label>
                   Valor minimo:
                   <input type="number"
                   value={this.props.minFiltro}
                   onChange={this.props.MinFiltro}/>
               </label>
               <label>
                   Valor maximo:
                   <input type="number"
                    value={this.props.maxFiltro}
                   onChange={this.props.MaxFiltro}/>
               </label>
               <label>
                   Buscar produto:
                   <input type="text"
                    value={this.props.nameFiltro}
                    onChange={this.props.NameFiltro}/>
               </label>
            </div>
        );
    }
}