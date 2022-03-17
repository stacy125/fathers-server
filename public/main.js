const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/users', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'testname4',
            email: 'test4@test.com',
            password: "passwordtest"
        })

    })
})
update.addEventListener('click', _ => {
    fetch('/events', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            type: 'Basketball',
            location: 'On the beach, Miami, FL',
            description: "this is a father and children sporting event.",
            price: "free",
            date: "October 24, 2021",
            time: "3:30 PM",
            website: "http://whoknowswhere.com"
        })

    })
})

app.use(bodyParser.Json())

app.put('/users', (req, res) => {
    console.log(req.body)
})
app.put('/events', (req, res) => {
    console.log(req.body)
})