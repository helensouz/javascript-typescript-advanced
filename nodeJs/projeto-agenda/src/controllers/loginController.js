const Login = require('../models/loginModel')
const { req, res } = require('express');

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado')
    res.render('login')
 
}

exports.register = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        }
        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function () {
            return res.redirect('/login/index');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};


exports.login = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.login();
        
      
        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.user = login.user
        req.session.save(function () {
            return res.redirect('/login/index');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.logout = function(req, res){
    req.session.destroy()
    res.redirect('/')
}


// exports.register = async function(req, res) {
//     try {
//         const login = new Login(req.body)
//         await login.register()

//         if(login.errors.length > 0){
//             req.flash('errors', login.errors)
//             req.session.save(function(){
//               return  res.redirect('back')
//             })
//             return
//         }
//         req.flash('success', 'seu usuario foi criado')
//         req.session.save(function(){
//            return  res.redirect('back')
//         })
    
//     } catch (e) {
//         console.log(e)
//        return  res.render('404')
//     }

//     //vaii ser preenchido cm os dados do formulario
// }




