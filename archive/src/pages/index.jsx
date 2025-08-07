import {useRouter} from 'next/router';
import {ClickableTile} from 'carbon-components-react';
import {ArrowRight32} from '@carbon/icons-react';

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <ClickableTile
        handleClick={() => router.push('/page1')}
        style={{width: '20em', height: '10em', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}
      >
        <span style={{fontSize: '150%'}}>
          Go to Page 1 <ArrowRight32 style={{verticalAlign: 'middle'}} />
        </span>
      </ClickableTile>
    </div>
  );
}
