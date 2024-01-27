import Image from 'next/image'
import React from 'react'

const HeroCard = ({ name, desc, picture }: { name: string, desc: string, picture: string }) => {
    return (
        <div className='rounded-md p-2 mt-4 text-white flex flex-row'>
            <Image src={picture} height={250} width={100} alt='name' />
            <div className='ml-3 flex flex-col gap-y-2'>
                <h1 className='text-white bg-inherit font-extrabold'>{name}</h1>
                <h1 className='text-white bg-inherit'>{desc}</h1>
            </div>
        </div>
    )
}

export default HeroCard