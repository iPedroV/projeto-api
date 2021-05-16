'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Cliente extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:45',
      email:'email|max:100',
      data_nascimento:'required|date',
      telefone:'required|min:14|max:25',
      login:'required|max:25',
      senha:'integer'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Cliente

