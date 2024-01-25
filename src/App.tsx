import ConfigProvider from "antd/lib/config-provider";
import Typography from "antd/lib/typography";
import "./App.css";

function App() {
  return (
    <ConfigProvider>
      <Typography.Title level={1}>Velory Assignment</Typography.Title>
    </ConfigProvider>
  );
}

export default App;
