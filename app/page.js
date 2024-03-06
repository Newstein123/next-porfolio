import HomePage from './componets/home/HomePage'

export const metadata = {
  title: "Min Thet Paing - Home",
  description: 'Home Page of min thet paing portfolio',
  generator: 'Next.js',
  applicationName: "Min Thet Paing's Portfolio",
  referrer: 'origin-when-cross-origin',
  keywords: ['minthetpaing', 'web developer', 'myanmar', 'programmer', 'myanmar maritime university'],
  creator: 'Min Thet Paing',
  publisher: 'Min Thet Paing',
  openGraph: {
    title: 'Min Thet Paing',
    description: 'Experienced full stack web developer with three years of expertise in front-end and back-end technologies. Skilled in JavaScript frameworks like React, Laravel and Node.js, with a focus on building robust and interactive web applications. Passionate about continuous learning and staying updated with the latest trends in web development.',
    url: 'https://minthetpaing.com',
    siteName: 'Min Thet Paing',
    images: [
      {
        url: process.env.APP_URL + '/image/profile.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  )
}
