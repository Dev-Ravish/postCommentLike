const Blog = require('../models/blog');
const Comment = require('../models/comment');

exports.postComment = async (req, res) => {
    try{
        const {id} =req.params;
        const {user, description} = req.body;
        const comment = await Comment.create({user, description});
        const blog = await Blog.findByIdAndUpdate(id,  {$push: {comments: comment._id}}, {new: true})
                            .populate("comments")
                            .exec();


        //blog.comments.push(comment._id);
        //await blog.save();

        res.status(200)
        .json({
            success: true,
            data:blog,
            message:"commented successfully!!"
        })

    }catch(error){
        console.error(error);
        console.log("Unable to post comment.");
        res.status(500)
        .json({
            success: false,
            error:error.message,
            message:"Server error!"
        });        

    }
}

exports.getAComment = async (req, res) => {
    try{
        const {id}=req.params;
        const comment = await Comment.findById({_id: id});
        
        if(!comment){
            return res.status(404)
            .json({
                success: false,
                message:"No blogs are written"
            });

        }

        res.status(200)
        .json({
            success: true,
            data: comment,
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
