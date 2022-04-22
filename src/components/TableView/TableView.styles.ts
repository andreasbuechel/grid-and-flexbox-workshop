import styled from "styled-components";

export const TableViewRoot = styled.div`
  .cell,
  .headerCell {
    background-color: aliceblue;
    border: 2px solid slategray;
    padding: 8px;
    font-weight: 100;
  }
  
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }

  .headerCell {
    background-color: #ccc;
    font-weight: bold;
  }
`;

export const NoWrapCell = styled.td``;
