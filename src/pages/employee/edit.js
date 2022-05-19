import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { edit } from '../../store/reducer/employeeSlice'
export default function Edit() {
  const params = useParams()
  const id = params.id
  console.log(id, typeof id)
  const data = useSelector(state =>
    state.employee.list.find(i => i.id === Number(id))
  )
  console.log(data)
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
    const id = data.id
    const payload = {
      id,
      first_name,
      last_name,
      dob,
      designation,
      profile_photo,
      experience,
    }
    console.log(payload)
    dispatch(edit(payload))
    navigate('/employees')
  }
  if (!data) {
    return <div className='text-center'>No Data</div>
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
            <input
              type='text'
              name='first_name'
              defaultValue={data.first_name}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Last Name</div>
          <div className='col-md-9'>
            <input type='text' name='last_name' defaultValue={data.last_name} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>DOB</div>
          <div className='col-md-9'>
            <input type='text' name='dob' defaultValue={data.dob} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Designation</div>
          <div className='col-md-9'>
            <input
              type='text'
              name='designation'
              defaultValue={data.designation}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Profile Photo Link</div>
          <div className='col-md-9'>
            <input
              type='text'
              name='profile_photo'
              defaultValue={data.profile_photo}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>Experience</div>
          <div className='col-md-9'>
            <input
              type='text'
              name='experience'
              defaultValue={data.experience}
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
