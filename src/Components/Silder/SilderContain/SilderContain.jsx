import React from 'react'

const SilderContain = ({
    title,
    description,
    buttonText,
    img
}) => {
    return (
        <div className='row align-items-lg-center active'>
            <div className='col-12 col-lg-6 col-mg-6 col-xl-6'>
                <img src={img} alt={title} width={540} />
            </div>
            <div className='col-12 col-lg-6 col-mg-6 col-xl-6 m-auto p-auto'>
                <h2 className='section-title mb-3'>{title}</h2>
                <p>{description}</p>
                <button type='button' className='btn btn-primary mr-2 mb-2 w-155' >
                    {buttonText}
                </button>
            </div>
        </div>

    )
}

export default SilderContain