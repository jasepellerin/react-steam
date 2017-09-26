module.exports = ({ body, title }) => {
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
      </body>
      <script src="/static/scripts/bundle.min.js"></script>
    </html>
  `
}
