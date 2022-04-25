import React from 'react'

const Notes = ({notes}) => {
    return (
        <>
            <section className="mb-5">
                <p>Notes to client</p>
                <p className='lg:w-1/2 text-justify'>{notes}</p>
            </section>
        </>
    )
}

export default Notes