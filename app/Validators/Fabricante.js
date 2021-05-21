'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Fabricante extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:45',
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Fabricante

