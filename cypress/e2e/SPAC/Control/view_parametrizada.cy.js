import { user, pass } from "../fixtures/credentials"

describe('API test View Parametrizadas', () => {
    it('init - pantalla inicial', () => {
        //api test get request
        cy.request({
            method: 'POST',
            url: "http://10.1.11.237:8080/etgs/api/spac/control/viewparametrizada/init",
            body: {
                username: user,
                password: pass
            }
        }).then(response =>{
            cy.wrap(response).as('resp')
        })
    })
})