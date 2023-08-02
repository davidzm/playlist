import { styled } from "styled-components";

export const StyledCollapseble = styled.div`
  .collapsible {
    border: 1px solid #ccc;
    margin: 10px;
    font-size: 10px;
  }

  .collapsible-header {
    padding: 10px;
    cursor: pointer;
    background-color: #f2f2f2;
    width: 70vw;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #a0e7e5;
  }

  .collapsible-content {
    padding: 10px;
    text-align: left;
    background-color: #d1fadd;
  }
`;
