import React from 'react'
import { useParams } from 'react-router-dom'
import { Accordion } from '../components/Accordion'

export const Shlok = () => {
    const { id, ids } = useParams()
    return (
        <div className='container'>
            <Accordion s={true} ids={ids} id={id} />
        </div>
    )
}
