'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Frete extends ValidatorAbstract {
  get rules () {
    return {
      valor:'required|decimal',
      quantidade_passageiro:'required|integer',
      data_frete:'required|date',
      hora_partida:'required|decimal',
      hora_chegada:'required|decimal',
      cliente_id:'required|integer',
      aeronave_id:'required|integer',
      aeroporto_partida_id:'required|integer',
      aeroporto_destino_id:'required|integer'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}
module.exports = Frete

