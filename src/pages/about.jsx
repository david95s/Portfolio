import Head from 'next/head'
import { AboutMain } from '../businessRules/AboutMain';

const About = () => {

  return (
    <>
      <Head>
        <title>About</title>
      </Head> 
      <AboutMain/>
    </>
  )
}

export default About;