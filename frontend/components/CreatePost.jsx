import {
  ChevronRightIcon,
  EmojiHappyIcon,
  PhotographIcon,
  PlayIcon,
  VideoCameraIcon,
  XIcon,
} from '@heroicons/react/outline'

import Image from 'next/image'
import { useState } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const CreatePost = () => {
  const [input, setInput] = useState('')
  const [showEmojis, setShowEmojis] = useState(false)

  const addEmoji = (e) => {
    let sym = e.unified.split('-')
    let codesArray = []
    sym.forEach((el) => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)
    setInput(input + emoji)
  }
  return (
    <>
      <div className=" justify-center relative flex w-full">
        <div className="rounded-3xl bg-skin-color4  h-auto w-[770px] mb-2 lg:m-2">
          <div className="flex w-full px-6 py-4 ">
            <div className="flex items-center justify-center w-14 h-14 p-0 cursor-pointer mr-2">
              <Image
                src="/dummyProfileImg.jpg"
                width={180}
                height={180}
                className="rounded-full object-cover"
              />
            </div>

            <div className=" w-full ">
              <textarea
                className="
                rounded-2xl
                bg-skin-color7
                block
                w-full
                px-3
                py-1 mt-2.5
                text-base
                transition
                ease-in-out
                outline-none "
                rows="3"
                placeholder="What’s Happening?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>

              <div className="flex justify-between my-2 flex-col w-full lg:flex-row">
                <button
                  className="w-[26px]"
                  onClick={() => setShowEmojis(!showEmojis)}
                >
                  {!showEmojis ? <EmojiHappyIcon /> : <XIcon />}
                </button>
               
                <button className="w-[120px] py-1 my-2 flex justify-center bg-skin-primary rounded-[8px]">
                  <PhotographIcon className="w-[24px] mr-1" />
                  Photo
                </button>
                <button className="w-[120px] py-1 my-2 flex justify-center bg-skin-primary rounded-[8px]">
                  <VideoCameraIcon className="w-[24px] mr-1" />
                  Video
                </button>

                <button className="w-[120px] py-1 my-2  flex justify-center bg-skin-primary rounded-[8px]">
                  <PlayIcon className="w-[24px] mr-1" />
                  Gif
                </button>

                <button className="w-[120px] py-1 my-2  flex justify-center bg-skin-primary rounded-[8px]">
                  Post
                  <ChevronRightIcon className="w-[24px] ml-1" />
                </button>

              </div>
              
            </div>
            {showEmojis && (
                  <div className="m-auto h-auto absolute z-10 lg:top-48 top-36 left-0 lg:left-52 lg:right-52 lg:w-[770px] p-4 flex justify-center bg-skin-color4 rounded-2xl">
                    <Picker
                      darkMode="true"
                      onSelect={addEmoji}
                      theme={'dark'}
                      style={{ width: '100%',background:'#232226',border:'none' }}
                    />
                  </div>
                )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePost
