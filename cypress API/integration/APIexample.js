
describe("API Test Examples", function(){
    Cypress.config("baseUrl","https://reqres.in/api/")
    
    //const apiAuthorization= "Basic VGVzdFVzZXI0ODpMU2crMGhpP3k1Qyk="
    
    it("GET - user lists", function() {
        cy.request({
            method:"GET",
            url: "/users?page=2"
           
        }).should((response) => {
            //Assert that status is 200 for successful GET request
            expect(response.status).to.eq(200)
            expect(response.body.per_page).to.eq(6)
            //Assert that length is 3
            //expect(response.body).to.have.length(3)
            //Assert some of the key value pairs
    
        })
    })

    it("GET - Single User", function() {
        cy.request({
            method:"GET",
            url: "/users/2"
           
        }).should((response) => {
    
            expect(response.status).to.eq(200)
      
            expect(response.body.data.first_name).to.eq("Janet")
        })
    })    

    it("GET - Single User NOT FOUND", function(){

        cy.request({
            method:"GET",
            url: "/users/23"

        }).should((response) => {
            expect(response.status).to.eq(404)
        })

    })
    it('POST - Create user', function(){
        cy.request({
            method:"POST",
            url: "/users",
            body: {
                    "name": "morpheus",
                    "job": "leader"
            }

        }).should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq("morpheus")
            expect(response.body.job).to.eq("leader")

        })
    })

    it('DELETE - Delete User', function(){
        cy.request({
            method:"DELETE",
            url: "api/users/2"

        }).should((response) => {
            expect(response.status).to.eq(204)
        })
    })


})    
    