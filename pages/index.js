import Head from 'next/head'
import Image from 'next/image'
import Heading from '../compononets/heading'
import Navbar from '../compononets/navbar'
import TextArea from '../compononets/textarea'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Online Note Taking Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Navbar/>
        <Heading/>
        <TextArea/>
      </div>
  )
}
