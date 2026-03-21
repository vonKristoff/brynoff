// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Valley of the Cool Trees";
// export const SUB_TITLE = "Valley of the Cool Trees";
export const SITE_DESCRIPTION =
  "a little corner of paradise, deep in the forest, a place all to yourselves";
export const S3 = import.meta.env.PROD
  ? "https://brynoffee.s3.eu-west-2.amazonaws.com/videos"
  : "/video";
// local prefix /public/videos/IMG_XXXX
export const VIDEO_PREFIX = "IMG_";
