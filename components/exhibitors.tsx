import { Exhibitor } from '../models/exhibitor'

export default function Exhibitors({ exhibitors }: { exhibitors: Exhibitor[] }) {
  return (
    <section className="mt-12 container mx-auto px-6 lg:px-20">
      <h3 className="tracking-tight font-bold text-secondary text-3xl">Expositores</h3>
      <p className="tracking-tight text-xl font-light text-gray-400 mt-2">
        <span className="block">conheça os expositores da feira</span>
      </p>
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end w-48 h-1 mt-6" />
      <div className="flex flex-wrap justify-between flex-1 mt-8">
        {exhibitors.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="w-1/3 md:w-1/4 lg:w-1/5 flex items-center justify-center my-6 px-2"
            key={`exhibitor-${item.id}`}
          >
            <img src={item.image?.url} alt="" className="w-24" />
          </a>
        ))}
      </div>
    </section>
  )
}
