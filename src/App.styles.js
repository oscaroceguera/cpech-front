import Styled from "styled-components";

export const TopBar = Styled.div`
  background: white;
  .container {
    width: 70%;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 90%;
      padding-left: 1.5em;
    }
    img {
      width: 150px;
    }
  }
`;

export const Form = Styled.div`
  width: 70%;
  margin: 0 auto;
  .header {
    text-align: center;
    color: white;
    width: 459px;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 400px;
    }
    .title {
      font-weight: 300;
      font-size: 4.3em;
      margin: 0;
    }
    .subTitle {
      font-weight: 300;
      font-size: 1em;
      @media (max-width: 768px) {
        font-size: 1.5em;
      }
    }
  }
  .fields {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .5em 0;
    @media (max-width: 768px) {
      display: block;
      width: 90%;
      margin: 0 auto;
    }
    div {
      width: 49%;
      margin: .5em 0;
      @media (max-width: 768px) {
        width: 99%;
      }
      label {
        color: white;
        span {
          color: red;
        }
      }
      input {
        width: 96%;
        margin: .5em 0;
        padding: 1em;
        border: 0;
        border-radius: 3px;
        @media (max-width: 768px) {
          padding: 1.5em;
          width: 94%;
        }
      }
    }
  }
  .btn-container {
    width: 100%;
    margin-top: 1em;
    @media (max-width: 768px) {
      width: 91%;
      margin: 0 auto;
    }
   
    button {
      width: 100%;
      background: #1abc9c;
      color: white;
      border: 0;
      padding: .6em;
      border-radius: 4px;
      font-size: .9em;
      transition: .3s;
      &:hover {
        opacity: .8;
      }
      @media (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;

export const Alerts = Styled.div`
  color: white;
  text-align: center;
  padding: 1em;
  p {
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: yellow;
  }
`;