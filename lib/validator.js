const resumeSchema  = require('resume-schema');

const validate = (jsonResume) => {
  return new Promise((resolve, reject) => {
    let object = {}
    try {
      jObject = JSON.parse(JSON.stringify(jsonResume))
    } catch(e) {
      reject()
    }

    resumeSchema.validate(jObject, function (err, report) {
      if (err) return reject('The resume was invalid:', err);
      resolve(report);
    });
  })

}

module.exports = {
  validate
}
