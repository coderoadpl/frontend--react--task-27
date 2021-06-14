/* eslint-disable react/prop-types */
import React from 'react'

export const Checkbox = (props) => {
  return (
    <label>
      {props.label}
      <input
        type={'checkbox'}
        checked={props.isChecked}
      />
    </label>
  )
}

export const App = () => {
  return (
    <div>
      <Checkbox
        label={'Checkbox label'}
        isChecked
      />
    </div>
  )
}

export default App
