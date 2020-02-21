import React, { Component } from 'react';
import PubSub from 'pubsub-js';


class FormularioSeries extends Component {

    constructor(){
        super();
        this.stateInicial = {
            nome:'',
            ano_lancamento:'',
            temporadas:'',
            sinopse:'',
        }

        this.state = this.stateInicial;

        PubSub.subscribe('editing', (msg, serie) =>{
            this.setState(serie);
        });
    }

    inputHadler = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    enviarDados = async (e) => {
        e.preventDefault(); // Impede que a função padrão do elemento seja realizada
        await this.props.enviarDados(this.state);
        this.setState(this.stateInicial);
        delete this.state.id
    }

    render(){
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro
                </div>
                <div className="card-body">
                    <form method="post" onSubmit={this.enviarDados}>
                        <div className="form">
                            
                            <div className="form-group">
                                <label htmlFor='nome'>Nome</label>
                                <input type="text" id="nome" name="nome" className="form-control" onChange={this.inputHadler} value={this.state.nome}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor='nome'>Lançamentos</label>
                                <input type="text" id="lancamento" className="form-control" name="ano_lancamento" onChange={this.inputHadler} value={this.state.ano_lancamento}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor='nome'>Temporadas</label>
                                <input type="text" id="temporadas" className="form-control" name="temporadas" onChange={this.inputHadler} value={this.state.temporadas}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor='nome'>Sinopse</label>
                                <textarea id="sinopse" name="sinopse" className="form-control" onChange={this.inputHadler} value={this.state.sinopse}></textarea>
                            </div>
                            
                            <button className="btn btn-success form-control mt-2" type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
               

            </div>
        )

    }

}

export default FormularioSeries;