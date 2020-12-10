import site from './index'

describe('site config', () => {
  it('should be properly configured', () => {
    expect(site).toStrictEqual({
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
      name: 'Generator React SPA Client',
      title: 'Generator React SPA Client',
      description: 'Generator React SPA Client',
      robots: process.env.ROBOTS,
      openGraph: {
        status: false,
        type: 'website',
        url: '',
        title: '',
        description: '',
        image: ''
      },
      twitter: {
        status: false,
        card: 'summary_large_image',
        url: '',
        title: '',
        description: '',
        image: ''
      }
    })
  })
})
