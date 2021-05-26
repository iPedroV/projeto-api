'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with fretes
 */

 const Frete = use('App/Models/Frete')
class FreteController {
  /**
   * Show a list of all fretes.
   * GET fretes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const {page, perPage} = request.all()
    return Frete.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new frete.
   * GET fretes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new frete.
   * POST fretes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //Use o método abaixo na hora de pegar os dados!
    //getCamposFrete()
  }

  /**
   * Display a single frete.
   * GET fretes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    //return await Frete.findOrFail(params.id);

    return await Frete.query()
                      .with('cliente')
                      .with('aeronave')
                      .with('aeroporto_partida') 
                      .with('aeroporto_destino')
                      .where('id', params.id).first()
  }

  /**
   * Render a form to update an existing frete.
   * GET fretes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update frete details.
   * PUT or PATCH fretes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    //Use o método abaixo na hora de pegar os dados!
    //getCamposFrete()
  }

  /**
   * Delete a frete with id.
   * DELETE fretes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = FreteController
