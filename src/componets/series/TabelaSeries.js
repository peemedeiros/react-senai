import React, {Component} from 'react';

const TableHead = () => {
    return (
        <thead className="thead-dark">
            <tr>
                <th>Nome</th>
                <th>Lançamentos</th>
                <th>Temporadas</th>
                <th>Sinopse</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    return(
        <tbody>
            {props.series.map(serie => {
                return (
                    <tr key={serie.id}>
                        <td>{serie.nome}</td>
                        <td>{serie.ano_lancamento}</td>
                        <td>{serie.temporadas}</td>
                        <td>{serie.sinopse}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}

class TabelaSeries extends Component{

    
    render(){

        const {series} = this.props;

        return (
            <div className="card">
                <div className="card-header">
                    Lista de Series
                </div>
                <div className="card-body">
                    <div className="list">
                        <table className="table table-striped table-dark table-hover">
                            <TableHead/>
                            <TableBody series={series} />
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TabelaSeries;