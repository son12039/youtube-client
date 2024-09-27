import { FaMagnifyingGlass, FaBars } from "react-icons/fa6";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;

  .header-start {
    display: flex;

    svg {
      font-size: 20px;
      margin: 20px;
    }
    a {
      padding: 20px 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .header-center {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    input {
      display: none;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 20px;
    }
  }
  .header-end {
    display: flex;
    margin-right: 20px;
    button {
      background: none;
      border: none;
      font-size: 20px;
    }
  }
  @media screen and (min-width: 665px) {
    .header-center {
      justify-content: center;

      input {
        display: block;
        padding: 10px 20px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border: 1px solid #ddd;
        width: 30%;
        max-width: 500px;
      }
      button {
        border: 1px solid #ddd;
        border-left: none;
        padding: 6px 12px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
    }
  }
  @media screen and (min-width: 1000px) {
    .header-center input {
      width: 90%;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-start">
        <FaBars />
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <div className="header-center">
        <input type="text" placeholder="검색" />
        <button type="button">
          <FaMagnifyingGlass />
        </button>
      </div>
      <div className="header-end">
        <button type="button">로그인</button>
      </div>
    </StyledHeader>
  );
};
export default Header;
