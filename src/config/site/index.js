export default {
  charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1',
  name: 'Generator React SPA Client',
  title: 'Generator React SPA Client',
  description: 'Generator React SPA Client',
  /*
    index: tells bots to index the page;
    noindex: tells bots not to index the page;
    follow: tells bots to crawl links on the page, and that you also vouch for them;
    nofollow: tells bots not to crawl links on the page, and that no endorsement is implied.
  */
  robots: process.env.ROBOTS,
  // Open Graph & Facebook
  openGraph: {
    status: false, // change it to true to use, default is false
    type: 'website',
    url: '', // set the website url, not the facebook page url
    title: '',
    description: '',
    image: ''
  },
  twitter: {
    status: false, // change it to true to use, default is false
    card: 'summary_large_image',
    url: '', // set the website url, not the twitter url
    title: '',
    description: '',
    image: ''
  }
}
