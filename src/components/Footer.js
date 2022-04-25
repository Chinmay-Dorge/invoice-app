import React from 'react'

const Footer = ({name, address, email, website}) => {
    return (
        <>
            <footer>
                <ul className="flex flex-wrap justify-center items-center">
                    <li><span className="font-bold">Your Name: </span>{name} </li>
                    <li><span className="font-bold">Your email: </span>{email}</li>
                    <li><span className="font-bold">Phone Number: </span>987654321</li>
                    <li><span className="font-bold">Bank: </span>Bank Account</li>
                    <li><span className="font-bold">Account holder: </span>Chinmay</li>
                    <li><span className="font-bold">Account Number: </span>1234567890</li>
                    <li><span className="font-bold">Website: </span>{website}</li>
                </ul>
            </footer>
        </>
    )
}

export default Footer