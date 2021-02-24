# Me

A next-gen JAMSTACK template for **developers** that leverage the use of [JSON Resume Schema](https://jsonresume.org/schema) in creating a web based vitae and portfolio. Stop worying with a complex setup and deployment process.

![me banner](https://user-images.githubusercontent.com/10413754/79948155-e5e9da80-84a5-11ea-83eb-34e2f5aa89f6.png)

   `ME` :heart: **=** `JSON Resume` :heavy_plus_sign: `Templates` :heavy_multiplication_x: `Other Features`

[![JavaScript Style Guide](https://img.shields.io/badge/Code%20Style-Standard%20-green?style=for-the-badge&logo=javascript)](https://github.com/standard/standard) [![JSON RESUME](https://img.shields.io/badge/format-JSON%20RESUME%20-yellow?style=for-the-badge&logo=json)](http://jsonresume.org) [![vercel](https://img.shields.io/badge/POWERED%20BY-vercel%20-black?style=for-the-badge&logo=zeit)](https://vercel.com/) [![SEMANTIC UI](https://img.shields.io/badge/react-sematic%20UI-teal?style=for-the-badge&logo=react)](https://react.semantic-ui.com/) [![NEXT](https://img.shields.io/badge/serverless-nextjs-black?style=for-the-badge&logo=next.js)](https://nextjs.org) [![GITHUB](https://img.shields.io/badge/repo-github-black?style=for-the-badge&logo=github)](https://github.com)

## :loudspeaker: NOTICE TO THE PUBLIC

> This application does not collect or store your personal information in any hosted server. The services we offered `does not require` any elevated acess nor make an attempt to upload, commit, modify, or delete any file or repository on your behalf. It only **read** the files stored in your :unlock: `about.me` repository as necessary
> :lock: All the information you included in your `JSON` files are public and **MUST NOT CONTAIN** any information that you do not want to share to everyone. Thus, you are fully accountable on what you share on your public repositories and we should not be held responsible or liable for your negligence.

## Why me

- Easy to use
- No complex setup
- Sharable link
- Uses standard resume format (JSON RESUME)
- Ready made templates *(No other available template as of now)*
- Only needs very little coding experience
- **FREE!!!!!!**

## Screenshot (Default Template)

![default template](https://user-images.githubusercontent.com/10413754/79752457-e9b31b00-8346-11ea-81df-4401a5ea3773.png)

> Documentations: [https://me-docs.now.sh]

## Creating your own resume

Creating your first resume requires you to have a **github account**. This is where you store your personal information such as full name, work experience, etc... For all supported fields, please check [JSON Resume's](https://jsonresume.org/schema/) official website

### Quick Setup

1. Fork :fork_and_knife:this [boiler plate](https://github.com/jkga/json-resume-template) to your account or create your own repository using it as a template.
> Make sure that your repository name is set to `about.me`. Otherwise, you will receive a `profile not found` message
2. Update `index.json` with your personal information
3. Go to [https://me-web.now.sh/[ :man:your_github_username_here]](https://me-web.now.sh) to view your ready made portfolio  

### Manual Setup

1. Create new :unlock: public repository `about.me`
2. Add `index.json` and paste the sample scheme from [jsonresume website](https://jsonresume.org/schema/) and update the content as necessary
3. Commit the file
4. Go to [https://me-web.now.sh/[ :man:your_github_username_here]](https://me-web.now.sh)

### JSON Formatter/Checker

:bulb: Before commiting the file please make sure to have a well-formed `JSON` to avoid a `profile_not_found error`. You can use the online tools below for validation

- [https://www.jsonschemavalidator.net](https://www.jsonschemavalidator.net/)
- [https://jsonlint.com](https://jsonlint.com)
- [https://jsonformatter.org](https://jsonformatter.org)
- [https://codebeautify.org/jsonvalidator](https://codebeautify.org/jsonvalidator)

## Does it fit your needs

This generator just works out of the box but we understand that it is not best for all cases and to give clarifications, this is what / what is not this project really is

:art: `NOT A SITE BUILDER`
> This application would not allow you to drag and drop cards, layouts, and re-position coponents as you wish. It would not give you enough freedom to customize things the way typical site builder works. And in my honest opinion, developers love to create things if not from the ground, a bare minimum boilerplate is more preferable.
:city_sunrise: `THEMABLE WEB APPLICATION`
> The project use `react` + `react-sematic-ui` for front end and could be easily extend by `creating / downloading a new theme` and placing it inside `pages/templates` directory. Dont worry, if you prefer the default theme but only need few modifications, you can freely alter the codes/design of the default template in `pages/templates/default` directory.
Another thing that you can do is to **remove** or **add** dependencies depending on your needs and you are not tied up in using a single **react ui framework**. Everything is up to you!
> :bell: All templates should be placed inside the `pages/templates` directory.
> Docs: [https://me-docs.now.sh/#/template/?id=creating-template]

:rocket: `SERVERLESS`
> The main website was deployed to [vercel](https://vercel.com) and could be easily hosted on your own account or any other prefered server within a few minutes. You can easily scale things up with no or little cost

:truck: `FREE JSON RESUME SERVICE`
> It provides a built-in parser and templates for your JSON resume file that is hosted on your `Github` account. It parse the file and serve you with a web-based portfolio that you can freely share to your colleagues and future employers. What makes it more wonderful is you can use the same repository across different projects in a breeze.
> Want to place a badge somewhere else? don't worry, you can create one with [shield.io](https://shield.io)

### SAMPLE BADGE

[![My web-based resume](https://img.shields.io/badge/resume-yourNameHere%20-green?style=for-the-badge&logo=json)](https://resume-generator.jkga.now.sh)
> :bulb: So what is JSON Resume? JSON resume is an open source initiative to create a JSON-based standard for resumes. For more details, please read their [official website](https://jsonresume.org/)

:green_book: `JSON RESUME BOILERPLATE`
> This portfolio generator only could be easily modified, which reasonably makes it one of your choices for the next boilerplate of your own website or portfolio

## Language Support

By default, we use the `about-me/index.json` as the main source but out-of-the-box you can also serve your resume with different languages you like. All you have to do is commit another file with this recomended filename format `index-[ISO alpha-2].json`
:bulb: You can add any extension you wish but we `highly recommend` to stick with the recomended `ISO apha-2` extension
> ex. index-ph.json

### Accessing via web

> [https://me-web.now.sh/your-github-username?lang=ISO-alpha-2](https://me-web.now.sh)

### Country Codes (ISO apha-2)

[https://www.iban.com/country-codes](https://www.iban.com/country-codes)

## Templates

There is no other available template other than the default one but the developer is trying to make more and really working hard to serve it to you soon. Should you need to create your own downloadable template, plese refer to this [guide](https://me-docs.now.sh/#/template/?id=creating-template) for complete instructions

- [Live Preview](https://me-web.now.sh/preview/templates/default)

## Donations

This project is free to use and we are not getting commission or generating an income from this in any way. If you love this project your donation is very much welcome. You can buy some :beer: :coffee: for the developer!

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F2F71KUIX)
