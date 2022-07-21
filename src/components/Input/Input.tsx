import { useEffect } from 'react'

import { Div } from './style'

export default function Input() {

  function searchUser() {
    const input: HTMLInputElement = document.querySelector('.inputUsername')

    if (input) {
      redirectToMainPage(input.value)
    }
  }

  function redirectToMainPage(username: string) {
    window.location.href = `/${username}`
  }

  useEffect(() => {
    window.addEventListener('keydown', event => {
      if (event.defaultPrevented) {
        return
      }

      if (event.code == 'Enter') {
        searchUser()
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
          id="username"
          autoComplete="off"
          list="usernameList"
          className="inputUsername"
          placeholder="Enter username"
        />
        <datalist id="usernameList">
          <option value="brenoalvim">Breno Alvim</option>
          <option value="matthew-sbrito">Matheus Brito</option>
          <option value="filipedeschamps">Filipe Deschamps</option>
        </datalist>
        <button onClick={searchUser}>Search</button>
      </div>
    </Div>
  )
}
