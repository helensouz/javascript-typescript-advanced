exports.middlewareGlobal = (req, res, next) =>{
    
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace('souza', 'NAO USE SOUZA')
        console.log();
        console.log(`vi que voce postou ${req.body.cliente}`)
        console.log();
    }
    


    next()

}