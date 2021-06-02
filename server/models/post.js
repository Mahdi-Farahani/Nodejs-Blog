import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
	title: String,
	description: String,
	article: String,
	creator: String,
	role: String,
	tags: [String],
	image: String,
	likeCount: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const Post = mongoose.model('Post', postSchema);

export default Post;
