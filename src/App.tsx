import { useState } from "react";
import styled from "styled-components";
import "./App.css";

export default function App() {
  const [checked, setChecked] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  function handleChange(name: string) {
    if (name === "one") {
      if (checked.one) {
        setChecked({ ...checked, one: !checked.one });
      } else {
        setChecked({
          one: true,
          two: true,
          three: true,
          four: true,
          five: true,
        });
      }
    } else {
      switch (name) {
        case "two":
          setChecked({ ...checked, two: !checked.two });
          break;
        case "three":
          setChecked({ ...checked, three: !checked.three });
          break;
        case "four":
          setChecked({ ...checked, four: !checked.four });
          break;
        case "five":
          setChecked({ ...checked, five: !checked.five });
          break;
        default:
          console.log("Defaults");
      }
    }
  }

  return (
    <StyledComponent>
      <div className="all">
        <p>All pages</p>
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={checked.one}
          onChange={() => handleChange("one")}
        />
      </div>
      <div className="pages">
        <div className="page">
          <p>Page 1</p>
          <input
            type="checkbox"
            checked={checked.two}
            className="custom-checkbox"
            onChange={() => handleChange("two")}
          />
        </div>
        <div className="page">
          <p>Page 2</p>
          <input
            type="checkbox"
            checked={checked.three}
            className="custom-checkbox"
            onChange={() => handleChange("three")}
          />
        </div>
        <div className="page">
          <p>Page 3</p>
          <input
            type="checkbox"
            checked={checked.four}
            className="custom-checkbox"
            onChange={() => handleChange("four")}
          />
        </div>
        <div className="page">
          <p>Page 4</p>
          <input
            type="checkbox"
            checked={checked.five}
            className="custom-checkbox"
            onChange={() => handleChange("five")}
          />
        </div>
      </div>
      <button>Done</button>
    </StyledComponent>
  );
}

const StyledComponent = styled.div`
  min-height: 37vh;
  min-width: 20vw;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  .all,
  .page {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .custom-checkbox {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #818183;
    border-radius: 4px;
    position: relative;
  }

  .custom-checkbox:checked {
    background-color: #007aff;
    border-color: #007aff;
  }

  .custom-checkbox:checked::before {
    content: "✔";
    position: absolute;

    color: #ffffff;
    font-size: 16px;
    left: 2px;
  }

  .pages {
    border-top: 2px solid #eeeeee;
    border-bottom: 2px solid #eeeeee;
  }

  button {
    background-color: #ffce22;
    width: 100%;
    margin: 20px 0px 10px 0px;
  }
`;
