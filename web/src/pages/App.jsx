import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

const { LinkList } = require("../components/LinkList");

function App() {
  return (
    <Layout>
      <Header />
      <LinkList />
    </Layout>
  );
}

export default App;
