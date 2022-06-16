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
import { Banner } from '../models/banner'
import { Exhibitor } from '../models/exhibitor'
import { Speaker } from '../models/speaker'
import { Sponsor } from '../models/sponsor'
import { Supporter } from '../models/supporter'

const graphcms = new GraphQLClient('https://api-sa-east-1.graphcms.com/v2/cl47giwc63lq401z32ffkhc5r/master')

const whatsappLink = 'https://api.whatsapp.com/send?phone=5549988851068&text=Ol%C3%A1!'

export type AppData = {
  banners: Banner[]
  speakers: Speaker[]
  exhibitors: Exhibitor[]
  sponsors: Sponsor[]
  supporters: Supporter[]
}

const QUERY = gql`
  query {
    banners {
      id
      image {
        id
        url
      }
    }
    speakers {
      id
      title
      description
      image {
        id
        url
      }
    }
    exhibitors {
      id
      link
      image {
        id
        url
      }
    }
    sponsors {
      id
      main
      image {
        id
        url
      }
    }
    supporters {
      id
      image {
        id
        url
      }
    }
  }
`

export const getServerSideProps: GetServerSideProps<AppData> = async () => {
  const props = await graphcms.request<AppData>(QUERY)
  console.log(props)
  return { props }
}

const Home: NextPage<AppData> = ({ banners, speakers, exhibitors, sponsors, supporters }) => {
  return (
    <>
      <div className="bg-primary h-1" />

      <Head>
        <title>Inspira Mulher - A maior feira de empreendedoras do sul</title>
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
