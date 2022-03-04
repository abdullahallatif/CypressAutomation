
describe("API Test Examples", function(){
    Cypress.config("baseUrl","https://reqres.in/api/")
    
    
    it("GET - user lists", function() {
        cy.request({
            method:"GET",
            url: "/users?page=2"
           
        }).should((response) => {
         
            expect(response.status).to.eq(200)
            expect(response.body.per_page).to.eq(6)
        
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

    it("PUT - UPDATE", function(){

        cy.request({
            method:"PUT",
            url: "/users/2",
            body: {
                    "name": "morpheus",
                    "job" : "zion resident"
        }

        }).should((response) => {

            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq("morpheus")
            expect(response.body.job).to.eq("zion resident")
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
    