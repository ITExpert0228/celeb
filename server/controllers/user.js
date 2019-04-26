var User = require('../models/user');

//Simple version, without validation or sanitation
exports.test = function (req, res,next) {
    res.send('Greetings from the Test controller!');
};

exports.user_register = function (req, res, next) {
    console.log(req.body);
    var userObj = req.body.user;
    var user = new User(userObj);

    User.findOne({loginEmail: userObj.loginEmail}, function(err,obj) { 
        if (obj == null) {
            user.save(function (err, newUser) {
                if (err) {
                    return next(err);
                }
                res.send(newUser)
            })
        } else {
            console.log(obj);
            var duplicatedLoginNameErr = new Error("DUPLICATED");
            duplicatedLoginNameErr.status = 427; duplicatedLoginNameErr.statusText = "user exists";
            return next(duplicatedLoginNameErr);
        }
    });
    
};

exports.user_login = function (req, res, next) {
    res.clearCookie('status');

    var loginEmail = req.body.loginEmail;
    var password = req.body.password;
        
    User.findOne({loginEmail: loginEmail}, function(err,findUser) {
        if (err != null || findUser == null) {
            var passErr = new Error("USER_NOT_EXISTS");
            passErr.status = 427; 
            return next(passErr);
        } else {
            User.findOne({loginEmail: loginEmail, password: password}, function(err,findUser) {
                if (findUser != null) {
                    res.send(findUser)
                } else {
                    var passErr = new Error("INCORRECT_PASSWORD");
                    passErr.status = 427; 
                    passErr.statusText = "INCORRECT_PASSWORD";
                    return next(passErr);
                }
            })
        }
    })
};

exports.user_logout = function (req, res, next) {
    res.send('success')
    // if (req.body.api_params) {
    //     var jsonObj = JSON.parse(req.body.api_params);
    //     var os = jsonObj.os;
    // }

    // if (os) {
    //     authUtils.mobileLogout(req.session.userId, os, req, res, next, function(logoutErr, logoutResult) {
    //         if (logoutErr) {
    //             return next(logoutErr);
    //         } else {
    //             utils.destroySession(req);
    //             return utils.successResponse("logged out!", res, next);
    //         }
    //     });
    // } else {
    //     utils.destroySession(req);
    //     return utils.successResponse(consts.USER_LOGGED_OUT, res, next);
    // }
};

exports.user_details = function (req, res,next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_list = function (req, res) {
    User.find( {role:'client'}).then((userlist) => {
        var obj = {  data: userlist };
        console.log(JSON.stringify(obj));
         res.status(200).send(JSON.stringify(obj));
    }).catch((err) => {
         res.status(404).send();
    });
};
exports.user_alls = function (req, res) {
    User.find({}).then((users) => {
        // console.log(users);
        var obj = {  data: users };
      //  console.log(JSON.stringify(obj));
         res.status(200).send(JSON.stringify(obj));

     }).catch((err) => {
         res.status(404).send();
    });

};

exports.user_update = function (req, res,next) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('user udpated.');
    });
};


exports.user_save = function (req, res,next) {
    console.log(req.body);
  //  console.log(req.params);

    // res.status(200).send();return;
  //  console.log(req.body.data[0][id]);
     var user = JSON.stringify(req.body);
    var person = req.body;
    var text = "";
    var x;
    var id;
    var loginEmail;
    var firstName;
    var lastName;
    var password;
    var repeatpassword;
    var role;
  
    var action;
    
    for (x in person) {
       
            if (x.includes("action")&&(person[x]!='')){action=person[x]; }
            if(action!='remove')
            {
                if (x.includes("id")&&(person[x]!='')){ id=person[x];}
                if (x.includes("loginEmail"))
                {  
                    if(person[x]!=''){
                    var atpos = person[x].indexOf("@");
                    var dotpos = person[x].lastIndexOf(".");
                    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=person[x].length) {
                    var message= {"fieldErrors":[{"name":"loginEmail","status":"loginEmail is Not a valid e-mail address"}],"data":[]};
                    res.status(200).send(message);
                    return false;
                    }
                    loginEmail=person[x]; 
                    }else{
                        var message= {"fieldErrors":[{"name":"loginEmail","status":"loginEmail is Not a valid e-mail address"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    
                    }
                }
                if (x.includes("firstName"))
                { 
                    if(person[x]!='')
                    {
                        firstName=person[x]; 
                    }else{
                        var message= {"fieldErrors":[{"name":"firstName","status":"firstName is Not a valid "}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("lastName"))
                {
                    if(person[x]!=''){
                        lastName=person[x];
                    }else{
                        var message= {"fieldErrors":[{"name":"lastName","status":"lastName is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("password"))
                {
                    if(person[x]!=''){
                        password=person[x];
                        if(password.length<8){
                        var message= {"fieldErrors":[{"name":"password1","status":"password is at least 8 or more characters"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                      }
                    }else{
                        var message= {"fieldErrors":[{"name":"password1","status":"password is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("RepeatPassword"))
                {  
                    if(person[x]!=''){
                        repeatpassword=person[x];
                        if(repeatpassword.length<8){
                            var message= {"fieldErrors":[{"name":"RepeatPassword","status":"RepeatPassword is at least 8 or more characters"}],"data":[]};
                            res.status(200).send(message);
                            return false;
                          }
                        if(password!=repeatpassword){
                            var message= {"fieldErrors":[{"name":"password1","status":"password is Not a valid"},{"name":"RepeatPassword","status":"RepeatPassword is Not a valid"}],"data":[]};
                            res.status(200).send(message);
                            return false;
                        }
                    }else{
                        var message= {"fieldErrors":[{"name":"RepeatPassword","status":"RepeatPassword is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
            }
            /*if (x.includes("role"))
            {   
                if(person[x]=='client'){
                     role=person[x];
                }else{
                    var message= {"fieldErrors":[{"name":"role","status":"role is Not a valid"},{"name":"RepeatPassword","status":"RepeatPassword is Not a valid"}],"data":[]};
                    res.status(200).send(message);
                    return false;
                }
            }*/
        }
        
    var user = new User(
        {   
            loginEmail:loginEmail,
            firstName:firstName,
            lastName:lastName,
            password:password,
            role:role
        }
    );
    console.log("user:"+user);
    if(action=="create"){
        user.save(function (err, nuser) {
            if (err) {
                return next(err);
            }
           var retArr = [nuser];
            res.status(200).send(JSON.stringify({data:retArr}));
            // res.send('user Created successfully');
        })
    }else if(action=="edit"){
        console.log("user: edit");
        console.log("user: edit"+id);
        User.findByIdAndUpdate(id,{$set: {loginEmail:loginEmail,firstName:firstName,lastName:lastName,password:password,role:role }}, function (err, nuser) {
            if (err) return next(err);
            User.findById(id, function (err, nuser) {
                if (err) return next(err);
                var retArr = [nuser];
                console.log(nuser);
                res.status(200).send(JSON.stringify({data:retArr}));
            })
        });
    }else if(action=="remove"){
        User.findByIdAndRemove(id, function (err) {
            if (err) return next(err);
            var retArr = [];
            res.status(200).send(JSON.stringify({data:retArr}));
        })
    }

  };



exports.user_delete = function (req, res,next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};