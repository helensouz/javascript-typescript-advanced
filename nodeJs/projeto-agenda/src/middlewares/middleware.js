exports.middlewareGlobal = (req, res, next) =>{
    
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.'
    next()

}

// exports.checkCsrfError = (err, req, res, next) => {
//     if(err && err.code === 'EBADCSRFTOKEN'){
//         return res.render('404')
//     }
// }

