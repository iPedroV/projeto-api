'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Estado extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:45',
      uf: 'required|min:2|max:2'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}
module.exports = Estado