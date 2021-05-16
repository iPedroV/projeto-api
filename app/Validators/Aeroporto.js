'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Aeroporto extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:200',
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Aeroporto

