import Head from 'next/head'
import Post from '../components/Post'
import userData from '../data/data'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import LodingScreen from '../components/LodingScreen'
import { useEffect, useState } from 'react'
import API from '../api/api'
import axios from 'axios'
import { shallowEqual, useSelector } from 'react-redux'
import Link from 'next/link'

export default function search() {
  const { accessToken } = useSelector((state) => state.auth, shallowEqual)
  const [searchData, setSearchData] = useState([])
  const [search, setSearch] = useState('')
  const [loding, setLoding] = useState(false)

  const getUserData = async () => {
    setLoding(true)
    try {
      const { data } = await axios.get(`${API}/users/search?search=${search}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      console.log(data.users)
      setSearchData(data.users)
      setLoding(false)
    } catch (error) {
      console.log(error)
      setLoding(false)
    }
   
  }

  useEffect(() => {
    getUserData()
  }, [search])

  if (loding) {
    return <LodingScreen />
  }

  return (
    <div>
      <Head>
        <title>Home | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" justify-center  flex w-full lg:mb-5 mb-3">
        <div className="lg:rounded-3xl md:rounded-3xl bg-skin-color4 h-auto w-[770px]">
          <div className=" justify-center flex border-none bg-skin-color4 w-auto rounded-full p-1">
            <div className="content-center grid text-skin-base bg-skin-color4 ml-3 p-2">
              <FaSearch />
            </div>
            <input
              type="text"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
              }}
              placeholder="Search for posts, people or topics ..."
              className=" mx-3 w-full text-skin-base bg-skin-color4 border-none outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        {searchData?.map((getData) => (
          <div
            className=" justify-center relative flex h-auto lg:mb-5 mb-3"
            key={getData._id}
          >
            <div className="lg:rounded-3xl md:rounded-3xl bg-skin-color4  h-auto w-full max-w-[770px] lg:w-[770px]">
              <Link href={`/post/${getData._id}`}>
                <a>
                  <div className="flex justify-between w-full px-6 py-6 ">
                    <div className="flex w-auto max-w-[280px] justify-between ">
                      <div className="flex items-center justify-center w-14 h-14 p-0 cursor-pointer">
                        <Image
                          src={
                            getData?.avatar ||
                            'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
                          }
                          width={180}
                          height={180}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center space-y-[7px] text-base cursor-pointer ml-2">
                        <h6 className="text-md font-[500] leading-4">
                          {getData.fullname}{' '}
                        </h6>
                        <p className="text-[13px] leading-4 text-skin-muted">
                          {getData.username}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
