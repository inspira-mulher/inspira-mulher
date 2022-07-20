import { FaFacebookF, FaInstagram, FaRegCalendarCheck } from 'react-icons/fa'

import { Banner } from '../models/banner'

const instagramLink = 'https://www.instagram.com/inspiramulher_oficial/'
const facebookLink = 'https://www.facebook.com/oficialinspiramulher/'

export default function Hero({ banners }: { banners: Banner[] }) {
  return (
    <section>
      <div className="container mx-auto lg:flex">
        <div className="flex flex-col items-center justify-center xl:w-1/2 px-6 md:px-20 lg:pr-12 pt-8 lg:pt-12 pb-12">
          <div className="container mx-auto flex items-center justify-between lg:justify-start">
            <img src="/images/logo.png" alt="Logotipo da Inspira Mulher" className="w-40" />
            <div className="lg:ml-16">
              <span className="hidden lg:block text-lg font-light text-gray-400">
                <div>
                  <span className="block">O evento de maior conexão </span>
                  <span className="block">entre empreendedoras do Sul do Brasil</span>
                </div>
              </span>
              <div className="flex lg:mt-4">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-primary hover:bg-primary-dark text-white rounded-full"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-primary hover:bg-primary-dark text-white rounded-full ml-4"
                >
                  <FaFacebookF size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <h1 className="tracking-tight font-bold text-secondary text-center lg:text-left text-5xl lg:text-6xl mt-10">
              <span className="block">Conheça as donas</span>
              <span className="block text-primary">do negócio.</span>
            </h1>
            <h2 className="font-light text-gray-600 text-center lg:text-left text-2xl lg:text-3xl mt-6">
              <span className="block">Venha para a linha de frente.</span>
              <span className="block font-semibold">Aprenda com as melhores!</span>
            </h2>
            <div className="flex justify-center lg:justify-start mt-12 px-4 lg:px-0">
              <div className="flex">
                <FaRegCalendarCheck className="text-primary mx-auto" size="48" />
                <div className="text-xl leading-tight font-medium text-gray-600 text-left mt-0 ml-4">
                  <span className="block">02 a 04</span>
                  <span className="block">de setembro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {banners.map((item) => (
          <div className="xl:w-1/2 hidden xl:flex" key={item.id}>
            <img src={item.image?.url} alt="" className="w-full" />
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end text-white py-6 text-xl font-semibold text-center shadow">
        <div className="container mx-auto px-8">Sua marca está preparada para se comunicar com o público feminino?</div>
      </div>
    </section>
  )
}
