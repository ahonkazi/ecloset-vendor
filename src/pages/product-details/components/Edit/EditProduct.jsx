import { Button } from '@mui/material'
import React from 'react'

const EditProduct = () => {
    return (
        <div className="edit-box">
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-4">
                    <div className="input-item">
                        <p className='text-DarkGray  font-Poppins'>Title</p>
                        <input type="text" className='border px-2 w-full py-2 outline-none rounded-sm text-DarkGray border-[#d6d5d5]' value={'HAVIT HV-H2105D Headphone with Mic'} />
                    </div>
                    <div className="input-item">
                        <p className='text-DarkGray  font-Poppins'>Description</p>
                        <textarea className='border min-h-[120px] px-2 w-full py-2 outline-none rounded-sm text-DarkGray border-[#d6d5d5]'>
                        </textarea>
                    </div>
                    <div className="flex justify-end">
                        <Button variant='contained'>Update</Button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default EditProduct