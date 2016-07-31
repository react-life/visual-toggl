var projects = require('./get/projects');

module.exports = toggl => (req, res) => {
  if (!toggl) {
    res.send({ error: 'Not authentificate' });
  }

  const method = req.params.method || '';

  if (method === 'projects') {
    projects(toggl)(req, res);
  }

  toggl.getClients(function(e, data) {
    console.log(data);
    res.send({ data: JSON.stringify(data) });
  });
}