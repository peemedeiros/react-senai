import React, { Component } from 'react';
import FormularioSeries from './FormularioSeries';
import TabelaSeries from './TabelaSeries'
import { getToken } from '../../services/auth-service';
import { listar, inserir, atualizar, remover } from '../../services/series-service';

class BoxSeries extends Component {

    constructor(){
        super()
        this.state = {
            series: [],
        }
    }

    async componentDidMount(){
        try{

            const retorno = await listar();
            const series = await retorno.json()
            this.setState({series:series })

        } catch(erro) {

            console.log(erro)

        }
    }

    enviarDados = async (serie) => {
        try{
            let retorno = '';

            if(serie.id){
                retorno = await atualizar(serie)
            }else{
                retorno = await inserir(serie);
            }
        
            if (retorno.status === 201) {

                return this.setState({
                series: [...this.state.series, serie],
                serie: this.novaSerie
                })
            }

            if(retorno.status === 200){

                console.log(serie)
                this.setState({
                series: this.state.series.map(s => s.id == serie.id ? serie : s ),
                serie: this.novaSerie
                })
                console.log(this.state.series)
            } 
        } catch (erro) {
            console.log(erro)
        }
    
    }

    deleta = async (id) => {
        const seriesAtual = this.state.series;
        const retorno = await remover(id)
        
        if(retorno.status === 204){
            this.setState({
                series: seriesAtual.filter((serie) => {
                    return serie.id !== id
                })
            })
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <FormularioSeries enviarDados={this.enviarDados}/>
                    </div>
                    <div className="col-md-8">
                        <TabelaSeries series={this.state.series} deleta={this.deleta}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoxSeries