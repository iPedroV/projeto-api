'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with aeronavescategorias
 */
 const AeronavesCategoria = use('App/Models/AeronavesCategoria')

class AeronavesCategoriaController {
  /**
   * Show a list of all aeronavescategorias.
   * GET aeronavescategorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const {page, perPage} = request.all()
    return AeronavesCategoria.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new aeronavescategoria.
   * GET aeronavescategorias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new aeronavescategoria.
   * POST aeronavescategorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single aeronavescategoria.
   * GET aeronavescategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await AeronavesCategoria.findOrFail(params.id);
  }

  /**
   * Render a form to update an existing aeronavescategoria.
   * GET aeronavescategorias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update aeronavescategoria details.
   * PUT or PATCH aeronavescategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a aeronavescategoria with id.
   * DELETE aeronavescategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const aeronavescategoria = await AeronavesCategoria.findOrFail(params.id)

    return await aeronavescategoria.delete()
  }
}

module.exports = AeronavesCategoriaController
