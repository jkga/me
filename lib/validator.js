import resumeSchema from 'resume-schema'

const validate = (jsonResume) => {
  return new Promise((resolve, reject) => {
    let jObject = {}
    try {
      jObject = JSON.parse(JSON.stringify(jsonResume))
    } catch (e) {
      reject(new Error('The resume was invalid'))
    }

    resumeSchema.validate(jObject, function (err, report) {
      if (err) return reject(new Error('The resume was invalid:'), err)
      resolve(report)
    })
  })
}

module.exports = {
  validate
}
