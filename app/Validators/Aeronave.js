'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Aeronave extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:45',
      capacidade:'integer',
      autonomia:'required|decimal|min:2|max:15',
      horas_voo:'required|decimal|min:2|max:15',
      fabricacao:'required|date',
      ultima_revisao:'required|date',
      modelo_id: 'required|integer',
      marca_id:'required|integer'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Aeronave
