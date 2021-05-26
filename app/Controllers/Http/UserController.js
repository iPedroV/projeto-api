'use strict'

const User = use('App/Models/User')

class UserController {

    async index ({ request, response, view }) {

        return User.query().select(['id', 'username', 'email']).fetch()
    
        /*let {page, perPage} = request.all()
        return User.query().paginate(page, perPage)*/
    
    }

    async store ({ request, response }) {
    
        const dados = User.getCamposUser()
        const user = request.only(dados)

        return await User.create(user)

    }

    async show ({ params, request, response, view }) {
    
        return await User.query()
                        .select(['id', 'username', 'email'])
                        .where('id', params.id)
                        .first()
    
    }

    async update ({ params, request, response }) {

        const user = await User.findOrFail(params.id)
    
        const campos = User.getCamposUser()
        const dados = request.only(campos)
    
        user.merge(dados)
        await user.save()
    
        return user
    
    }

    async destroy ({ params, request, response }) {

        const user = await User.findOrFail(params.id)
    
        return await user.delete()
    
    }

    async token ({request, auth}){

        const {email, password} = request.all()
        return await auth.attempt(email, password)
    }

}

module.exports = UserController
