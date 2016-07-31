module.exports = toggl => (req, res) => {
	toggl.getClients((err, clients) => {
		if (err) {
			res.send({ error: err });
		}

		
	})
}