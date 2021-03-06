'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with fabricantes
 */
 const Fabricante = use('App/Models/Fabricante')
class FabricanteController {
  /**
   * Show a list of all fabricantes.
   * GET fabricantes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const {page, perPage} = request.all()
    return Fabricante.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new fabricante.
   * GET fabricantes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new fabricante.
   * POST fabricantes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //Use o método abaixo na hora de pegar os dados! Como possui só um campo, pode fazer sem se quiser
    //getCamposFabricante()
  }

  /**
   * Display a single fabricante.
   * GET fabricantes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    //return await Fabricante.findOrFail(params.id);

    return await Fabricante.query().with('aeronaves').where('id', params.id).first()
  }

  /**
   * Render a form to update an existing fabricante.
   * GET fabricantes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update fabricante details.
   * PUT or PATCH fabricantes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    //Use o método abaixo na hora de pegar os dados! Como possui só um campo, pode fazer sem se quiser
    //getCamposFabricante()
  }

  /**
   * Delete a fabricante with id.
   * DELETE fabricantes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const fabricante = await Fabricante.findOrFail(params.id)

    return await fabricante.delete()
  }
}

module.exports = FabricanteController
