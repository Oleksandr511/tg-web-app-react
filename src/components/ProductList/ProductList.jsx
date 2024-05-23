import React from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem.jsx'
import { useTelegram } from '../hooks/useTelegram'
import { useEffect, useCallback } from 'react'
import { useState } from 'react'

const products = [
  { id: '1', title: 'Jeans', price: 120, description: 'Blue color, streight' },
  { id: '2', title: 'Jacket', price: 100, description: 'Green color, warm' },
  { id: '3', title: 'cap', price: 20, description: 'Black color, modern' },
  { id: '4', title: 'Jeans', price: 110, description: 'White color, modern' },
  { id: '5', title: 'shorts', price: 80, description: 'Red color, modern' },
  { id: '6', title: 'Trousers', price: 90, description: 'Pink color, modern' }
]

const getTotalPrice = (items = []) => {
  return items.reduce((acc, cur) => {
    return acc += cur.price
  }, 0)
}


const ProductList = () => {
  const [addedItems, setAddedItems] = useState([])
  const { tg, queryId } = useTelegram()

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId
    }
    fetch('https://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }, [])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)

    }
  }, [onSendData])


  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id)
    let newItems = []

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Buy ${getTotalPrice(newItems)}`
      })
    }
  }

  return (
    <div className={'list'}>
      {products.map(item => (
        <ProductItem
          product={item}
          onAdd={onAdd}
          className={'item'}
        />
      ))}
    </div>
  );
}

export default ProductList