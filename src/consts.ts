// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Brynoff";
export const SITE_DESCRIPTION = "Wales is where the heart is!";
export const S3 = import.meta.env.PROD
  ? "https://brynoffee.s3.eu-west-2.amazonaws.com/videos"
  : "/video";
