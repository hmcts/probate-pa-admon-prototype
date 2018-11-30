module.exports = function (router) {
  router.post('/the-will/will-date', function (req, res) {
    if (req.body.willDate === 'Yes') {
      return res.redirect('codicils')
    } else {
      return res.redirect('codicils')
    }
  })

  router.post('/the-will/codicils', function (req, res) {
    if (req.body.codicils === 'Yes') {
      return res.redirect('codicils-number')
    } else {
      return res.redirect('/tasklist/gds/index.html')
    }
  })

  router.post('/the-will/codicils-number', function (req, res) {
    return res.redirect('/tasklist/gds/index.html')
  })

  router.post('/the-will/codicils-date', function (req, res) {
    return res.redirect('/tasklist/gds/index.html')
  })
}
