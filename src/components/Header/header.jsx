import React from 'react'
import { useTelegram } from './../hooks/useTelegram'
import Button from '../Button/button'
import './header.css'

function header() {
    const {user,onClose} = useTelegram()
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
            
            
        </div>
    )
}

export default header