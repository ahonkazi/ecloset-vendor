import { Button, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowLeft } from 'react-icons/go'
const Heading = () => {
    return (
        <div className='bg-white shadow-box site-container'>
            <div className="py-2 flex justify-between">
                <p className='flex items-center gap-2'>
                    <Link to={'/products'}>
                        <IconButton size='small'>
                            <GoArrowLeft />
                        </IconButton>
                    </Link>
                    <p className='text-DarkGray font-Exo'>Products / <span>HAVIT HV-H2105D Headphone with Mic</span> </p>
                </p>
                <Button variant='contained'>Save</Button>
            </div>

        </div>
    )
}

export default Heading