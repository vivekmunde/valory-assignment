import { createGlobalStyle } from "styled-components";

const GlobalFlexStyles = createGlobalStyle`
  .v-flex { display: flex; }
  .v-flex-row { flex-direction: row; }
  .v-flex-column { flex-direction: column; }
  .v-flex-row-reverse { flex-direction: row-reverse; }
  .v-flex-wrap { flex-wrap: wrap; }
  .v-gap-1 { gap: 2px; }
  .v-gap-2 { gap: 4px; }
  .v-gap-3 { gap: 6px; }
  .v-gap-4 { gap: 8px; }
  .v-gap-5 { gap: 10px; }
  .v-gap-6 { gap: 12px; }
  .v-gap-7 { gap: 14px; }
  .v-gap-8 { gap: 16px; }
  .v-gap-9 { gap: 18px; }
  .v-gap-10 { gap: 20px; }
  .v-align-items-center { align-items: center; }
  .v-align-items-start { align-items: flex-start; }
  .v-align-items-end { align-items: flex-end; }
  .v-align-items-baseline { align-items: baseline; }
  .v-justify-content-center { justify-content: center; }
  .v-justify-content-start { justify-content: flex-start; }
  .v-justify-content-end { justify-content: flex-end; }
  .v-justify-content-between { justify-content: space-between; }
  .v-justify-content-around { justify-content: space-around; }
  .v-justify-content-evenly { justify-content: space-evenly; }
  .v-flex-1 { flex: 1; }
  .v-flex-2 { flex: 2; }
  .v-flex-3 { flex: 3; }
  .v-flex-4 { flex: 4; }
  .v-flex-5 { flex: 5; }
  .v-flex-6 { flex: 6; }
  .v-flex-7 { flex: 7; }
  .v-flex-8 { flex: 8; }
  .v-flex-9 { flex: 9; }
  .v-flex-10 { flex: 10; }
`;

export default GlobalFlexStyles;
