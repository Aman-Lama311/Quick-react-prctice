import React from 'react'
import Card from './Card'


const Foreground = () => {
const data = [{
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    fileSize: '.9mb',
    close: true,
    tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green'},
},
{
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    fileSize: '.3mb',
    close: true,
    tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'blue'},
},
{
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    fileSize: '.7mb',
    close: true,
    tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green'},
}
];

  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-6 p-6 flex-wrap'>
     {data.map((item, idx)=>(
        <Card data={item} />
     ))}
    </div>
  )
}

export default Foreground
