import React from 'react'

const Footer = ({name, email, website, phone, bankName, bankAccount }) => {
    return (
        <>
            <footer className='footer border-t-2 border-gray-300 pt-5'>
                <ul className="flex flex-wrap justify-center items-center">
                    <li><span className="font-bold">Your Name: </span>{name} </li>
                    <li><span className="font-bold">Your email: </span>{email}</li>
                    <li><span className="font-bold">Phone Number: </span>{phone}</li>
                    <li><span className="font-bold">Bank: </span>{bankName}t</li>
                    <li><span className="font-bold">Account holder: </span>{name}</li>
                    <li><span className="font-bold">Account Number: </span>{bankAccount}</li>
                    <li><span className="font-bold" target='_blank'>Website: </span>{website}</li>
                </ul>
            </footer>
        </>
    )
}

export default Footer