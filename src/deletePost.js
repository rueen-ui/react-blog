const deletePost = (id, callback) => {
	fetch('https://my-json-server.typicode.com/rueen-ui/react-blog/posts/' + id, {
		method: 'DELETE',
	}).then(() => {
        if (typeof callback === "function") callback();
	});
};

export default deletePost;