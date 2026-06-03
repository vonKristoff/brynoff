// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Group Camping & Retreat Venue in South Wales | Valley of the Cool Trees";
export const SITE_DESCRIPTION =
  "Stunning group camping in South Wales for large groups, retreats and gatherings. Exclusive hire site with fire pit, outdoor kitchen, shelter and off‑grid facilities for 20–40 guests.";
export const S3 = import.meta.env.PROD
  ? "https://brynoffee.s3.eu-west-2.amazonaws.com/videos"
  : "/video";
// local prefix /public/videos/IMG_XXXX
export const VIDEO_PREFIX = "IMG_";
