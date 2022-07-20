import { useEffect } from 'react'

import { Div } from './style'

export default function Input() {
  function searchUser() {
    const input: HTMLInputElement = document.querySelector('.inputUsername')

    if (input) {
      window.location.href = `/${input.value}`
    }
  }
  
  useEffect(() => {
    window.addEventListener('keydown', function (event) {
      if (event.defaultPrevented) {
        return
      }

      switch (event.code) {
        case 'Enter':
          searchUser()
          break
      }
    })
  }, [])

  return (
    <Div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="form">
        <h3>GitStats</h3>
        <label htmlFor="username">
          <strong>Github Username</strong>
        </label>
        <input
          type="text"
          placeholder="Enter username"
          className="inputUsername"
          id="username"
          autoComplete="off"
        />
        <button onClick={searchUser}>Search</button>
      </div>
    </Div>
  )
}
