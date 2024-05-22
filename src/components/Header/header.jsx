import React from 'react'

function header() {
    let tg = window.Telegram.WebApp
    const onClose = () => {
        tg.close()
    }
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
            header
        </div>
    )
}

export default header