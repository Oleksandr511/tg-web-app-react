import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'

function Header() {
    const {user,onClose} = useTelegram()
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
            header
        </div>
    )
}

export default Header