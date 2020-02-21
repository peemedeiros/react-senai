import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import './TabelaSeries.css';



const ListaSeries = (props) => {

        if(props.series.erro)
            return <h1>{props.series.erro}</h1>
        

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
                         <a href=""
                            target="_blank"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            onClick={() => {
                                PubSub.publish('detail', serie)
                            }}>
                            Ver mais
                         </a>
                         <br/>
                         <button onClick={ () => {
                             if(window.confirm('deseja excluir')){
                                props.deleta(serie.id);
                             }
                             }} className="btn btn-danger btn-sm mr-10">

                            Excluir

                         </button>
                         <button 
                         className="btn bg-primary text-light btn-sm ml"
                         onClick={() => {
                             PubSub.publish('editing', serie)
                         }}>
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
    constructor(){
        super()
        this.state = {

            serieDetalhe : ''
            
        }
        
        PubSub.subscribe('detail', (msg, serie) => {
            this.setState({serieDetalhe: serie});
        })
    }
    render(){
        const {series, deleta} = this.props;
        const serieDetalhe = this.state.serieDetalhe

        return (
            <div className="card">
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{serieDetalhe.nome}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                <img  src="/logo192.png" /><br/>
                            </div>
                            
                            {serieDetalhe.temporadas}
                            {serieDetalhe.temporadas > 1 ? ' temporadas' : ' temporada'} <br/>
                            {serieDetalhe.ano_lancamento}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
                </div>
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