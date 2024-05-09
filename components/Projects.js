import React from 'react'
import Card from './Card'

export default function Projects() {
    return (
        <div className='h-auto bg-[#241A1C] flex justify-center items-center'>
            <div className='w-5/6  h-5/6 flex flex-wrap gap-10 justify-center items-center my-60'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
