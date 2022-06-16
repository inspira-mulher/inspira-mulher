import { Sponsor } from '../models/sponsor'

export default function Sponsors({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <section className="mt-12 container mx-auto px-6 lg:px-20">
      <h3 className="tracking-tight font-bold text-secondary text-3xl">Patrocinadores</h3>
      <p className="tracking-tight text-xl font-light text-gray-400 mt-2">
        <span className="block">quem está nos apoiando</span>
      </p>
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end w-48 h-1 mt-6" />
      <div className="md:flex items-center mt-8">
        <div className="flex justify-center">
          {sponsors
            .filter((sponsor) => sponsor.main)
            .map((sponsor) => (
              <img src={sponsor.image.url} alt="" className="w-72" key={sponsor.id} />
            ))}
        </div>
        <div className="flex flex-wrap justify-between flex-1 mt-8 md:mt-0 md:ml-4">
          {sponsors
            .filter((sponsor) => !sponsor.main)
            .map((sponsor) => (
              <div className="w-1/2 lg:w-1/3 flex items-center justify-center my-6 px-2" key={sponsor.id}>
                <img src={sponsor.image.url} alt="" className="w-24" />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
