import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

const TableForm = ({ description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList ,total, setTotal}) => {
  const [isEditing, setIsEditing] = useState(false)

  //Submit Form
  const handleSubmit = (e) => {
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
    setList([...list, newItems])
    console.log(list)
    setIsEditing(false);
  }

  // Calculating Amount
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(price * quantity)
    }

    calculateAmount(amount)
  }, [amount, price, quantity, setAmount])

  //Total
  let rows = documengt.querySelectorAll(".amount")
  let sum = 0
  for(let i = 0 ; i < rows.length() ; i++){
    if(rows[i].className === 'amount'){
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
    }
  }

  //Delete Function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

  //Edit Function
  const editRow = (id) => {
    const editing = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editing.description)
    setQuantity(editing.quantity)
    setAmount(editing.amount)
    setPrice(editing.price)
  }

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
        <button type='submit' className="bg-blue-500 py-2 px-8 mb-5 text-white rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
          {isEditing ? "Editing Information" : "Add Table Item"}</button>
      </form>

      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className='amount'>{amount}</td>
                <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className='text-red-500 font-bold' /></button></td>
                <td><button onClick={() => editRow(id)}><AiOutlineEdit className='text-green-500 font-bold'/></button></td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </>
  )
}

export default TableForm