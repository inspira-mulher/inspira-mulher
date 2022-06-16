import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const instagramLink = 'https://www.instagram.com/inspiramulher_oficial/'
const facebookLink = 'https://www.facebook.com/oficialinspiramulher/'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gradient-start to-gradient-end text-white py-6 text-center mt-16">
      <div className="container mx-auto lg:flex lg:items-center lg:justify-center">
        <div className="flex justify-center">
          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-white text-primary rounded-full"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href={facebookLink}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-white text-primary rounded-full ml-4"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
        <p className="mt-4 lg:mt-0 lg:ml-12">
          Inspira Mulher &copy; {new Date().getFullYear()}
          <span className="hidden lg:inline"> - </span>
          <br className="lg:hidden" />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
