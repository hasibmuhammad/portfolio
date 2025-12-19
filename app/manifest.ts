import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Md Hasib Talukder Portfolio',
    short_name: 'Hasib Portfolio',
    description: 'Personal portfolio of Md Hasib Talukder, showcasing projects and skills.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
