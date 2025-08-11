import {Metadata} from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Carbon NextJs starter'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
