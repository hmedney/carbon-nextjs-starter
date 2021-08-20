import {Header, HeaderName, HeaderNavigation, HeaderMenuItem, Content} from 'carbon-components-react/lib/components/UIShell';
import {useRouter} from 'next/router';
import Head from 'next/head';
import 'carbon-components/css/carbon-components.min.css';

function Layout({children}) {
  const router = useRouter();

  return (
    <div className="container">
      <Header aria-label="Carbon NextJS Starter">
        <HeaderName href="#" prefix="NextJS" onClick={() => router.push('/')}>
          Starter
        </HeaderName>
        <HeaderNavigation aria-label="Carbon NextJS Starter Nav">
          <HeaderMenuItem onClick={() => router.push('/page1')}>Page</HeaderMenuItem>
        </HeaderNavigation>
      </Header>
      <Content>{children}</Content>
    </div>
  );
}

function App({Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <title>GEDS Query</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
