import React, {Component} from 'react';

const TableHead = () => {
    return (
        <thead>
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
            <div>
                <div className="list">
                    <table>
                        <TableHead/>
                        <TableBody series={series} />
                    </table>
                </div>
            </div>
        )
    }
}

export default TabelaSeries;