function htmlpopulate(title, content) {
  const template = /* html */ `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="microblogging project">
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap"
      rel="stylesheet">
      <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/assets/favicon.ico" type="image/x-icon">

    <title> ${title} </title>
        </head>
        <body>
        ${content}
        </body>
      </html>`;
  return template;
}
module.exports = { htmlpopulate };
