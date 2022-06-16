import { Speaker } from '../models/speaker'
import TicketButton from './ticket-button'

export default function Speakers({ speakers }: { speakers: Speaker[] }) {
  return (
    <section className="mt-12 container mx-auto px-6 lg:px-20">
      <h3 className="tracking-tight font-bold text-secondary text-3xl">Destaques do evento</h3>
      <p className="tracking-tight text-xl font-light text-gray-400 mt-2">
        <span className="block">palestras com ingressos limitados</span>
      </p>
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end w-48 h-1 mt-6" />
      {speakers.map((speaker) => (
        <div className="mt-8" key={speaker.id}>
          <div className="md:flex">
            <img
              src={speaker.image.url}
              alt={speaker.title}
              className="w-full md:w-56 h-32 md:h-72 object-cover rounded-lg shadow-lg"
            />
            <div className="md:ml-8 flex flex-col justify-between max-w-xl">
              <h3 className="tracking-tight font-bold text-secondary text-xl mt-6 md:mt-0">{speaker.title}</h3>
              <p className="mt-2 text-gray-500 font-light pr-4 lg:text-lg">{speaker.description}</p>
              <TicketButton />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
