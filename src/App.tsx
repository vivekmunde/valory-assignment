import Typography from "antd/lib/typography";
import ThemeProvider from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <Typography.Title level={1}>Velory Assignment</Typography.Title>
    </ThemeProvider>
  );
}

export default App;
