import Head from 'next/head';
import { HomeMain } from '../businessRules/HomeMain';


export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeMain/>
    </>
  )
}
