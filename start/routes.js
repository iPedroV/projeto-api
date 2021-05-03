'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/aeronave', 'AeronaveController').apiOnly()
Route.resource('/aeronavesCategoria', 'AeronavesCategoriaController').apiOnly()
Route.resource('/aeroporto', 'AeroportoController').apiOnly()
Route.resource('/categoria', 'CategoriaController').apiOnly()
Route.resource('/cliente', 'ClienteController').apiOnly()
Route.resource('/estado', 'EstadoController').apiOnly()
Route.resource('/frete', 'FreteController').apiOnly()
Route.resource('/marca', 'MarcaController').apiOnly()
Route.resource('/modelo', 'ModeloController').apiOnly()