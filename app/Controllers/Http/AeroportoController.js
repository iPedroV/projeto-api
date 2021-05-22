'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with aeroportos
 */

 const Aeroporto = use('App/Models/Aeroporto')

class AeroportoController {
  /**
   * Show a list of all aeroportos.
   * GET aeroportos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const {page, perPage} = request.all()
    return Aeroporto.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new aeroporto.
   * GET aeroportos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new aeroporto.
   * POST aeroportos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //Use o método abaixo na hora de pegar os dados!
    //getCamposAeroporto()
  }

  /**
   * Display a single aeroporto.
   * GET aeroportos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    //return await Aeroporto.findOrFail(params.id);

    return await Aeroporto.query()
                          .with('estado')
                          //.with('fretes') COM PROBLEMA
                          .where('id', params.id).first()
  }

  /**
   * Render a form to update an existing aeroporto.
   * GET aeroportos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update aeroporto details.
   * PUT or PATCH aeroportos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    //Use o método abaixo na hora de pegar os dados!
    //getCamposAeroporto()
  }

  /**
   * Delete a aeroporto with id.
   * DELETE aeroportos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AeroportoController
