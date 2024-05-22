import React from 'react'
import { useTelegram } from './../hooks/useTelegram'
import Button from '../Button/button'

function header() {
    const {user,onClose} = useTelegram()
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
            Myheader
            
        </div>
    )
}

export default header