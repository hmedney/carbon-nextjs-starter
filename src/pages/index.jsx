import {useRouter} from 'next/router';
import {ClickableTile} from 'carbon-components-react';

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <ClickableTile
        light
        handleClick={() => router.push('/page1')}
        style={{width: '20em', height: '10em', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}
      >
        <span style={{fontSize: '150%'}}>Page 1</span>
      </ClickableTile>
    </div>
  );
}
