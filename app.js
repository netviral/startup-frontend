require("dotenv").config();
const nodemailer=require("nodemailer");

// Importing required node_modules -  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 
// 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
const express=require("express");  
const qs = require('qs');
const bodyParser=require("body-parser");
const app=express();                
const ejs=require("ejs");           
const axios = require('axios');     
const marked = require("marked"); 
const ejsLint = require('ejs-lint');
const { response } = require("express");
const xss=require("xss");


// inkyparchments@gmail.com to submissions.inky@gmail.com the works submitted on the website

const { google } = require("googleapis");

const CLIENT_ID=process.env.CLIENT_ID;
const CLIENT_SECRET=process.env.CLIENT_SECRET;
const REFRESH_TOKEN=process.env.REFRESH_TOKEN;
const REDIRECT_URI=process.env.REDIRECT_URI;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN}); 


// inkyparchments@gmail.com to submissions.inky@gmail.com the works submitted on the website

let axiosDefaults = require('axios/lib/defaults');
const { forEach } = require("axios/lib/utils");

axiosDefaults.baseURL = 'http://localhost:1337/api/';
var url="http://localhost:1337/api/";

// MISCELLANEOUS  
app.set("view engine", "ejs"); // set view engine to EJS
app.listen(3000);              // Listen to port 3000
app.use(express.static(__dirname+"/public")); // To use CSS and Assets in Express 
app.use(bodyParser.json({limit: '50mb'}));       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({limit: '50mb',extended: false }));
const launchKey=388; // required for launch authentication
var TurndownService = require('turndown')

var turndownService = new TurndownService()


//-----------------------------------------------------------------------------------------------------------------
// THIS PIECE OF CODE CUSTOMISES THE MARKDOWN PARSER TO RETURN anchor links with target=_blank; 
// Also, images are rendered with classes/styles, and corrected src attribute 
// References - https://github.com/markedjs/marked/issues/655#issuecomment-383226346
//            - https://gist.github.com/Snugug/9203fd0dc5e00d8ce799

const renderer = new marked.Renderer(); 
const linkRenderer = renderer.link;
const imageRenderer = renderer.image;
renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
};
renderer.image = (href, title, text) => {
    const html = imageRenderer.call(renderer, href, title, text);
    return html.replace(/^<img "/, '<img class="left" ');
};
// -----------------------------------------------------------------------------------------------------------------

app.get("/elements", function(req, res){
  res.render("elements");
});




//  LAUNCH-----------------------------------------------------------------------------------------------------------------


// var isLaunched = false;
// var isAuthenticatedForLaunch=false;
// app.use('/launch', (req, res, next) => {
// 	if (isLaunched) {
// 		return next()
// 	}
// 	if (req.method == "POST") {
// 		isAuthenticatedForLaunch=true;
// 		setTimeout(function () {
// 			res.redirect("/launched");
// 		}, 3000);
// 	} else {
// 		res.render("key",{err:""});
// 	}
// });


// app.use('/launched', (req, res, next) => {
// 	if (isLaunched) {
// 		return next()
// 	}
// 	if(isAuthenticatedForLaunch){
// 	if (req.method === "GET") {
// 		res.render("launch1");
// 	} else {
// 		isLaunched = true;
// 		res.redirect("/");
// 	}
//  }else{
// 	 res.redirect("/");
//  }
// });

// app.use('/key', (req, res, next) => {
// 	if (isLaunched) {
// 		return next()
// 	}
// 	if (req.method == "POST") {
//         if(req.body.key==launchKey){
//            isAuthenticatedForLaunch=true;
//            res.render("inauguration");
//         }else{
//             res.render("key",{err:"Incorrect key"});
//         }
//     }else{
//         return next()
//     }

// });


// app.use('*', (req, res, next) => {
// 	if (isLaunched) {
// 		return next()
// 	}
// 	res.render('error',{err:"Website isn't launched yet!"})
// });

//  LAUNCH-----------------------------------------------------------------------------------------------------------------




// // TESTING JERRY'S PROBLEM


// var blocks =[
//     {
//         "id" : "pQB1c4OemV",
//         "type" : "header",
//         "data" : {
//             "text" : "Don’t Use Margins For Spacing Between Components, Use Gaps",
//             "level" : 2
//         }
//     },
//     {
//         "id" : "OFn9EzLGrT",
//         "type" : "header",
//         "data" : {
//             "text" : "Key features",
//             "level" : 3
//         }
//     },
//     {
//         "id" : "a0xG2Swsn2",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "<mark class=\"cdx-marker\">I'm trying to get all entities from an endpoint, the ones on draft mode, and the ones on published mode. I know that if I want to post on draft mode, I have to post&nbsp;published_at on null&nbsp;on the body request.</mark>"
//         }
//     },
//     {
//         "id" : "btFV5aPC7F",
//         "type" : "list",
//         "data" : {
//             "style" : "unordered",
//             "items" : [
//                 "It is a block-styled editor",
//                 "It returns clean data output in JSON",
//                 "Designed to be extendable and pluggable with a simple API"
//             ]
//         }
//     },
//     {
//         "id" : "9UUyoYv_ZY",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "The layout is hard."
//         }
//     },
//     {
//         "id" : "1PMMsbgKoB",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "There are many different CSS/HTML approaches these days, but most of them are wrong."
//         }
//     },
//     {
//         "id" : "gHhMtG6Yjx",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "“I need to create vertical spacing between components; should I use margins or paddings?”"
//         }
//     },
//     {
//         "id" : "SU0gNEG768",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "None."
//         }
//     },
//     {
//         "id" : "LXY-9FV-VF",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "Let’s dive deeper into the organisation of your components on the screen."
//         }
//     },
//     {
//         "id" : "enVMgIfz_0",
//         "type" : "header",
//         "data" : {
//             "text" : "The Fall Of Margins",
//             "level" : 1
//         }
//     },
//     {
//         "id" : "vTTr9gZtZH",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "In prehistoric Web times when we had linked documents instead of reusable components, margins made a lot of sense. Let’s face it, there wasn’t a lot of choices."
//         }
//     },
//     {
//         "id" : "MFXLApW_H8",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "Today, in an ideal situation, your Web App should be composed out of reusable components, all the time."
//         }
//     },
//     {
//         "id" : "KJWw7Gx9F-",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "You should be able to pick a component, plug it somewhere in the UI, and it should “magically” work, without any additional styling."
//         }
//     },
//     {
//         "id" : "KdqcnznelC",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "If your layout is set up correctly, mobile design should work out of the box too!"
//         }
//     },
//     {
//         "id" : "m6Dkc6fMgK",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "Margins are not great here. Obviously, you can get the job done, but it takes far more effort. It’s way less elegant, and harder to maintain."
//         }
//     },
//     {
//         "id" : "qq-Sowf0-M",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "So, how should we add spacing between those components?"
//         }
//     },
//     {
//         "id" : "4xeOcq3CWE",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "We can just pass margin as a prop, right?"
//         }
//     },
//     {
//         "id" : "2TQrKhUHDJ",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "No.&nbsp;Components shouldn’t care about spacing between them."
//         }
//     },
//     {
//         "id" : "21vPcwXg9i",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "Their parents should."
//         }
//     },
//     {
//         "id" : "LARKeXn4ij",
//         "type" : "header",
//         "data" : {
//             "text" : "Adding Some Gap",
//             "level" : 1
//         }
//     },
//     {
//         "id" : "cFQ492894Z",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "Our layout can be magical and powerful with&nbsp;<code>flex</code>&nbsp;and&nbsp;<code>grid</code>."
//         }
//     },
//     {
//         "id" : "drxqy2V1Re",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "Let’s say we have multiple components and want to have 3 in each row. Also, spacing between them should be&nbsp;<code>1rem</code>."
//         }
//     },
//     {
//         "id" : "nRZJ_9t6YU",
//         "type" : "paragraph",
//         "data" : {
//             "text" : "Components don’t care about that. Only the parent does:"
//         }
//     }
// ];

// function convertDataToHtml(blocks){
//     var convertedHtml = "";
//     blocks.map(block => {
      
//       switch (block.type) {
//         case "header":
//           convertedHtml += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
//           break;
//         case "embded":
//           convertedHtml += `<div><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
//           break;
//         case "paragraph":
//           convertedHtml += `<p>${block.data.text}</p>`;
//           break;
//         case "delimiter":
//           convertedHtml += "<hr />";
//           break;
//         case "list":
//           convertedHtml += "<ul>";
//           block.data.items.forEach(function(li) {
//             convertedHtml += `<li>${li}</li>`;
//           });
//           convertedHtml += "</ul>";
//           break;
//         default:
//           console.log("Unknown block type", block.type);
//           break;
//       }
//     });
//     return convertedHtml;
//   }

//   var markdown = turndownService.turndown(convertDataToHtml(blocks));
//   console.log(markdown);


//   axios.post('/blogs', {
//     "title": "MUI MUI",
//     "author": {
//         "id": 3,
//         "name": "IBRAHIM KHALIL",
//         "bio": "Here's a short bio about **me**\n\nFollow me on stackoverflow: [Ibrahim](https://stackoverflow.com/questions/50722210/how-to-make-js-variables-accessible-to-ejs-files)",
//         "blog": null,
//         "published_at": "2021-08-06T12:11:13.503Z",
//         "created_at": "2021-08-06T12:11:10.004Z",
//         "updated_at": "2021-08-10T07:27:47.096Z",
//         "pic": {
//             "id": 1,
//             "name": "illustration.png",
//             "alternativeText": "",
//             "caption": "",
//             "width": 500,
//             "height": 500,
//             "formats": {
//                 "thumbnail": {
//                     "name": "thumbnail_illustration.png",
//                     "hash": "thumbnail_illustration_763c5e2c59",
//                     "ext": ".png",
//                     "mime": "image/png",
//                     "width": 156,
//                     "height": 156,
//                     "size": 8.84,
//                     "path": null,
//                     "url": "/uploads/thumbnail_illustration_763c5e2c59.png"
//                 }
//             },
//             "hash": "illustration_763c5e2c59",
//             "ext": ".png",
//             "mime": "image/png",
//             "size": 23.94,
//             "url": "/uploads/illustration_763c5e2c59.png",
//             "previewUrl": null,
//             "provider": "local",
//             "provider_metadata": null,
//             "created_at": "2021-08-06T13:49:42.941Z",
//             "updated_at": "2021-08-07T16:31:01.558Z"
//         }
//     },
//     "publish_date": "2021-12-02",
//     "preview_text": "http://localhost:1337/admin/plugins/content-manager/collectionType/application::blog.blog/createhttp://localhost:1337/admin/plugins/content-manager/collectionType/application::blog.blog/createhttp://localhost:1337/admin/plugins/content-manager/collectionType/application::blog.blog/create",
//     "tags": null,
//     "content": markdown,
//     "category": "explicit",
//     "published_at": null,
//     "created_at": "2021-12-02T08:13:46.274Z",
//     "updated_at": "2021-12-02T08:13:48.449Z",
//     "preview_image": {
//         "id": 5,
//         "name": "pexels-photo-1543793.jpeg",
//         "alternativeText": "",
//         "caption": "",
//         "width": 2374,
//         "height": 1500,
//         "formats": {
//             "thumbnail": {
//                 "name": "thumbnail_pexels-photo-1543793.jpeg",
//                 "hash": "thumbnail_pexels_photo_1543793_d0dfb36331",
//                 "ext": ".jpeg",
//                 "mime": "image/jpeg",
//                 "width": 245,
//                 "height": 155,
//                 "size": 11.97,
//                 "path": null,
//                 "url": "/uploads/thumbnail_pexels_photo_1543793_d0dfb36331.jpeg"
//             },
//             "large": {
//                 "name": "large_pexels-photo-1543793.jpeg",
//                 "hash": "large_pexels_photo_1543793_d0dfb36331",
//                 "ext": ".jpeg",
//                 "mime": "image/jpeg",
//                 "width": 1000,
//                 "height": 632,
//                 "size": 45.27,
//                 "path": null,
//                 "url": "/uploads/large_pexels_photo_1543793_d0dfb36331.jpeg"
//             },
//             "medium": {
//                 "name": "medium_pexels-photo-1543793.jpeg",
//                 "hash": "medium_pexels_photo_1543793_d0dfb36331",
//                 "ext": ".jpeg",
//                 "mime": "image/jpeg",
//                 "width": 750,
//                 "height": 474,
//                 "size": 31.97,
//                 "path": null,
//                 "url": "/uploads/medium_pexels_photo_1543793_d0dfb36331.jpeg"
//             },
//             "small": {
//                 "name": "small_pexels-photo-1543793.jpeg",
//                 "hash": "small_pexels_photo_1543793_d0dfb36331",
//                 "ext": ".jpeg",
//                 "mime": "image/jpeg",
//                 "width": 500,
//                 "height": 316,
//                 "size": 20.61,
//                 "path": null,
//                 "url": "/uploads/small_pexels_photo_1543793_d0dfb36331.jpeg"
//             }
//         },
//         "hash": "pexels_photo_1543793_d0dfb36331",
//         "ext": ".jpeg",
//         "mime": "image/jpeg",
//         "size": 119.41,
//         "url": "/uploads/pexels_photo_1543793_d0dfb36331.jpeg",
//         "previewUrl": null,
//         "provider": "local",
//         "provider_metadata": null,
//         "created_at": "2021-08-07T16:34:46.648Z",
//         "updated_at": "2021-08-07T16:34:46.660Z"}

// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// TESTING JERRY'S PROBLEM
 







//  ****ROUTES*****
app.get("/trial", function(req,res){
    res.render("trial");
});

app.post("/trial", function(req,res){
    console.log(req.body);
});
//---------------------HOME--------------------------------
app.get("/", function(req, res){
    const reqHomeContent = axios.get("/home?populate=*");
    const reqFeeds = axios.get("/feeds?populate=*");
    const reqBlogs = axios.get("/blogs?populate=*");
    const reqStories = axios.get("/stories?populate=*");
    const reqPoems = axios.get("/poems?populate=*");
    const reqFictions = axios.get("/fictions?populate=*");
    const reqMisc = axios.get("/miscs?populate=*");

    axios.all([reqHomeContent, reqFeeds, reqBlogs,reqPoems,reqStories, reqFictions, reqMisc]).then(axios.spread((...responses) => {
        console.log(responses[1].data.data);
        forEach(responses[3].data.data, function(poem){
           if(poem.attributes.preview_text){
            poem.attributes.preview_text=marked(poem.attributes.preview_text);
           }
       }); 
       res.render("index", {homeContent:responses[0].data.data.attributes, feeds:responses[1].data.data,blogs:responses[2].data.data, poems:responses[3].data.data, stories:responses[4].data.data, fictions:responses[5].data.data, url:"http://localhost:1337", miscs:responses[6].data.data});
    }))
    .catch(err => {
    // react on errors.
    console.log(err);
        res.render("error", {err:err});
    });
});

//---------------------Blogs--------------------------------

app.get("/blogs", function(req, res){
    axios.get('/blogs?populate=*')
    .then(function (response) {
        console.log(response.data.data[0].attributes);
        res.render("blogs", {blogs:response.data.data, url:"http://localhost:1337"});
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });
});

app.get("/blogs/:title/:id", function(req, res){
    var blogContent="";
    axios.get('/blogs/'+req.params.id+'?populate=%2A')
    .then(function (response) {
        title=response.data.data.attributes.title;
        console.log(title);
        tags=response.data.data.attributes.tags;
        blogContent=response.data.data.attributes.content;
        blogDate=response.data.data.attributes.publish_date;
        var html;


        author=response.data.data.attributes.author;
        if(author){
            if(response.data.data.attributes.author.bio){
                response.data.data.attributes.author.bio=marked(response.data.data.attributes.author.bio, { renderer });
            }
        }

        if(blogContent){
           html = marked(blogContent, { renderer });
        }
        console.log(response.data.data.attributes.author);
        if(title.replace(/\s+/g, '-').replace(/\?/g, '.').toLowerCase()==req.params.title.toLowerCase()){
            res.render("blog",{blogContent:html, blogDate:blogDate, title:title, tags:tags, author:author,  url:"http://localhost:1337"});
        }
        else{
            res.render("error", {err:"Error request 404 Title"});
        }
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });

});

//---------------------Short Stories--------------------------------


app.get("/stories", function(req, res){
    axios.get('/stories?populate=*')
    .then(function (response) {
        res.render("short-story", {stories:response.data.data, url:"http://localhost:1337"});
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });
});

app.get("/stories/:title/:id", function(req, res){
    var storyContent="";
    axios.get('/stories/'+req.params.id+'?populate=*')
    .then(function (response) {
        title=response.data.data.attributes.title;
        tags=response.data.data.attributes.tags;
        storyContent=response.data.data.attributes.content;
        publishDate=response.data.data.attributes.publish_date;
        var html;

       author=response.data.data.attributes.author;
        if(author){
            if(response.data.data.attributes.author.bio){
                response.data.data.attributes.author.bio=marked(response.data.data.attributes.author.bio, { renderer });
            }
        } 


        if(storyContent){
           html=marked(storyContent, { renderer });
        }
        if(title.replace(/\s+/g, '-').replace(/\?/g, '.').toLowerCase()==req.params.title.toLowerCase()){
            res.render("short-story-single",{content:html, publishDate:publishDate, tags:tags, title:title, author:author, url:url});
        } else{
            res.render("error", {err:"Error request 404"});
        }
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });
});


//---------------------Rapid Fiction--------------------------------


app.get("/fictions", function(req, res){
    axios.get('/fictions?populate=*')
    .then(function (response) {
        console.log(url);
        res.render("rapid-fiction", {fictions:response.data.data, url:"http://localhost:1337"});
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });
});

app.get("/fictions/:title/:id", function(req, res){
    var storyContent="";
    axios.get('/fictions/'+req.params.id+'?populate=*')
    .then(function (response) {
        title=response.data.data.attributes.title;
        fictionContent=response.data.data.attributes.content;
        tags=response.data.data.attributes.tags;
        publishDate=response.data.data.attributes.publish_date;
        var html;
        
        author= response.data.data.attributes.author ? response.data.data.attributes.author : null;
        if(author){
            if(response.data.data.attributes.author.data.attributes.bio){
                response.data.data.attributes.author.data.attributes.bio=marked(response.data.data.attributes.author.data.attributes.bio, { renderer });
            }
        }

        if(fictionContent){
            html=marked(fictionContent, { renderer });
        }
        if(title.replace(/\s+/g, '-').replace(/\?/g, '.').toLowerCase()==req.params.title.toLowerCase()){
            res.render("rapid-fiction-single",{content:html, publishDate:publishDate, tags:tags, title:title,author:author, url:url});
        } else{
            res.render("error", {err:"Error request 404"});
        }    
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });
});



//---------------------Poetry--------------------------------
// Make a poem without a preview_text and see entire page stops working. 
app.get("/poems", function(req, res){
    axios.get('/poems?populate=*')
    .then(function (response) {
        console.log()
        var data=response.data.data;
        for(var i=0; i<data.length; i++){
            if(data[i].attributes.preview_text){
                data[i].attributes.preview_text=marked(data[i].attributes.preview_text, { renderer });
            }
        }
        res.render("poetry", {poems:data, url:"http://localhost:1337"});
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });
});

app.get("/poems/:title/:id", function(req, res){
    var poem="";
    axios.get('/poems/'+req.params.id+'?populate=*')
    .then(function (response) {
        console.log(response.data.data)
        title=response.data.data.attributes.title;
        tags=response.data.data.attributes.tags;
        poem=response.data.data.attributes.poem;
        var html;
        if(poem){
            html=marked(poem, { renderer });
        } 
        author=response.data.data.attributes.author;
        console.log(author);
        if(author){
            if(response.data.data.attributes.author.data.attributes.bio){
                response.data.data.attributes.author.data.attributes.bio=marked(response.data.data.attributes.author.data.attributes.bio, { renderer });
            }
        }
        if(title.replace(/\s+/g, '-').replace(/\?/g, '.').toLowerCase()==req.params.title.toLowerCase()){
            res.render("single-poem",{poem:html, poet:author, title:title, tags:tags, image_url:"", url:url, author:author });
        } else{
            res.render("error", {err:"Error request 404"});
        }
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });
});



app.get("/miscellaneous", function(req,res){
    axios.get('/miscs?populate=*')
    .then(function (response) {
        var data=response.data.data;
        res.render("miscellaneous", {pieces:data, url:"http://localhost:1337"});
    })
    .catch(function (err) {
        console.log(err);
        res.render("error", {err:err});
    });
});

app.get("/miscellaneous/:title/:id", function(req,res){
    axios.get('/miscs/'+req.params.id+'?populate=*')
    .then(function (response) {
        title=response.data.data.attributes.title;
        tags=response.data.data.attributes.tags;
        miscContent=response.data.data.attributes.content;
        publishDate=response.data.data.attributes.publish_date;
        var html;
        if(miscContent){
            html=marked(miscContent, { renderer });
        }        
        author=response.data.data.attributes.author;
        if(author){
            if(response.data.data.attributes.author.bio){
                response.data.data.attributes.author.bio=marked(response.data.data.attributes.author.bio, { renderer });
            }
        }

        if(title.replace(/\s+/g, '-').replace(/\?/g, '.').toLowerCase()==req.params.title.toLowerCase()){
            res.render("misc-single",{content:html, publishDate:publishDate, tags:tags, title:title , author:author, url:url});
        } else{
            res.render("error", {err:"Error request 404"});
        }   
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });
});

//---------------------About--------------------------------

app.get("/about", function(req,res){
    var content="";
    axios.get('/about')
    .then(function (response) {
        content=response.data.data.attributes.content;
        var html;
        if(content){
            html=marked(content, { renderer });
        } 
        res.render("about",{content:html, headline:response.data.data.attributes.headline, caption:response.data.data.attributes.caption , url:url});
    })
    .catch(function (err) {
        // handle error
        // console.log(err);
        res.render("error", {err:err});
    });
});



app.post("/submit-piece", function(req,res){
    console.log(req.body)
    const date = new Date().toLocaleString();
    async function sendMail() {
        try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            type: 'OAuth2',
            user: 'inkyparchments@gmail.com',
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken,
            },
        });

        var html=

        '<p style="font-size:15px"><strong>Author:</strong> '+xss(req.body.name)+ '<br />'+
        '<strong>Link:</strong> '+xss(req.body.link)+ '<br />'+
        '<strong>Anonymously: </strong>'+ req.body.anonymous +'<br />'+
        '<strong>Design Pref: </strong>'+ req.body.design +'<br />'+
        '<strong>Collab: </strong>'+ req.body.collab +'</p><br /><br />'+

        '<h3> Details of Author: </h3>'+
        '<p><strong>Name: </strong>'+xss(req.body.name)+'</p>'+
        '<p><strong>Email: </strong>'+xss(req.body.email)+'</p>'+
        '<p><strong>Phone Number: </strong>'+xss(req.body.phone)+'</p><br />'+
        
        '<h3>About the Work: </h3>'+
        '<p><strong>Form of work: </strong>'+xss(req.body.formOfWork)+'</p>'+
        '<p><strong>Category: </strong>'+xss(req.body.category)+'</p>'+
        '<p><strong>Preview Text: </strong>'+xss(req.body.previewText)+'</p>'
        
        ;
  
        const mailOptions = {
            from: 'inkyparchments@gmail.com',
            to: 'submissions.inky@gmail.com',
            subject: "'"+xss(req.body.title)+"' by "+xss(req.body.name),
            
            html:html
        };
    
        const result = await transport.sendMail(mailOptions);
        return result;
        } catch (error) {
        return error;
        }
    }
    
    sendMail()
        .then((result) => {
            console.log('Email sent...', result);
            res.send(200);
        })
        .catch((error) => {
            console.log(error.message)
            res.send(500);
        }); 
});





//---------------------Licenses--------------------------------

app.get("/licenses-and-credits", function(req,res){
    var content="";
    axios.get('/license')
    .then(function (response) {
        content=response.data.data.attributes.content;
        var html;
        if(content){
            html = marked(content, { renderer });
        }
        res.render("licenses",{content:html, url:url});
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });
});

//---------------------Submissions--------------------------------

app.get("/submit", function(req,res){
    button="Launch Doc"
    axios.get('/submit')
    .then(function (response) {
        content=response.data.data.attributes.steps;
        var html;
        if(content){
           html = marked(content, {renderer});
        }
        guide=response.data.data.attributes.guide;
        var guideHTML;
        if(guide){
            guideHTML = marked(guide, {renderer});
        }

        res.render("submit",{steps:html, guide:guideHTML, headline:response.data.headline, button:button, url:url});
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });
});


//---------------------Terms of Use--------------------------------

app.get("/terms", function(req,res){
    var content="";
    axios.get('/term')
    .then(function (response) {
        // console.log(response.data.terms);
        content=response.data.data.attributes.terms;
        var html;
        if(content){
            html = marked(content, { renderer });
        }
        res.render("terms",{terms:html, headline:response.data.data.attributes.headline, url:url});
    })
    .catch(function (err) {
        // handle error
        console.log(err);
        res.render("error", {err:err});
    });
});

//---------------------Competitions and Events--------------------------------

// app.get("/competitions-and-events", function(req,res){
//     res.render("comp-events");
// });

//---------------------Documentations--------------------------------

// app.get("/docs/developer", function(req,res){
//     res.render("docs");
// });


//---------------------404--------------------------------
app.get("*", function(req,res){
    res.render("error", {err:"Error 404. Oops. The file you are requesting seems to have been moved/deleted. "});
});



/*

CONTENT STRUCTURE: 

Collection types:
1) Blogs
2) Poetry
3) Short Stories
4) Miscellaneous (in case none of these applies, best for essays, competitions, humor etc)
5) Authors
6) Feeds
*Blogs
ROUTES: /blogs, /blog/:id
. title, publish_date, preview_text, preview_image, content, category(general audience/teen and up/Mature/explicit) ,author (relationship), bio, hashtags
// imp cant use question marks in title coz url. Query becomes. 
*Poetry
ROUTES: /poetry, /poem/:id
. title, publish_date, preview_text, (insert image or use rich text), poem, category(general audience/teen and up/Mature/explicit), poet, bio, hashtags

*Short Stories
. title, publish_date, preview_text, preview_image, content, category(general audience/teen and up/Mature/explicit) ,author, bio, hashtags

* Rapid Fiction
. title, publish_date, preview_text, preview_image, content, category(general audience/teen and up/Mature/explicit) ,author , bio, hashtags

* Author 

*Miscellaneous
. title, publish_date, preview_text, preview_image, content, category(general audience/teen and up/Mature/explicit), writer, bio, hashtags
ROUTES: /misc, /misc/:id

Single Types:
Home Content
Terms and Conditions
Submission Guide
*/


// References of frameworks and modules used:
/*
1. Express- https://expressjs.com/
2. EJS- https://ejs.co/
3. Marked.js- https://github.com/markedjs/marked
4. Axios- https://www.npmjs.com/package/axios 
*/
