import React from 'react'

export default function Form({ data = {}, submitHandler }) {
  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <div className='row'>
          <div className='col-md-3'>First Name</div>
          <div className='col-md-9'>
            <input
              type='text'
              name='first_name'
              defaultValue={data.first_name || ''}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Last Name</div>
          <div className='col-md-9'>
            <input
              type='text'
              name='last_name'
              defaultValue={data.last_name || ''}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>DOB</div>
          <div className='col-md-9'>
            <input type='text' name='dob' defaultValue={data.dob || ''} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Designation</div>
          <div className='col-md-9'>
            <input
              type='text'
              name='designation'
              defaultValue={data.designation || ''}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Profile Photo Link</div>
          <div className='col-md-9'>
            <input
              type='text'
              name='profile_photo'
              defaultValue={data.profile_photo || ''}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Experience</div>
          <div className='col-md-9'>
            <input
              type='text'
              name='experience'
              defaultValue={data.experience || ''}
            />
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
