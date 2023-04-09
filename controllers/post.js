const Post = require('../model/post')
const slugify = require('slugify');
const post = require('../model/post');

exports.create=(req,res)=>{
   //console.log(req.body)
    const {title, content,user} = req.body
    const slug = slugify(title);

    //validate
    switch(true){
        case !true:
            return res.status(400).json({error:'title is required.'})
            break;

        case !content:
            return res.status(400).json({error:'content is required.'})
            break;
    }

// create new post
    post.create({title, content ,slug ,user },(err,post)=>{
        if(err){
            console.log(err)
            res.status(400).json({error:'Dublicate post. try another title'})
        }
        res.json( post)
    })


}


// list all post

exports.list = (req,res)=>{
    post.find({}).limit(10).sort({createdAt:-1}) .exec((err,post)=>{
 if(err) console.log(err)
 res.json(post)
    })
}


//read a single post

exports.read = (req,res)=>{
    const {slug} = req.params;
    console.log(req.params.slug)

    post.findOne({slug}).exec((err,post)=>{
 if(err) console.log(err)
 res.json(post)
    })
}

// update post

exports.update = (req,res)=>{
    const {slug} = req.params;

    const {title, content, user}  = req.body
    Post.findOneAndUpdate({slug}, {title , content,user},{new:true}).exec((err,post)=>{
         if(err)console.log(err)
         res.json(post)
    })

}


// delete a single post

exports.remove = (req,res)=>{
    const {slug} = req.params;
    console.log(req.params.slug)

    post.findOneAndRemove({slug}).exec((err,post)=>{
 if(err) console.log(err)
 res.json({mag:'post deleted..'})
    })
}








