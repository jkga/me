# Installation
The only way to install it on your machine is to clone the main repository or download it directly
from github.   

```bash
  git clone https://github.com/jkga/resume-generator
```

# Development Server
To start your local development server, use the code below and go to [http://localhost:3000](http://localhost:3000)

Installing via yarn
```bash
  yarn dev
```

or if you are using npm

```bash
  npm run dev
```

# Building Static files
Run the build script once, which builds the production application in the .next folder.
```bash
  npm run build
```
After building, the start script starts a Node.js server that supports hybrid pages, serving both statically generated and server-side rendered pages. The server also supports API Routes as well.

```bash
  npm run start
```
> Tip: You can customize the start script in package.json to accept a PORT parameter by updating it as:    
`"start": "next start -p $PORT"`.   

> Source: https://nextjs.org/learn/basics/deploying-nextjs-app/other-hosting-options

# Deployment
You can deploy your portfolio to your own [varcel](https://vercel.com) account in just a few minutes.
Just make sure that you created one and have installed `now` globally. If you have not done it yet,
this is how you install `now` via `npm`

```bash
  npm i -g now
```

Deploying to `vercel` requires only a few key strokes

```bash
  now
```

## Environment Variables
These are the environment variables set in your `next.config.js` which is required during build time. Unfortunately,
other build configurations are not yet supported in `serverless` mode in this time of writing.

```javascript
  env: {
    DEFAULT_TEMPLATE_PATH: '/templates',
    DEFAULT_TEMPLATE: 'default', // loaded to route: [:username/:template?]
    DEFAULT_PAGE: '/homepage' // loaded to route: [/]
  }
```

> You can override these values without messing up with your `next.config.js` file by setting the same environment variables in your server. For instructions on how to do this, please refer to `vercel` official [docs](https://vercel.com/docs/v2/build-step#environment-variables)