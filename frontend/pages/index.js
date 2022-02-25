import Head from 'next/head'
import { AiFillCodeSandboxSquare } from 'react-icons/ai'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full">
        <Navbar />
        <h1 className="text-3xl font-bold flex justify-center">
          <AiFillCodeSandboxSquare /> Hello Codeverse Devs!{' '}
          <AiFillCodeSandboxSquare />
        </h1>
      </main>
    </div>
  )
}
