import { Typography } from '@/components/common/Typography/Typography';
import Layout from '../../components/layout/Layout';
import { Section } from '@/components/layout/Section/Section';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Section>
        <Typography variant={'h1'}>Heading h1</Typography>
      </Section>
    </Layout>
  );
};

export default Home;
