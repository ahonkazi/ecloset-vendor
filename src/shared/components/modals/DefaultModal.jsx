import { Button, IconButton } from '@mui/material'
import React from 'react'
import { VscClose } from 'react-icons/vsc'
import { SelectField } from '../input-fields/SelectField'
import { AnimatePresence, motion } from 'framer-motion'
const DefaultModal = ({ children, modalFunction }) => {
    return (
        <div className="fixed z-[100] flex items-center justify-center top-0 left-0 h-full w-full bg-black bg-opacity-70">
            <AnimatePresence>
                <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
                    <div className="modal w-screen md:w-[600px] flex flex-col h-screen md:h-[80vh] bg-white rounded px-6 py-6">
                        <div className="modal-header shrink-0 flex items-center justify-between">
                            <div className="font-WorkSans">
                                <h2 className='text-Green'>Add Product</h2>
                                <p className='text-DarkGray'>Add your product and necessary information from here</p>
                            </div>

                            <button onClick={() => modalFunction(false)} className='bg-white shadow-box text-xl active:scale-[0.95] p-2 rounded-full'><VscClose className='text-rose-500' /></button>
                        </div>
                        {children}

                        <div className="modal-footer grid grid-cols-2 shrink-0 gap-2">
                            <Button onClick={() => modalFunction(false)} variant='outlined' fullWidth>Cancel</Button>
                            <Button variant='contained' fullWidth>Add Product</Button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default DefaultModal