'use strict'

module.exports = (req, res) => {
  const name = req.query.name || 'World'

  res.send(`Hello, ${name}!`)
}
