import React from 'react'

function Cards() {
  return (
    <>
<div className="w-full px-20 pb-20 border-b-[1px] border-zinc-700"></div>
    <div className='w-full h-screen flex gap-5 items-center px-12 bg-zinc-950'>
        <div className="cardcontainer h-[50vh] w-1/2">
        
            <div className='card relative w-full rounded-xl h-full flex items-center justify-center bg-[#004d43]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 border-2 bottom-10 px-5 py-1 rounded-full text-[rgb(137,245,137)] border-[rgb(137,245,137)]'>©2019-2022</button>
            </div>
        </div>

        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
            <div className='card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#212121]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-10 border-2 bottom-10 px-3 py-1 rounded-full text-[rgb(137,245,137)] border-[rgb(137,245,137)]'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#212121]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute left-10 border-2 bottom-10 px-3 py-1 rounded-full text-[rgb(137,245,137)] border-[rgb(137,245,137)]'>BUSINESS BOOTCAMP ALUMINI</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards