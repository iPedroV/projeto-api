'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class AeronavesCategoria extends ValidatorAbstract {
  get rules () {
    return {
      aeronave_id:  'required|integer',
      categoria_id: 'required|integer'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = AeronavesCategoria
