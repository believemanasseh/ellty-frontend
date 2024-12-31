import { useState } from "react";
import { message } from "antd";
import styled from "styled-components";
import "./App.css";

export default function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const [checked, setChecked] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    all: false,
  });

  function handleChange(name: string) {
    if (name === "all") {
      if (checked.one) {
        setChecked({ ...checked, all: !checked.all });
      } else {
        setChecked({
          one: true,
          two: true,
          three: true,
          four: true,
          all: true,
        });
      }
    } else {
      switch (name) {
        case "one":
          setChecked({ ...checked, one: !checked.one });
          break;
        case "two":
          setChecked({ ...checked, two: !checked.two });
          break;
        case "three":
          setChecked({ ...checked, three: !checked.three });
          break;
        case "four":
          setChecked({ ...checked, four: !checked.four });
          break;
        default:
          console.log("Defaults");
      }
    }
  }

  function handleClick() {
    const pages = [];
    const previous = [];

    for (const [key, value] of Object.entries(checked)) {
      previous.push([key, value]);
      if (value) {
        pages.push(previous[previous.length - 1][0]);
      }
    }

    if (
      (pages.includes("all") && pages.length === 5) ||
      (!pages.includes("all") && pages.length === 4)
    ) {
      messageApi.open({
        type: "success",
        content: `You chose all the pages!`,
      });
    } else {
      messageApi.open({
        type: "success",
        content: `You chose the following pages: ${pages.join(", ")}`,
      });
    }
  }

  return (
    <>
      {contextHolder}
      <StyledComponent>
        <div className="all">
          <p>All pages</p>
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={checked.all}
            onChange={() => handleChange("all")}
          />
        </div>
        <div className="pages">
          <div className="page">
            <p>Page 1</p>
            <input
              type="checkbox"
              checked={checked.one}
              className="custom-checkbox"
              onChange={() => handleChange("one")}
            />
          </div>
          <div className="page">
            <p>Page 2</p>
            <input
              type="checkbox"
              checked={checked.two}
              className="custom-checkbox"
              onChange={() => handleChange("two")}
            />
          </div>
          <div className="page">
            <p>Page 3</p>
            <input
              type="checkbox"
              checked={checked.three}
              className="custom-checkbox"
              onChange={() => handleChange("three")}
            />
          </div>
          <div className="page">
            <p>Page 4</p>
            <input
              type="checkbox"
              checked={checked.four}
              className="custom-checkbox"
              onChange={() => handleChange("four")}
            />
          </div>
        </div>
        <button onClick={handleClick}>Done</button>
      </StyledComponent>
    </>
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
