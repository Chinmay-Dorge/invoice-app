import React from 'react'

const ClientDetails = ({clientName, clientAddress}) => {
    return (
        <>
            <section className="mt-5">
                <h2 className="text-xl upercase">{clientName}</h2>
                <p>{clientAddress}</p>
            </section>
        </>
    )
}

export default ClientDetails