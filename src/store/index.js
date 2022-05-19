import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from './reducer/employeeSlice'
export default configureStore({
  reducer: {
    employee: employeeSlice,
  },
})
