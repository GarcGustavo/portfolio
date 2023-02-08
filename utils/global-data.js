export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Gustavo Reyes';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Devlogs';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
  var fs = require('fs');
  //array of strings with filenames
  var files = fs.readdirSync('/images/');
  //const imageDir = "/images";

  return {
    name,
    blogTitle,
    footerText,
    files,
  };
};
