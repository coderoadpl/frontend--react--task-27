/* eslint-disable react/prop-types */
import React from 'react'

export const Checkbox = (props) => {
  const { label, isChecked } = props

  return (
    <label>
      {label}
      <input
        type={'checkbox'}
        checked={isChecked}
      />
    </label>
  )
}

export const App = () => {
  return (
    <div>
      <Checkbox
        label={'Checkbox label'}
        isChecked={true}
      />
    </div>
  )
}

export default App
