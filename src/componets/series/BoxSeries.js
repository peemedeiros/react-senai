import React, { Component } from 'react';
import FormularioSeries from './FormularioSeries';
import TabelaSeries from './TabelaSeries'

class BoxSeries extends Component {

    constructor() {
        super()
        this.novaSerie = {
          nome: '',
          ano_lancamento: '',
          temporadas: '',
          sinopse: ''
        }
        this.state = {
          series: [],
          serie: this.novaSerie
        }
      }

      async componentDidMount() {
        let resposta = await fetch('http://localhost:3000/series')
        const series = await resposta.json()
        this.setState({ series: series })
      }

    enviaDados = async () => {
        console.log('enviando dados....')
        let { serie } = this.state
        const method = serie.id ? 'PUT' : 'POST'
        const params = {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(serie)
        }
        const urlParam = serie.id || ''
        try {
        const retorno =
            await fetch('http://localhost:3000/series/' + urlParam, params)
        console.log('enviado com sucesso')
        serie = await retorno.json()
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

        const seriesAtual = this.state.series
        
        const params = {
            method:'DELETE',
        }
        
        const retorno = await fetch('http://localhost:3000/series/'+id,params);
        console.log('adsasdasdasdasda')
        if(retorno.status === 204){
            this.setState({
                series: seriesAtual.filter((serie) => {
                    return serie.id !== id
                })
            })
        }
    }

    inputHandler = (name, value) => {
        this.setState({ serie: { ...this.state.serie, [name]: value } })
    }

    consulta = (serie) => {
        this.setState({ serie: serie })
        console.log(this.state.serie)
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                    <FormularioSeries
                    serie={this.state.serie}
                    enviaDados={this.enviaDados}
                    inputHandler={this.inputHandler} />
                </div>
                <div className="col-md-8">
                    <TabelaSeries
                    series={this.state.series}
                    consulta={this.consulta}
                    deleta={this.deleta}
                    />
                </div>
                </div>
            </div>
        )
    }
}

export default BoxSeries