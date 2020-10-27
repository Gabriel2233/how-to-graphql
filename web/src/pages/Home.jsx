import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { LinkList } from "../components/LinkList";
import { Search } from '../components/Search'

import { useForm } from 'react-hook-form'

const Home = () => {

  return (
    <Layout>
      <Header />
      <LinkList />
      <Search  />
    </Layout>
  );
};

export default Home;
