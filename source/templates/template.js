module.exports = ({ title, body, preloadedState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>${title}</title>
        <link rel="stylesheet" href="/static/css/main.min.css">
        <link href="https://fonts.googleapis.com/css?family=Philosopher|Muli" rel="stylesheet">
      </head>
      <body>
        <div id="root">${body}</div>
        <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      </body>
      <script src="/static/scripts/bundle.min.js"></script>
    </html>
  `
}
