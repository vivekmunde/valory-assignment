import Container from "./components/layout/page/container";
import Content from "./components/layout/page/content";
import Header from "./components/layout/page/header";
import Title from "./components/layout/page/title";
import MetaMaskProvider from "./components/meta-mask-provider";
import * as MetaMaskProviderViews from "./components/meta-mask-provider-views";
import ThemeProvider from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Header>
          <Title>Velory Assignment</Title>
        </Header>
        <Content>
          <MetaMaskProvider>
            <MetaMaskProvider.Checking>
              <MetaMaskProviderViews.Checking />
            </MetaMaskProvider.Checking>
            <MetaMaskProvider.Error>
              {(error) => <MetaMaskProviderViews.Error error={error} />}
            </MetaMaskProvider.Error>
            <MetaMaskProvider.Exists>
              <div>Exists</div>
            </MetaMaskProvider.Exists>
          </MetaMaskProvider>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
