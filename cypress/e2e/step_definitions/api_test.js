/// <reference types="cypress"/>
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
//import {user, pass} from "cypress\support\credentials.js"

Given("envio POST", () => {
    // post cy.request to a url with username and password
    cy.request({
        method: 'POST',
        url: "http://10.1.11.237:8080/etgs/api/user/login",
        body: {
            username: "gpalladi",
            password: "Independiente1_"
        }
    }).then(response =>{
        cy.wrap(response).as('resp')
    })

})

Then("status code 200", () => {
    cy.get('@resp').then((response) => {
        console.log(response)
        expect(response.status, "status code 200").to.eq(200)
    })
})