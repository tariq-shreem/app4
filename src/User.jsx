import React from 'react'
import CustomButton from './shared/CustomButton.jsx'

export default function User({  name, email }) {
    return (
        <div className='user'>
            <h2>Name Is {name}</h2>
            <h3>Email Is {email}</h3>
            <CustomButton text="Delete" type="delete" />
            <CustomButton text='Details' type="info" />
        </div>
    )
}
