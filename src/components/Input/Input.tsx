import { Div } from './style'

export default function Input() {
  function searchUser() {
    const input = document.querySelector('.inputUsername') as HTMLInputElement

    if (input) {
      window.location.href = `/${input.value}`
    }
  }
  return (
    <Div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="form">
        <h3>
          Git<strong>Stats</strong>
        </h3>
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
