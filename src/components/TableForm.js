import React from 'react'
import { useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

const TableForm = ({ description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList }) => {
  const handleSubmit = (e) =>{
    e.preventDefault()

    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount
    }
    setDescription('')
    setQuantity('')
    setPrice('')
    setAmount('')
    setList([...list,newItems])
    console.log(list)
  }
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(price * quantity)
    }

    calculateAmount(amount)
  }, [amount, price, quantity, setAmount])
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='flex flex-col mt-16'>
        <label htmlFor='description'>Item Description</label>
        <input type="text" id='description' name='description' placeholder='Item description' value={description} onChange={(e) => { setDescription(e.target.value) }}></input>
      </div>

      <div className='md:grid grid-cols-3 gap-10'>
        <div className='flex flex-col'>
          <label htmlFor='quantity'>Quantity</label>
          <input type="text" id='quantity' name='quantity' placeholder='Item quantity' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}></input>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='price'>Price</label>
          <input type="text" id='price' name='price' placeholder='Item price' value={price} onChange={(e) => { setPrice(e.target.value) }}></input>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='amount'>Amount</label>
          <p>{amount}</p>
        </div>
      </div>
      <button type='submit' className="bg-blue-500 py-2 px-8 mb-5 text-white rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Add Table Item</button>
    </form>


    </>
  )
}

export default TableForm