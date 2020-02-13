import React, {Component} from 'react';
import './TabelaSeries.css';



const ListaSeries = (props) => {

    return(
        <div className="card-body card-body-flex">
            {props.series.map(serie => {
                return (
                <div className="card card-serie" key={serie.id}>
                    <div className="card-header">
                        <h5 className="card-title">{serie.nome}</h5>
                        <h6 className="card-title text-muted mb-0">{serie.nome}</h6>
                    </div>
                    <div className="card-body">
                        <img src="/logo192.png" alt="logo" />
                    </div>
                    <div className="card-footer">
                        {serie.temporadas}
                        {serie.temporadas > 1 ? ' temporadas' : ' temporada'}
                        <br />
                         <a href="" target="_blank">
                            Sinopse
                         </a>
                         <br/>
                         <button onClick={ () => {
                             if(window.confirm('deseja excluir')){
                                props.deleta(serie.id);
                             }
                             }} className="btn btn-danger btn-sm mr-10">

                            Excluir

                         </button>
                         <button className="btn bg-primary text-light btn-sm ml">
                            Editar
                         </button>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

class TabelaSeries extends Component{
    
    render(){

        const {series, deleta} = this.props;

        return (
            <div className="card">
                <div className="card-header">
                    Lista de Series
                </div>
                <div className="card-body card-body-flex">
                    <ListaSeries series={series} deleta={deleta} />
                </div>
            </div>
        )
    }
}

export default TabelaSeries;