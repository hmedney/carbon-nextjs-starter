import {Metadata} from 'next';
import './globals.scss';
import Layout from './carbon-layout';

export const metadata: Metadata = {
  title: 'Carbon NextJs Starter'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
}
