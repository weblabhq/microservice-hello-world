module.exports = (req, res) => {
  const name = req.params.name || 'World'
  const message = `Hello, ${name}!`

  res.json({ message })
}
