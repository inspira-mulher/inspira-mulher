import { gql, GraphQLClient } from 'graphql-request'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { FaWhatsapp } from 'react-icons/fa'

import CallToAction from '../components/call-to-action'
import Exhibitors from '../components/exhibitors'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Speakers from '../components/speakers'
import Sponsors from '../components/sponsors'
import Supporters from '../components/supporters'
import { data } from '../data.json'
import { Banner } from '../models/banner'
import { Exhibitor } from '../models/exhibitor'
import { Speaker } from '../models/speaker'
import { Sponsor } from '../models/sponsor'
import { Supporter } from '../models/supporter'

const whatsappLink = 'https://api.whatsapp.com/send?phone=5549988851068&text=Ol%C3%A1!'

export type AppData = {
  banners: Banner[]
  speakers: Speaker[]
  exhibitors: Exhibitor[]
  sponsors: Sponsor[]
  supporters: Supporter[]
}

export const getServerSideProps: GetServerSideProps<AppData> = async () => {
  return { props: data }
}

const Home: NextPage<AppData> = ({ banners, speakers, exhibitors, sponsors, supporters }) => {
  return (
    <>
      <div className="bg-primary h-1" />

      <Head>
        <title>Inspira Mulher - A maior feira de empreendedoras do sul</title>
        <meta name="facebook-domain-verification" content="y04snrh6qloz3v38wt46w468kywu0u" />
      </Head>

      <Hero banners={banners} />

      <CallToAction />

      <Speakers speakers={speakers} />

      <Exhibitors exhibitors={exhibitors} />

      <Sponsors sponsors={sponsors} />

      <Supporters supporters={supporters} />

      <Footer />

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 text-white flex items-center justify-center rounded-full shadow"
        style={{ backgroundColor: '#33D26B' }}
      >
        <FaWhatsapp size={36} />
      </a>
    </>
  )
}

export default Home
