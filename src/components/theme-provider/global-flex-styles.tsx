import { createGlobalStyle } from "styled-components";

const GlobalFlexStyles = createGlobalStyle`
  .n-flex { display: flex; }
  .n-flex-row { flex-direction: row; }
  .n-flex-column { flex-direction: column; }
  .n-flex-row-reverse { flex-direction: row-reverse; }
  .n-flex-wrap { flex-wrap: wrap; }
  .n-gap-1 { gap: 2px; }
  .n-gap-2 { gap: 4px; }
  .n-gap-3 { gap: 6px; }
  .n-gap-4 { gap: 8px; }
  .n-gap-5 { gap: 10px; }
  .n-gap-6 { gap: 12px; }
  .n-gap-7 { gap: 14px; }
  .n-gap-8 { gap: 16px; }
  .n-gap-9 { gap: 18px; }
  .n-gap-10 { gap: 20px; }
  .n-align-items-center { align-items: center; }
  .n-align-items-start { align-items: flex-start; }
  .n-align-items-end { align-items: flex-end; }
  .n-align-items-baseline { align-items: baseline; }
  .n-justify-content-center { justify-content: center; }
  .n-justify-content-start { justify-content: flex-start; }
  .n-justify-content-end { justify-content: flex-end; }
  .n-justify-content-between { justify-content: space-between; }
  .n-justify-content-around { justify-content: space-around; }
  .n-justify-content-evenly { justify-content: space-evenly; }
  .n-flex-1 { flex: 1; }
  .n-flex-2 { flex: 2; }
  .n-flex-3 { flex: 3; }
  .n-flex-4 { flex: 4; }
  .n-flex-5 { flex: 5; }
  .n-flex-6 { flex: 6; }
  .n-flex-7 { flex: 7; }
  .n-flex-8 { flex: 8; }
  .n-flex-9 { flex: 9; }
  .n-flex-10 { flex: 10; }
`;

export default GlobalFlexStyles;
