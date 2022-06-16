import React from 'react'

import { Supporter } from '../models/supporter'

export default function Supporters({ supporters }: { supporters: Supporter[] }) {
  return (
    <section className="mt-12 container mx-auto px-6 lg:px-20">
      <h3 className="tracking-tight font-bold text-secondary text-3xl">Apoiadores</h3>
      <p className="tracking-tight text-xl font-light text-gray-400 mt-2">
        <span className="block">aqueles que acreditam no nosso projeto</span>
      </p>
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end w-48 h-1 mt-6" />
      <div className="md:flex items-center mt-8">
        <div className="flex flex-wrap justify-between flex-1 mt-8 md:mt-0">
          {supporters.map((supporter) => (
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center my-6 px-2" key={supporter.id}>
              <img src={supporter.image.url} alt="" className="w-32" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
