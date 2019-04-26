var Altusdb = require('../models/altusdb');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.entertainment_create = function (req, res) {
    var entertainment = new Altusdb(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    entertainment.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Altusdb Created successfully');
    })
};

exports.entertainment_details = function (req, res,next) {
    Altusdb.findById(req.params.id, function (err, entertainment) {
        if (err) return next(err);
        res.send(entertainment);
    })
};
exports.entertainment_all = function (req, res) {
    Altusdb.find({}).then((entertainment) => {
      //  for(var i=0; i<entertainment.length;i++)
        var entertainment_temp=[];
        for(var i=0; i<5267;i++)
        {
            if(entertainment[i].title==null){entertainment[i].title='';}
            if(entertainment[i].profileimage==null){entertainment[i].profileimage='';}
            if(entertainment[i].reasontobook==null){entertainment[i].reasontobook='';}
            if(entertainment[i].profileurl==null){entertainment[i].profileurl='';}
            if(entertainment[i].tag==null){entertainment[i].tag=[];}
            if(entertainment[i].eventstype==null){entertainment[i].eventstype=[];}
            if(entertainment[i].reason==null){entertainment[i].reason=[];}
            if(entertainment[i].location==null){entertainment[i].location=[];}  
            if(entertainment[i].vediosrc==null){entertainment[i].vediosrc=[];}
            if(entertainment[i].images==null){entertainment[i].images=[];}  
            if(entertainment[i].Biography==null){entertainment[i].Biography='';}
            if(entertainment[i].PreviousClients==null){entertainment[i].PreviousClients='';}    
            if(entertainment[i].Testimonials==null){entertainment[i].Testimonials='';}    
            if(entertainment[i].SetList==null){entertainment[i].SetList='';}
            entertainment_temp.push(entertainment[i]);   
     //       console.log(i+":"+entertainment[i]); 
        }
        console.log(entertainment_temp);
       // res.setHeader('Content-Type', 'application/json');
      //  res.status(200).send(JSON.stringify(entertainment));
        var obj = {  data: entertainment_temp };
   //     console.log(JSON.stringify(obj));
         res.status(200).send(JSON.stringify(obj));
    }).catch((err) => {
         res.status(404).send();
    });

};
exports.entertainment_alls = function (req, res) {
    Altusdb.find({}).then((entertainment) => {
        for(var i=0; i<entertainment.length;i++)
        {
            if(entertainment[i].title==null){entertainment[i].title='';}
            if(entertainment[i].profileimage==null){entertainment[i].profileimage='';}
            if(entertainment[i].reasontobook==null){entertainment[i].reasontobook='';}
            if(entertainment[i].profileurl==null){entertainment[i].profileurl='';}
            if(entertainment[i].tag==null){entertainment[i].tag=[];}
            if(entertainment[i].eventstype==null){entertainment[i].eventstype=[];}
            if(entertainment[i].reason==null){entertainment[i].reason=[];}
            if(entertainment[i].location==null){entertainment[i].location=[];}  
            if(entertainment[i].vediosrc==null){entertainment[i].vediosrc=[];}
            if(entertainment[i].images==null){entertainment[i].images=[];}  
            if(entertainment[i].Biography==null){entertainment[i].Biography='';}
            if(entertainment[i].PreviousClients==null){entertainment[i].PreviousClients='';}    
            if(entertainment[i].Testimonials==null){entertainment[i].Testimonials='';}    
            if(entertainment[i].SetList==null){entertainment[i].SetList='';}
            console.log(i+":"+entertainment[i]);    
        }
       // console.log(entertainment);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(entertainment));
      //  res.status(200).send(entertainment);
     }).catch((err) => {
         res.status(404).send();
    });

};



exports.entertainment_allsbycateforlocation = function (req, res) {
    var showlocation = req.query.showlocation;
    console.log("showlocation:"+showlocation);
    Altusdb.find({}).then((entertainment) => {
        //  for(var i=0; i<entertainment.length;i++)
          var entertainment_temp=[];
          var str='';
          for(var i=0; i<entertainment.length;i++)
          {
            if(entertainment[i].location!=null){
              str=entertainment[i].location;
              if( str.search(showlocation)>-1)
                  entertainment_temp.push(entertainment[i]);   
                }
            }
          console.log(entertainment_temp);
           res.status(200).send(JSON.stringify(entertainment_temp));
      }).catch((err) => {
           res.status(404).send();
      });
};


exports.entertainment_allsbycate = function (req, res) {
    var showcate = req.query.showcate;
    console.log("aaaaaa"+showcate);
        Altusdb.find({

            tag: {
                "$in": [showcate]
            }
            }).then((altusdbs) => {
          //  console.log(altusdbs);
            // Facade pattern -> make a simple JSON object, containing just the diseases names and scoreOfDisease
            //                -> to easily communicate with the frontend
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(altusdbs));
        }).catch((err) => {
         //   console.log(err);
            res.status(404).send();
        });
    

};
exports. entertainment_allsbyid = function (req, res,next) {
    var id = req.query.id;
    console.log("aaaaaa"+id);
        Altusdb.find({
                   _id: id
            }).then((altusdbs) => {
                console.log(altusdbs);
                var popular=0;
                console.log("popular1:"+altusdbs[0].popular);
            if(altusdbs[0].popular!=null) popular= altusdbs[0].popular+1;
           Altusdb.findByIdAndUpdate(id, {$set:{popular:popular}}, function (err, entertainment) {
                    if (err) return next(err);
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).send(JSON.stringify(entertainment));
                    console.log("popular2:"+entertainment.popular);
            });
        }).catch((err) => {
         //   console.log(err);
            res.status(404).send();
        });
    

};


exports.entertainment_update = function (req, res,next) {
    Altusdb.findByIdAndUpdate(req.params.id, {$set: req.body.content}, function (err, entertainment) {
        if (err) return next(err);
        res.send('Altusdb udpated.');
    });
};

exports.entertainment_delete = function (req, res) {
    Altusdb.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.entertainment_save = function (req, res,next) {
    console.log(req.body);
  //  console.log(req.params);

    // res.status(200).send();return;
  //  console.log(req.body.data[0][id]);
  //  var entertainment = JSON.stringify(req.body);
    var buf_entertainment = req.body;
    var title = "";
    var x;
    var id;
    var profileimage;
    var profileurl;
    var eventstype=[];
    var tag=[];
    var reason=[];
    var vediosrc=[];
    var images=[];
    var Biography;
    var reasontobook;
    var PreviousClients;
    var Testimonials;
    var SetList;

    var action;
    
    for (x in buf_entertainment) {
       
            if (x.includes("action")&&(buf_entertainment[x]!='')){action=buf_entertainment[x]; }
            if (x.includes("_id")&&(buf_entertainment[x]!='')){ id=buf_entertainment[x];}
            if(action!='remove')
            {
                
               
                if (x.includes("title"))
                { 
                    if(buf_entertainment[x]!='')
                    {
                        title=buf_entertainment[x]; 
                    }else{
                        var message= {"fieldErrors":[{"name":"title","status":"title is Not a valid "}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("profileimage"))
                {
                    if(buf_entertainment[x]!=''){
                        profileimage=buf_entertainment[x];
                    }else{
                        var message= {"fieldErrors":[{"name":"profileimage","status":"profileimage is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("reasontobook"))
                {
                    if(buf_entertainment[x]!=''){
                        reasontobook=buf_entertainment[x];
                    }else{
                        var message= {"fieldErrors":[{"name":"reasontobook","status":"reasontobook is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("profileurl"))
                {
                    if(buf_entertainment[x]!=''){
                        profileurl=buf_entertainment[x];
                    }else{
                        var message= {"fieldErrors":[{"name":"profileurl","status":"profileurl is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("tag"))
                {
                    if(buf_entertainment[x]!=''){
                        tag=buf_entertainment[x];
                    }else{
                        var message= {"fieldErrors":[{"name":"tag","status":"tag is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("eventstype"))
                {
                    if(buf_entertainment[x]!=''){
                        eventstype=buf_entertainment[x];
                    }else{
                        var message= {"fieldErrors":[{"name":"eventstype","status":"eventstype is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("reason"))
                {
                    if(buf_entertainment[x]!=''){
                        reason=buf_entertainment[x];
                    }else{
                        var message= {"fieldErrors":[{"name":"reason","status":"reason is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("location"))
                {
                    if(buf_entertainment[x]!=''){
                        location=buf_entertainment[x];
                    }else{
                        var message= {"fieldErrors":[{"name":"location","status":"location is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("vediosrc"))
                {
                    if(buf_entertainment[x]!=''){
                        vediosrc=buf_entertainment[x];
                    }else{
                        var message= {"fieldErrors":[{"name":"vediosrc","status":"vediosrc is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("images"))
                {
                    if(buf_entertainment[x]!=''){
                        images=buf_entertainment[x];
                    }else{
                        var message= {"fieldErrors":[{"name":"images","status":"images is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("Biography"))
                {
                    if(buf_entertainment[x]!=''){
                        Biography=buf_entertainment[x];
                    }else{
                        var message= {"fieldErrors":[{"name":"Biography","status":"Biography is Not a valid"}],"data":[]};
                        res.status(200).send(message);
                        return false;
                    }
                }
                if (x.includes("PreviousClients"))
                {
                    if(buf_entertainment[x]!=''){
                        PreviousClients=buf_entertainment[x];
                    }else{
                        PreviousClients='';
                        // var message= {"fieldErrors":[{"name":"PreviousClients","status":"PreviousClients is Not a valid"}],"data":[]};
                        // res.status(200).send(message);
                        // return false;
                    }
                }
                if (x.includes("Testimonials"))
                {
                    if(buf_entertainment[x]!=''){
                        Testimonials=buf_entertainment[x];
                    }else{
                        Testimonials='';
                        // var message= {"fieldErrors":[{"name":"Testimonials","status":"Testimonials is Not a valid"}],"data":[]};
                        // res.status(200).send(message);
                        // return false;
                    }
                }
                if (x.includes("SetList"))
                {
                    if(buf_entertainment[x]!=''){
                        SetList=buf_entertainment[x];
                    }else{
                        SetList='';
                        // var message= {"fieldErrors":[{"name":"SetList","status":"SetList is Not a valid"}],"data":[]};
                        // res.status(200).send(message);
                        // return false;
                    }
                }
             
            }
            /*if (x.includes("role"))
            {   
                if(buf_entertainment[x]=='client'){
                     role=buf_entertainment[x];
                }else{
                    var message= {"fieldErrors":[{"name":"role","status":"role is Not a valid"},{"name":"RepeatPassword","status":"RepeatPassword is Not a valid"}],"data":[]};
                    res.status(200).send(message);
                    return false;
                }
            }*/
        }
       
 
    console.log("entertainment:  "+id);
    if(action=="create"){
        var entertainment = new Altusdb(
            {   
               title:title,
                profileurl:profileurl,
                tag:tag,
                profileimage:profileimage,
                eventstype:eventstype,
                reason:reason,
                reasontobook:reasontobook,
                location:location,
                vediosrc:vediosrc,
                images:images,
                Biography:Biography,
                PreviousClients:PreviousClients,
                Testimonials:Testimonials,
                SetList:SetList
            }
        );
        console.log("entertainment:  "+entertainment);
        entertainment.save(function (err, nentertainment) {
           
            if (err) {
                return next(err);
            } 
            console.log("nentertainment:"+entertainment);
           var retArr = [entertainment];
            res.status(200).send(JSON.stringify({data:retArr}));
            // res.send('entertainment Created successfully');
        })
    }else if(action=="edit"){
        console.log("entertainment: edit");
        console.log("entertainment: edit"+id);
        Altusdb.findByIdAndUpdate(id,{$set: {
            title:title,
            profileurl:profileurl,
            tag:tag,
            eventstype:eventstype,
            reason:reason,
            location:location,
            vediosrc:vediosrc,
            images:images,
            Biography:Biography,
            PreviousClients:PreviousClients,
            Testimonials:Testimonials,
            SetList:SetList }}, function (err, nentertainment) {
            if (err) return next(err);
            Altusdb.findById(id, function (err, nentertainment) {
                if (err) return next(err);
                var retArr = [nentertainment];
                console.log(nentertainment);
                res.status(200).send(JSON.stringify({data:retArr}));
            })
        });
    }else if(action=="remove"){
        console.log("id:"+id);
        Altusdb.findByIdAndRemove(id, function (err) {
            if (err) return next(err);
            var retArr = [];
            res.status(200).send(JSON.stringify({data:retArr}));
        })
    }

  };

