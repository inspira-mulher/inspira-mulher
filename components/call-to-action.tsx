import TicketButton from './ticket-button'

export default function CallToAction() {
  return (
    <section className="mt-12 lg:mt-0 lg:flex">
      <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: 'url(/images/talk-bg.png)' }} />
      <div className="container mx-auto lg:w-1/2 lg:py-12">
        <div className="lg:-ml-36 w-full max-w-xl bg-white px-6 lg:p-12 lg:rounded-xl">
          <h3 className="tracking-tight font-bold text-secondary text-3xl">Inspirada em você!</h3>
          <p className="tracking-tight text-xl font-light text-gray-400 mt-2">
            <span className="block">inscreva-se gratuitamente</span>
            <span className="block">e garanta sua vaga!</span>
          </p>
          <div className="bg-gradient-to-r from-gradient-start to-gradient-end w-48 h-1 mt-6" />
          <div className="mt-8 text-gray-500 font-light pr-4">
            <p>
              A feira Inspira Mulher é o primeiro e maior evento de empreendedorismo voltado para o público feminino do
              sul do país. Com mais de 60 stands de expositores, talk shows e palestrantes de renome nacional, a feira é
              uma oportunidade para empreendedores aumentarem o network, criarem laços e aprenderem com pessoas
              especializadas no ramo.
            </p>
            <p className="mt-4">
              Uma oportunidade imperdível para empresas que têm as mulheres como público alvo, assim como para quem
              sonha em se tornar um empresário e administrar seu próprio negócio!
            </p>
          </div>
          <TicketButton link="https://eventos.mobwe.com.br/e/checkout/ZhuzRpgxIG1M#!" />
        </div>
      </div>
    </section>
  )
}
