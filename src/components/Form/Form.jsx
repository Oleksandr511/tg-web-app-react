import React, { useCallback, useEffect, useState } from 'react'
import './Form.css'
import { useTelegram } from '../hooks/useTelegram'



const Form = () => {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [subject, setSubject] = useState('physical')
    const { tg } = useTelegram()

    const onSendData = useCallback(() => {
        const data = {
            country,
            city,
            subject
        }
        tg.sendData(JSON.stringify(data))
    }, [country, city, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)

        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send data'
        })
    }, [])

    useEffect(() => {
        if (!country || !city) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, city])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Entet your data</h3>
            <input className={'input'} type='text' placeholder='Country' value={country} onChange={onChangeCountry} />
            <input className={'input'} type='text' placeholder='City' value={city} onChange={onChangeCity} />
            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={'physical'}>physical person</option>
                <option value={'legal'}>legal person</option>
            </select>
        </div>
    )
}

export default Form