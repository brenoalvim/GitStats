import { Div } from "./style";

export default function Input() {
  return (
    <Div>
      <div className="input">
        <input
          className="inputForm"
          type="text"
          placeholder="GitHub Username"
        />
        <button className="buttonSearch">Search</button>
      </div>
    </Div>
  );
}
