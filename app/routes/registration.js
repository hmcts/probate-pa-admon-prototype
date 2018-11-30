module.exports = function (router) {
  router.post('/registration/index', function (req, res) {
    return res.redirect('verify-email')
  })
}
