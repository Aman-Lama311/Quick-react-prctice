import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Card = ({data}) => {

  return (
    <div className='relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden'>
      <FaFileLines />
      <p className='leading-tight mt-5 font-medium text-sm'>{data.desc}</p>
      <div className='absolute bottom-0 left-0 w-full '>
        <div className='flex items-center justify-between mb-4 px-8'>
            <h4>{data.fileSize}</h4>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <MdOutlineFileDownload color='#fff' /> }
            </span>
        </div>
        {data.tag.isOpen && (<motion.div className={`${data.tag.tagColor === 'blue' ? 'bg-blue-500': 'bg-green-500'} flex items-center justify-center py-4`}>
            <h4 className='text-sm font-medium'>{data.tag.tagTitle}</h4>
        </motion.div>)}
        
      </div>
    </div>
  )
}

export default Card
