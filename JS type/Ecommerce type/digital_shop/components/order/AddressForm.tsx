"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { addAddress } from '@/lib/api'
import { toast } from 'react-toastify'
import { Addresstype } from '@/lib/type'

const AddressForm = ({ email, address }: { email: string | null | undefined, address: Addresstype | null | undefined }) => {

    const [state,setState] = useState(address?.state ? address.state : "")
    const [city,setCity] = useState(address?.city ? address.city : "")
    const [phone,setPhone] = useState( address?.phone ? address.phone : "")
    const [street,setStreet] = useState(address?.street ? address.street : "")
    const [btnLoader, setBtnLoader] = useState(false)
    
    function disableButton(){
        if(state.trim().length==0 || city.trim().length==0 || phone.trim().length==0 || street.trim().length==0){
            return true
        }        
        return false
    }

    async function handleAddAddress(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setBtnLoader(true)
        const addressObj = {
            email,
            street,
            city,
            state,
            phone
        }
        try{
            await addAddress(addressObj)
            toast.success("Address added successfully")
            setState("")
            setCity("")
            setPhone("")
            setStreet("")
        }
        catch(err:unknown)
        {
            if(err instanceof Error){
                toast.error(err.message)
                throw new Error(err.message)
            }
            toast.error("An unknown error occured!")
            throw new Error("An unknown error occured!");
        }
        finally{
            setBtnLoader(false)
        }
    }

  return (
        <form onSubmit={handleAddAddress} className='w-full mx-auto bg-white p-8 rounded-2xl space-y-6'>
            <h2 className='text-2xl font-semibold text-gray-800 text-center mb-6'>
                Shipping Address
            </h2>
            <div className='space-y-4'>
                <Input
                    placeholder='Street Address'
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className='w-full border h-12 border-gray-300 rounded-md px-4 focus:border-black focus:ring-2 focus:ring-black/20 transition-all'
                />
                <Input
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className='w-full border h-12 border-gray-300 rounded-md px-4 focus:border-black focus:ring-2 focus:ring-black/20 transition-all'
                />
                <Input
                    placeholder='State/Province'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className='w-full border h-12 border-gray-300 rounded-md px-4 focus:border-black focus:ring-2 focus:ring-black/20 transition-all'
                />
                <Input
                    placeholder='Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className='w-full border h-12 border-gray-300 rounded-md px-4 focus:border-black focus:ring-2 focus:ring-black/20 transition-all'
                />
                <button
                    type='submit' 
                    disabled={disableButton() || btnLoader}
                    className='w-full h-12 bg-black cursor-pointer text-white font-medium rounded-md hover:bg-gray-800 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed'
                >
                    {btnLoader?"Saving Address..." : address?.city ? "Update Address": "Save Address"}
                </button>
            </div>
        </form>
  )
}

export default AddressForm
