'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with modelos
 */
 const Modelo = use('App/Models/Modelo')

class ModeloController {
  /**
   * Show a list of all modelos.
   * GET modelos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const {page, perPage} = request.all()
    return Modelo.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new modelo.
   * GET modelos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new modelo.
   * POST modelos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //Use o método abaixo na hora de pegar os dados! Como possui só um campo, pode fazer sem se quiser
    //getCamposModelo()
  }

  /**
   * Display a single modelo.
   * GET modelos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    //return await Modelo.findOrFail(params.id);

    return await Modelo.query().with('aeronaves').where('id', params.id).first()
  }

  /**
   * Render a form to update an existing modelo.
   * GET modelos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update modelo details.
   * PUT or PATCH modelos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    //Use o método abaixo na hora de pegar os dados! Como possui só um campo, pode fazer sem se quiser
    //getCamposModelo()
  }

  /**
   * Delete a modelo with id.
   * DELETE modelos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const modelo = await Modelo.findOrFail(params.id)

    return await modelo.delete()
  }
}

module.exports = ModeloController
