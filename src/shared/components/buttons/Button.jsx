import { Button } from '@mui/material'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'

export const ButtonDelete = () => {
    return (
        <Button fullWidth variant="contained" style={{ background: '#FF2B2B' }} startIcon={<AiOutlineDelete />}>
            Delete
        </Button>
    )
}

export const ButtonAdd = ({ bg, children }) => {
    return (
        <Button fullWidth variant="contained" style={{ background: bg }} startIcon={<BsPlus />}>
            {children}
        </Button>
    )
}

