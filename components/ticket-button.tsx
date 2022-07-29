import { FaTicketAlt } from 'react-icons/fa'

export default function TicketButton() {
  const link = 'https://eventos.mobwe.com.br/e/checkout/ZhuzRpgxIG1M#!'
  return (
    <div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 bg-primary px-8 py-3 text-lg text-white font-medium rounded-xl flex items-center md:inline-flex justify-center"
        >
          <FaTicketAlt />
          <span className="ml-3">Adquira seu passaporte</span>
        </a>
      ) : (
        <div className="mt-6 bg-primary px-8 py-3 text-lg text-white font-medium rounded-xl flex items-center md:inline-flex justify-center opacity-50">
          <FaTicketAlt />
          <span className="ml-3">Ingressos em breve</span>
        </div>
      )}
    </div>
  )
}
