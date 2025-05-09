export default function useWebRoutes (app) {
    
    app.get('/', (req, res) => {
        res.send("Qualquer coisa!")
    })
    
    app.get('/test', (req, res) => {
        res.send("Testando: 1, 2, 3")
    })
    
    app.get('/user/:id',(req, res) => {
        res.json({
            params: req.params,
            query: req.query,
            method: req.method,
            headers: req.headers
        })
    })

    app.get('/portifolio',(req, res) => {
        res.render('portifolio', {nome: 'Artur'})
    })
    
}