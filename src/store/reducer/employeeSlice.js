import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    list: [],
  },
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.list.push(action.payload)
    },
    edit: (state, action) => {
      const { id } = action.payload
      console.log(id, typeof id)
      let ind = state.list.findIndex(i => i.id === id)
      console.log(ind)
      if (ind !== -1) {
        state.list[ind] = action.payload
      }
    },
    remove: (state, action) => {
      const id = action.payload
      console.log(id, state.list)
      state.list = state.list.filter(i => i.id !== id)
      console.log(state.list)
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, edit, remove } = employeeSlice.actions

export default employeeSlice.reducer
