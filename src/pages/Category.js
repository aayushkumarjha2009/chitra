import React from 'react'
import { Accordion } from '../components/Accordion'
import { useParams } from 'react-router-dom'

export const Category = () => {
    const { id } = useParams()
    return (
        <div className='container'>
            <Accordion id={id} />

        </div>
    )
}
