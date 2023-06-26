const Blog = require('../models/blog');


exports.createBlog = async (req, res) => {
    try{

        const {title, description} = req.body;
        const blog = await Blog.create({title:title, description:description});

        res.status(200)
        .json({
            success: true,
            data: blog,
            message:"Blog created successfully!!"
        })
    }catch(error){
        console.error(error);
        console.log("Unable to craete blog.");
        res.status(500)
        .json({
            success: false,
            error:error.message,
            message:"Server error!"
        });
    }
};

exports.getBlog = async (req, res) => {
    try{

        const blog = await Blog.find({});
        
        if(!blog){
            return res.status(404)
            .json({
                success: false,
                message:"No blogs are written"
            });

        }

        res.status(200)
        .json({
            success: true,
            data: blog,
            message: "All blogs are successfully fetched!"
        })
    }catch(error){
        console.error(error);
        console.log("Unable to craete blog.");
        res.status(500)
        .json({
            success: false,
            error:error.message,
            message:"Server error!"
        });        
    }
}

exports.updateLikes = async (req, res ) => {
    try{
        const {id} = req.params;
        const {likes} = await Blog.findById({_id: id});
        
        const blog = await Blog.findByIdAndUpdate(id, {likes:likes+1});
        
        if(!blog){
            return res.status(404)
            .json({
                success: false,
                message:"No such blog exists"
            });
        }
        res.status(200).json({
            success: true,
            message: "Liked the blog"
        });
    }catch(error){
        console.error(error);
        console.log("Unable to craete blog.");
        res.status(500)
        .json({
            success: false,
            error:error.message,
            message:"Server error!"
        });        

    }
}