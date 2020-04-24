# Configuration
The template configuration is loaded from `me.template.js` which includes routes and component definitions. Apparently, dynamically loaded components within a `function` is currently not supported in the production build of `vercel`

```javascript
  /**
   * Custom Pages / templates
   */
  const HomePage = dynamic(() => import('./pages/homepage'))

  export default (props) => {
    return {
      '/default': <DefaultTemplate {...props} />,
      '/homepage': <HomePage {...props} />,
      ... more items goes here
    }
  }
```

> **:bulb: Tips :**   
  /default - this is loaded when you access your profile in http://localhost:3000/your-github-username   
  /homepage - this is the default page when you access http://localhost:3000

# Modifying existing templates
This protfolio boilerplate was built on top of `react` + `react sematic-ui` + `next.js` and comprises of `basic template and homepage` by default . This will allow you to code, deploy and ship :rocket: your online portfolio in a breeze. You can freely modify or alter the `design` of `templates/default` without worying complex configurations. If you are familiar with the tech stacks listed herewith, it would be rea...lly, rea....lly much easier for you to keep everything up and running

# Creating template
Dont want to touch existing templates or you just want to create your own page with a **custom design**?
Don't worry! this would be really quick. You just have to relax and follow these few easy steps

1. create `yourTemplateName` directory inside `pages/templates`

2. create a file named `index.js` and paste the sample code below

```javascript
  export default (props) => {
    // github profile is automatically injected in props
    // console.dir(props)
    return (<div>My Custom Template</div>)
  }
```

3. include your custom template in `me.templates.js`

```javascript
  /**
   * Custom Pages / templates
   */
  const MyCustomTemplate = dynamic(() => import('./pages/yourTemplateName'))

  export default (props) => {
    return {
      ... previous items goes here
      // your custom template
      '/customTemplate': <MyCustomTemplate {...props} />,
    }
  }

```

4. Preivew your template with a dummy user profile   
> https://localhost:3000/preview/templates/customTemplate 


## Preview
You can preview the templates without loading the actual profile of the user. This is essential when you are creating and testing your own template `offline` and whenever http request overhead is not desirable

> https://localhost:3000/preview/templates/yourCustomTemplate


You can also use different templates for your account by appending the `/templateName` after your `github username`.

> https://localhost:3000/yourGithubUsername/customTemplateA    
https://localhost:3000/yourGithubUsername/customTemplateB 

> **:bulb: Tips :**   
  By default, the `pages/templates/default` directory is served when you access your github profile via this link https://localhost:3000/yourGithubUsername    . To change this behavior, you must configure your `environment variables` in `next.config.js`. See the [docs here](#environment-variables)


## Guidelines
In creating `downloadable` template, everything must be as smooth as possible and these are few simple check list to get started 

- A good template **MUST** have an installation instruction
- List of dependencies & required additional tools/modules
- Provide notice for compatibility & breaking changes
- Provide screenshots
- Provide live sample if possible



# Installing templates
Since this is not a module, you `CAN NOT` simply install template using `npm` or `yarn`. You **MUST** directly download or fork :fork_and_knife:  someones repository and copy the content of their `/pages/templates` directory to yours. Another additional step would be appending the `route` and `component` to `me.templates.js`. For a quick guide, please see [creating template](#creating-template) section.

> :warning: Please read the template instructions and list of dependencies carefully before downloading or copying to avoid compatibility issues

> :bulb: **Tips:** You do not have to delete your existing templates since multiple templates are supported 

# Default Github username
Generally, you can access any gtihub user's json resume by simply appending it on your site URL like the sample link below. However this is `NOT` desirable when building your own portfolio, unless you are offerring your site a free service for all github users out there :smile:

> http://localhost:3000/someoneelse

### Solution
Just add `GITHUB_USERNAME` environment variable in your hosting provider
and `voila!` the link above will not work anymore. Thus, viewing someone else profile is not possible. But you have to take note that you cannot also use even your own username and you have to query the API by your self preferably within your defined `default` page


Sample Repository: [Online Portfolio Template](https://)