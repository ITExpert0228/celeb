var Celebdata = require('../models/celebdata');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.celebdata_create = function (req, res) {

};

exports.celebdata_details = function (req, res,next) {
    console.log(req.query.id);
    Celebdata.findById(req.query.id, function (err, celebdata) {
        if (err) return next(err);
        console.log(celebdata);
        res.send(celebdata);
    })
};
exports.celebdata_detailsbycate = function (req, res,next) {
    console.log("cate:"+req.query.Category);
    var Category = req.query.Category;
    var dict={};
    dict['$and'] = [
        {"Category": new RegExp(Category.toString(), "i")}
    ];
    var id = req.query.id;
    Celebdata.find(dict).limit(16).then((celebdata) => {
        var celebdata_temp=[];
        var str='';
         if(celebdata.length==16){
         for(var i=0; i<16;i++)
         {
             if(celebdata_temp.length<15)
             {
                if(celebdata[i]._id!=id)
                celebdata_temp.push(celebdata[i]);   
             } 
        }
        }else{
            for(var i=0; i<celebdata.length;i++)
            {
                if(celebdata[i]._id!=id)
                celebdata_temp.push(celebdata[i]);   
             }  
        }
          console.log(celebdata_temp);
          res.status(200).send(JSON.stringify(celebdata_temp));
        }).catch((err) => {
             res.status(404).send();
        });
    
};
exports.celebdata_detailsbyname = function (req, res,next) {
    console.log("name:"+req.query.name);
    console.log("index:"+req.query.index);
    var name = req.query.name; 
    name=name.toLowerCase();
    var index = req.query.index;
    var sortstring = req.query.sortstring;
    var sort=1;
    if (sortstring=='a') sort=1;
    else sort=-1;
    var pageNumber = index;
    var pageSize = 10;

    var dict = {};
    var result={};
     dict['$or'] = [
        {"name": new RegExp(name.toString(), "i")}
    ];
Celebdata.count(dict,function(err,count){
    console.log("count:"+count);
     Celebdata.find(dict , null, {
     sort: {
       name: sort
     }
   }).skip(pageNumber > 0 ? ((pageNumber - 1) * pageSize) : 0).limit(pageSize).exec(function(err, docs) {
    if(err)
    res.status(404).send();
    else {
        result={data:docs,totalcount:count};
        console.log("result:"+JSON.stringify(result));
        res.status(200).send(JSON.stringify(result));
    }
    });
 });
};
exports.celebdata_detailsbyalphabeta = function (req, res,next) {
    console.log("name:"+req.query.name);
    var name = req.query.name;
    var index = req.query.index;
    var findname = req.query.findname;
    var Category = req.query.Category;
    var sortstring = req.query.sortstring;
    var sort=1;
    if (sortstring=='a') sort=1;
    else sort=-1;
 
    name=name.toLowerCase();
    findname=findname.toLowerCase();
    var pageNumber = index;
    var pageSize = 10;
    var dict={};
    console.log("findname:"+findname);
    if(Category=='Search')
    {
        dict['$and'] = [
            {"name": new RegExp(name.toString(), "i")},
            {"name": new RegExp('^'+findname.toString(), "i")}
        ];
    }else{
        dict['$and'] = [
            {"name": new RegExp('^'+findname.toString(), "i")},
            {"Category": new RegExp(Category.toString(), "i")}
        ];
    }
   
    Celebdata.count(dict,function(err,count){
        console.log("count:"+count);
         Celebdata.find(dict , null, {
         sort: {
           name: sort
         }
       }).skip(pageNumber > 0 ? ((pageNumber - 1) * pageSize) : 0).limit(pageSize).exec(function(err, docs) {
        if(err)
        res.status(404).send();
        else {
            result={data:docs,totalcount:count};
      //      console.log("result:"+JSON.stringify(result));
            res.status(200).send(JSON.stringify(result));
        }
        });
     });
    
};
exports.celebdata_alls = function (req, res) {
    Celebdata.find({}).then((celebdata) => {
        var celebdata_temp=[];
         for(var i=0; i<celebdata.length;i++)
         {
            var contactObj = {
                _id:celebdata[i]._id,
                url:celebdata[i].url,
                image:celebdata[i].image,
                profiletext:celebdata[i].profiletext,
                pricing:celebdata[i].pricing,
                Type:celebdata[i].Type,
                Category:celebdata[i].Category,
                faq:celebdata[i].faq,
                name:celebdata[i].name,
                faq1:celebdata[i].faq[0],
                faq2:celebdata[i].faq[1],
                faq3:celebdata[i].faq[2],
                faq4:celebdata[i].faq[3],
               };
               celebdata_temp.push(contactObj);
         }
        
        var obj = {  data: celebdata_temp };
        res.status(200).send(JSON.stringify(obj));

     }).catch((err) => {
         res.status(404).send();
    });

};
exports.celebdata_allsbysitemap = function (req, res) {
    Celebdata.find({}).select({"_id": 1}).then((celebdata) => {
        res.status(200).send(JSON.stringify(celebdata));
        
     }).catch((err) => {
         res.status(404).send();
    });

};
exports.celebdata_allsbycate = function (req, res) {
   var Category = req.query.Category;
   var index = req.query.index;
    
   var dict={};
    dict['$and'] = [
        {"Category": new RegExp(Category.toString(), "i")}
    ];
    var sortstring = req.query.sortstring;
    var sort=1;
    if (sortstring=='a') sort=1;
    else sort=-1;
  
    var pageNumber = index;
    var pageSize = 10;
    var result={};
    Celebdata.count(dict,function(err,count){
        console.log("count:"+count);
         Celebdata.find(dict , null, {
         sort: {
           name: sort
         }
       }).skip(pageNumber > 0 ? ((pageNumber - 1) * pageSize) : 0).limit(pageSize).exec(function(err, docs) {
        if(err)
        res.status(404).send();
        else {
            result={data:docs,totalcount:count};
            console.log("result:"+JSON.stringify(result));
            res.status(200).send(JSON.stringify(result));
        }
        });
     });
};
exports.celebdata_setalls = function (req, res) {
    var celebdata = new Celebdata(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    celebdata.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Celebdata Created successfully');
    })

};
exports.celebdata_saveContent = function (req, res,next) {
    console.log(req.body);
    //  console.log(req.params);
  
      // res.status(200).send();return;
    //  console.log(req.body.data[0][id]);
    //  var celebdatatmp = JSON.stringify(req.body);
      var buf_celebdatatmp = req.body;
      var x;
      var id;
      var name;
      var url;
      var Category;
      var Type;
      var image;
      var profiletext;
      var pricing;
      var faq1ques;
      var faq1answ;
      var faq2ques;
      var faq2answ;
      var faq3ques;
      var faq3answ;
      var faq4ques;
      var faq4answ;
     
      var action;
     // console.buf("celeb:"+buf_celebdatatmp);
     for (x in buf_celebdatatmp) {
         
              if (x.includes("action")&&(buf_celebdatatmp[x]!='')){action=buf_celebdatatmp[x]; }
              if (x.includes("_id")&&(buf_celebdatatmp[x]!='')){ id=buf_celebdatatmp[x];}
              if(action!='remove')
               {
                   if (x.includes("name"))
                   { 
                        if(buf_celebdatatmp[x]!='')
                       {
                        name=buf_celebdatatmp[x]; 
                       }else{
                           var message= {"fieldErrors":[{"name":"name","status":"name is Not a valid "}],"data":[]};
                           res.status(200).send(message);
                           return false;
                       }
                  }
                  if (x.includes("url"))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        url=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"url","status":"url is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if (x.includes("Category"))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        Category=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"Category","status":"Category is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if (x.includes("Type"))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        Type=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"Type is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if (x.includes("image"))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        image=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"image","status":"image is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if (x.includes("profiletext"))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        profiletext=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"profiletext","status":"profiletext is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if (x.includes("pricing"))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        pricing=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"pricing","status":"pricing is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  console.log("celeb:"+x);
                  if ((x.includes("faq1"))&&(x.includes("ques")))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        faq1ques=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"faq1.ques","status":"faq1 question is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if ((x.includes("faq1"))&&(x.includes("answ")))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        faq1answ=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"faq1.answ","status":"faq1 answer is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if ((x.includes("faq2"))&&(x.includes("ques")))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        faq2ques=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"faq2.ques","status":"faq2 question is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if ((x.includes("faq2"))&&(x.includes("answ")))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        faq2answ=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"faq2.answ","status":"faq2 answer is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if ((x.includes("faq3"))&&(x.includes("ques")))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        faq3ques=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"faq3.ques","status":"faq3 question is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if ((x.includes("faq3"))&&(x.includes("answ")))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        faq3answ=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"faq3.answ","status":"faq3 answer is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if ((x.includes("faq4"))&&(x.includes("ques")))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        faq4ques=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"faq4.ques","status":"faq4 question is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
                  if ((x.includes("faq4"))&&(x.includes("answ")))
                  {
                      if(buf_celebdatatmp[x]!=''){
                        faq4answ=buf_celebdatatmp[x];
                      }else{
                          var message= {"fieldErrors":[{"name":"faq4.answ","status":"faq4 answer is Not a valid"}],"data":[]};
                          res.status(200).send(message);
                          return false;
                      }
                  }
          }
        }
   
      console.log("celebdatatmp:  "+id);
      console.log("celebdatatmp:faq1ques  "+faq1ques);
      console.log("celebdatatmp:faq2ques  "+faq2ques);
      console.log("celebdatatmp:faq3ques  "+faq3ques);
      console.log("celebdatatmp:  "+celebdatatmp);
      if(action=="create"){
          var celebdatatmp = new Celebdata(
            {
                url:url,
                image:image,
                profiletext:profiletext,
                pricing:pricing,
                Type:Type,
                Category:Category,
                name:name,
                faq:[
                        {
                        ques:  faq1ques,
                        answ:  faq1answ},
                        {
                        ques:  faq2ques,
                        answ:  faq2answ},
                        {
                        ques:  faq3ques,
                        answ:  faq3answ},
                        {
                        ques:  faq4ques,
                        answ:  faq4answ} 
                    ]
               }
          );
          console.log("celebdatatmp:  "+celebdatatmp);
          celebdatatmp.save(function (err, ncelebdatatmp) {
             
              if (err) {
                  return next(err);
              } 
              console.log("ncelebdatatmp:"+celebdatatmp);
              var retArr = [celebdatatmp];
              res.status(200).send(JSON.stringify({data:retArr}));
              // res.send('celebdatatmp Created successfully');
          })
      }else if(action=="edit"){
        var faqtmp=[
            {
            ques:  faq1ques,
            answ:  faq1answ},
            {
            ques:  faq2ques,
            answ:  faq2answ},
            {
            ques:  faq3ques,
            answ:  faq3answ},
            {
            ques:  faq4ques,
            answ:  faq4answ} 
        ]
          console.log("celebdatatmp: edit");
          console.log("celebdatatmp: edit"+id);
          Celebdata.findByIdAndUpdate(id,{$set: {
                url:url,
                image:image,
                profiletext:profiletext,
                pricing:pricing,
                Type:Type,
                Category:Category,
                name:name,
                faq:faqtmp
               }}, function (err, ncelebdatatmp) {
              if (err) return next(err);
              Celebdata.findById(id, function (err, ncelebdatatmp) {
                  if (err) return next(err);
                  var retArr = [ncelebdatatmp];
                  console.log(ncelebdatatmp);
                  res.status(200).send(JSON.stringify({data:retArr}));
              })
          });
      }else if(action=="remove"){
          console.log("removeid:"+id);
          Celebdata.findByIdAndRemove(id, function (err) {
            if (err) return next(err);
            var retArr = [];
            res.status(200).send(JSON.stringify({data:retArr}));
        });
      }
  

};

exports.celebdata_update = function (req, res) {
    Celebdata.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, celebdata) {
        if (err) return next(err);
        res.send('Celebdata udpated.');
    });
};

exports.celebdata_delete = function (req, res) {
    Celebdata.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};