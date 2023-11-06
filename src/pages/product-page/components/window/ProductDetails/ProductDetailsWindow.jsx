import { IconButton } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'
const ProductDetailsWindow = () => {
    return (
        <AnimatePresence>
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }}>
                <div className='fixed top-0 left-0 w-screen h-screen bg-white z-[100]'>
                    <div className="header px-2 py-1 lg:p-3 border-b">
                        <p className='flex items-center gap-2'>
                            <Link to={'/products'}>
                                <IconButton>
                                    <GoArrowLeft />
                                </IconButton>
                            </Link>
                            <p className='text-DarkGray font-Exo'>Products #1212</p>
                        </p>
                    </div>
                </div>
            </motion.div>

        </AnimatePresence>
    )
}

export default ProductDetailsWindow