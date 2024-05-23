import React from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem.jsx'
import { useTelegram } from '../hooks/useTelegram'

import { useState } from 'react'

const products = [
  { id: '1', title: 'Jeans', price: 120, description: 'Blue color, streight' },
  { id: '2', title: 'Jacket', price: 100, description: 'Green color, warm' },
  { id: '3', title: 'cap', price: 20, description: 'Black color, modern' }
]

const getTotalPrice = (items = []) => {
  return items.reduce((acc, cur) => {
    return acc += cur.price
  }, 0)
}


const ProductList = () => {
  const [addedItems, setAddedItems] = useState([])
  const { tg } = useTelegram()
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