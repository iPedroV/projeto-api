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


Route.resource('/users', 'UserController').apiOnly()

Route.post('/token', 'UserController.token')

//Route.group(() => {

Route.resource('/aeronave', 'AeronaveController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'aeronave'],
    ]))

Route.resource('/aeronavesCategoria', 'AeronavesCategoriaController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'aeronavesCategoria'],
    ]))

Route.resource('/aeroporto', 'AeroportoController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'aeroporto'],
    ]))
Route.resource('/categoria', 'CategoriaController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'categoria'],
    ]))

Route.resource('/cliente', 'ClienteController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'cliente'],
    ]))
Route.resource('/estado', 'EstadoController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'estado'],
    ]))

Route.resource('/frete', 'FreteController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'frete'],
    ]))

Route.resource('/fabricante', 'FabricanteController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'fabricante'],
    ]))

Route.resource('/modelo', 'ModeloController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'modelo'],
    ]))

//}).middleware('auth')