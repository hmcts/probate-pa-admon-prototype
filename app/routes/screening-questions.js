// Screening questions
module.exports = function (router) {
  router.post('/screening-questions/death-certificate', function (req, res) {
    if (req.body.deathCertificate === 'Yes') {
      return res.redirect('domicile')
    } else {
      return res.redirect('/stop-page/death-certificate')
    }
  })

  router.post('/screening-questions/domicile', function (req, res) {
    if (req.body.domicile === 'Yes') {
      return res.redirect('iht-form')
    } else {
      return res.redirect('/stop-page/domicile')
    }
  })

  router.post('/screening-questions/iht-form', function (req, res) {
    if (req.body.haveCompletedIHT === 'Yes') {
      return res.redirect('/screening-questions/will-left')
    } else {
      return res.redirect('/stop-page/iht')
    }
  })

  router.post('/screening-questions/will-left', function (req, res) {
    if (req.body.willLeft === 'Yes') {
      return res.redirect('will-original')
    } else {
      return res.redirect('https://probate-intestacy-prototype.herokuapp.com/screening-questions/die-after-october-2014')
    }
  })

  router.post('/screening-questions/will-original', function (req, res) {
    if (req.body.haveOriginalWill === 'Yes') {
      return res.redirect('applicant-executor')
    } else {
      return res.redirect('https://probate-intestacy-prototype.herokuapp.com/screening-questions/die-after-october-2014')
    }
  })

  router.post('/screening-questions/applicant-executor', function (req, res) {
    if (req.body.applicantIsExecutor === 'Yes') {
      return res.redirect('http://probate-prototype.herokuapp.com/screening-questions/mental-incapacity')
    } else {
      return res.redirect('/screening-questions/executors-not-applying')
    }
  })

  router.post('/screening-questions/mental-incapacity', function (req, res) {
    if (req.body.mentalIncapacity === 'Yes') {
      return res.redirect('/registration/eligible')
    } else {
      return res.redirect('/stop-page/mental-incapacity')
    }
  })

  router.post('/screening-questions/codicils', function (req, res) {
    if (req.body.codicils === 'Yes') {
      return res.redirect('codicils-number')
    } else {
      return res.redirect('applicant-executor')
    }
  })

  router.post('/screening-questions/codicils-number', function (req, res) {
    return res.redirect('/deceased/marital-status')
  })

  router.post('/screening-questions/codicils-date', function (req, res) {
    return res.redirect('applicant-executor')
  })

  router.post('/screening-questions/iht-form', function (req, res) {
    if (req.body.haveCompletedIHT === 'Yes') {
      return res.redirect('/registration/eligible')
    } else {
      return res.redirect('/stop-page/iht')
    }
  })

  router.post('/registration/eligible', function (req, res) {
    return res.redirect('/registration/index')
  })

  // Admon screeners
  router.post('/screening-questions/executors-not-applying', function (req, res) {
    if (req.body.executorNotApplying === 'Yes') {
      return res.redirect('named-beneficiary')
    } else {
      return res.redirect('executors-not-applying-reasons')
    }
  })

  router.post('/screening-questions/named-beneficiary', function (req, res) {
    if (req.body.namedBeneficiary === 'Yes') {
      return res.redirect('named-beneficiary-age')
    } else {
      return res.redirect('/stop-page/named-beneficiary')
    }
  })

  router.post('/screening-questions/named-beneficiary-age', function (req, res) {
    if (req.body.namedBeneficiaryAge === 'Yes') {
      return res.redirect('life-interest')
    } else {
      return res.redirect('/stop-page/named-beneficiary-age')
    }
  })

  router.post('/screening-questions/life-interest', function (req, res) {
    if (req.body.lifeInterest === 'Yes') {
      return res.redirect('/stop-page/life-interest')
    } else {
      return res.redirect('joint-application')
    }
  })

  router.post('/screening-questions/joint-application', function (req, res) {
    if (req.body.jointApplication === 'Yes') {
      return res.redirect('/stop-page/joint-application')
    } else {
      return res.redirect('/registration/eligible')
    }
  })
}
