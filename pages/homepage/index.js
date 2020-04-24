import Head from 'next/head'

export default function Home () {
  return (
    <div className='container'>
      <Head>
        <title>Its not you, its me!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>
          <a href='https://github.com/jkga/resume-generator'>#me</a>
        </h1>

        <p className='description'>
          Next-Gen online portfolio for developers

        </p>

        <div className='grid'>
          <div className='card'>
            <h3>Quick Guide</h3>
            <p>Easiest way to make your online portfolio</p>
            <ol>
              <li>Fork this <a href="https://github.com/jkga/json-resume-template">boiler plate</a> to your account or create your own repository using it as a template.</li>
              <li>Go to <a href='https://me-web.now.sh'>me</a> website and append <code>/your-github-username</code></li>
              <li>Please check the <a href='https://me-docs.now.sh/#/'>docs</a> for more details</li>
            </ol>
          </div>
        </div>
      </main>

      <footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #009688;
          text-decoration: none;
          padding: 15px;
          border: 6px solid #009688;
          border-radius: 3px;
          animation: border 2s linear infinite alternate; 
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          margin-top: 2em;
        }

        code {
          background: #ccc;
          color: #000;
          border-radius: 5px;
          padding: 0.4rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        .card {
          flex-basis: 100%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @keyframes border {
          0%   {border-top: 6px solid #000;}
          25%  {border-left: 6px solid #000;}
          50%  {border-right: 6px solid #000;}
          750% {border-bottom: 6px solid #000;}
          100% {border-top: 6px solid #009688;}
        }

      `}
      </style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: #000;
          color: #fff;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: #009688;
          text-decoration: underline;
        }

        ol > li {
          margin-bottom: 10px;
        }
      `}
      </style>
    </div>
  )
}
