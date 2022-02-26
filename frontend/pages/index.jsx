import Head from 'next/head'
import { AiFillCodeSandboxSquare } from 'react-icons/ai'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import 'swiper/css/bundle'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full bg-skin-backgroud text-skin-base ">
        <Navbar />
        <div className="container pt-20">
          <Sidebar />
          <Post />
        </div>
      </main>
    </div>
  )
}
