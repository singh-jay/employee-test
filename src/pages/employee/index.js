import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { remove } from '../../store/reducer/employeeSlice'
export default function Index() {
  const employees = useSelector(state => state.employee.list)
  console.log(employees)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const deleteHandler = id => {
    console.log(id)
    if (window.confirm('Are you sure to delete!!!') === true) {
      dispatch(remove(id))
    }
  }
  return (
    <>
      <div className='row'>
        <div className='col-sm-9'>Employees</div>
        <div className='col-sm-3'>
          <button onClick={() => navigate('/employees/add')}>Add</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Designation</th>
            <th>Profile Photo</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(i => (
            <tr key={i.id}>
              <td>{i.first_name}</td>
              <td>{i.last_name}</td>
              <td>{i.dob}</td>
              <td>{i.designation}</td>
              <td>
                <img src={i.profile_photo} alt={i.first_name} width={80} />
              </td>
              <td>{i.experience}</td>
              <td>
                <button onClick={() => navigate(`/employees/${i.id}/edit`)}>
                  Edit
                </button>
                <button onClick={() => deleteHandler(i.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
