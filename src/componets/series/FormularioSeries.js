import React, { Component } from 'react';


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
    }

    inputHadler = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    enviarDados = (e) => {
        e.preventDefault(); // Impede que a função padrão do elemento seja realizada
        this.props.enviarDados(this.state);
        this.setState(this.stateInicial);
    }

    render(){
        return (
            <div>
                <form method="post" onSubmit={this.enviarDados}>
                    <div className="form">
                        <label htmlFor='nome'>Nome</label>
                        <input type="text" id="nome" name="nome" onChange={this.inputHadler} value={this.state.nome}/>

                        <label htmlFor='nome'>Lançamentos</label>
                        <input type="text" id="lancamento" name="ano_lancamento" onChange={this.inputHadler} value={this.state.ano_lancamento}/>

                        <label htmlFor='nome'>Temporadas</label>
                        <input type="text" id="temporadas" name="temporadas" onChange={this.inputHadler} value={this.state.temporadas}/>

                        <label htmlFor='nome'>Sinopse</label>
                        <textarea id="sinopse" name="sinopse" onChange={this.inputHadler} value={this.state.sinopse}></textarea>

                        <button type="submit">Salvar</button>
                    </div>
                </form>

            </div>
        )

    }

}

export default FormularioSeries;