import fetch from 'node-fetch'
import validator from './validator'

const getContentFromGithub = (username, opts = {}) => {
  return new Promise((resolve, reject) => {
    const url = `https://raw.githubusercontent.com/${username}/about.me/master/index${opts.lang ? '-' + opts.lang : ''}.json`
    fetch(url)
      .then(res => res.json())
      .then(jsonData => {
        validator.validate(jsonData).then(cont => resolve(jsonData)).catch(e => reject(e))
      }).catch(e => reject(e))
  })
}

const getContentFromGithubForkedJsonResume = (username, opts = {}) => {
  return new Promise((resolve, reject) => {
    const url = `https://raw.githubusercontent.com/${username}/json-resume-template/master/index${opts.lang ? '-' + opts.lang : ''}.json`
    fetch(url)
      .then(res => res.json())
      .then(jsonData => {
        validator.validate(jsonData).then(cont => resolve(jsonData)).catch(e => reject(e))
      }).catch(e => reject(e))
  })
}

const getContentFromURL = (url) => {
  return new Promise((resolve, reject) => {
    try {
      const page = new URL(url) /* eslint no-unused-vars: */
    } catch (e) {
      reject(new Error('Invalid URL'))
    }

    fetch(url)
      .then(res => res.json())
      .then(jsonData => {
        validator.validate(jsonData).then(cont => resolve(JSON.parse(JSON.stringify(jsonData)))).catch(e => reject(e))
      }).catch(e => reject(e))
  })
}

module.exports = {
  getContentFromURL,
  getContentFromGithub,
  getContentFromGithubForkedJsonResume
}
