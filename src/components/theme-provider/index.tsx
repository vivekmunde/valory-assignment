import React from "react";
import ConfigProvider from "antd/lib/config-provider";
import GlobalRootStyles from "./global-root-styles";
import GlobalFlexStyles from "./global-flex-styles";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider>
      <GlobalRootStyles />
      <GlobalFlexStyles />
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
