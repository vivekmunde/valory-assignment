import ThemeProvider from "./components/theme-provider";
import Container from "./components/layout/page/container";
import Header from "./components/layout/page/header";
import Title from "./components/layout/page/title";
import Content from "./components/layout/page/content";

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Header>
          <Title>Velory Assignment</Title>
        </Header>
        <Content>
          Content
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
