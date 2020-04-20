import content from '../../../lib/content'

const notFound = (res, payload) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  return res.end(payload)
}

export default async (req, res) => {
  const options = {
    lang: req.query.lang ? req.query.lang.toString() : null
  }

  const profile = await content.getContentFromGithub(req.query.username, options).catch(e => {})
  if (!profile) return notFound(res, JSON.stringify({ error: 'profile not found' }))
  // prevent undefined schemas
  profile.basics.location = profile.basics.location || {}
  profile.basics.profiles = profile.basics.profiles || []
  profile.skills = profile.skills || []
  profile.work = profile.work || []
  profile.education = profile.education || []
  profile.volunteer = profile.volunteer || []
  profile.awards = profile.awards || []
  profile.publications = profile.publications || []
  profile.interests = profile.interests || []
  profile.languages = profile.languages || []
  profile.references = profile.references || []

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(profile))
}
