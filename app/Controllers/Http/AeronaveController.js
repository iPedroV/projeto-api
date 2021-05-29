'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with aeronaves
 */
 const Aeronave = use('App/Models/Aeronave')

class AeronaveController {
  /**
   * Show a list of all aeronaves.
   * GET aeronaves
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const {page, perPage} = request.all()
    return Aeronave.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new aeronave.
   * GET aeronaves/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new aeronave.
   * POST aeronaves
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //Use o método abaixo na hora de pegar os dados!
    //getCamposAeronave()
  }

  /**
   * Display a single aeronave.
   * GET aeronaves/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    //return await Aeronave.findOrFail(params.id);

    return await Aeronave.query()
                         .with('fretes')
                         .with('modelo')
                         .with('fabricante')
                         .with('categorias')
                         .where('id', params.id)
                         .first()
  }

  /**
   * Render a form to update an existing aeronave.
   * GET aeronaves/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update aeronave details.
   * PUT or PATCH aeronaves/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    //Use o método abaixo na hora de pegar os dados!
    //getCamposAeronave()
  }

  /**
   * Delete a aeronave with id.
   * DELETE aeronaves/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const aeronave = await Aeronave.findOrFail(params.id)

    return await aeronave.delete()

  }
}

module.exports = AeronaveController
