'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with estados
 */
 const Estado = use('App/Models/Estado')

class EstadoController {
  /**
   * Show a list of all estados.
   * GET estados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const {page, perPage} = request.all()
    return Estado.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new estado.
   * GET estados/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new estado.
   * POST estados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //Use o método abaixo na hora de pegar os dados!
    //getCamposEstado()
    const dados = Estado.getCamposEstado()
    const estado = request.only(dados)

    return await Estado.create(estado)
  }

  /**
   * Display a single estado.
   * GET estados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    //return await Estado.findOrFail(params.id);

    return await Estado.query().with('aeroportos').where('id', params.id).first()
  }

  /**
   * Render a form to update an existing estado.
   * GET estados/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update estado details.
   * PUT or PATCH estados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    //Use o método abaixo na hora de pegar os dados!
    //getCamposEstado()
    const estado = await Estado.findOrFail(params.id)

    const campos = Estado.getCamposEstado()
    const dados = request.only(campos)

    estado.merge(dados)
    await estado.save()

    return estado
  }

  /**
   * Delete a estado with id.
   * DELETE estados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const estado = await Estado.findOrFail(params.id)
    return await estado.delete()
  }
}

module.exports = EstadoController
