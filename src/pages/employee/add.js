import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducer/employeeSlice'
import { useNavigate } from 'react-router-dom'
export default function Add() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitHandler = e => {
    e.preventDefault()
    const first_name = e.target.first_name.value
    const last_name = e.target.last_name.value
    const dob = e.target.dob.value
    const designation = e.target.designation.value
    const profile_photo = e.target.profile_photo.value
    const experience = e.target.experience.value
    const id = Math.floor(Math.random() * (10000 - 1 + 1) + 1)
    const payload = {
      id,
      first_name,
      last_name,
      dob,
      designation,
      profile_photo,
      experience,
    }
    dispatch(add(payload))
    navigate('/employees')
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='text-center'>Add New Employee</h1>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <div className='row'>
          <div className='col-md-3'>First Name</div>
          <div className='col-md-9'>
            <input type='text' name='first_name' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Last Name</div>
          <div className='col-md-9'>
            <input type='text' name='last_name' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>DOB</div>
          <div className='col-md-9'>
            <input type='text' name='dob' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Designation</div>
          <div className='col-md-9'>
            <input type='text' name='designation' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Profile Photo Link</div>
          <div className='col-md-9'>
            <input type='text' name='profile_photo' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Experience</div>
          <div className='col-md-9'>
            <input type='text' name='experience' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <input type='submit' value='Submit' />
          </div>
        </div>
      </form>
    </div>
  )
}
