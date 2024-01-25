import Typography from "antd/lib/typography";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Typography.Title level={1} style={{ margin: 0 }}>{children}</Typography.Title>;
};

export default Title;
