// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Cwmcoedoeron Farmacy";
export const SITE_DESCRIPTION =
  "A little corner of paradise, deep in the forest, far away from civilisation. Come rewild yourself…";
export const S3 = import.meta.env.PROD
  ? "https://brynoffee.s3.eu-west-2.amazonaws.com/videos"
  : "/video";
