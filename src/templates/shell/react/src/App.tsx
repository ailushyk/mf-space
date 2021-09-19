import React, { FC, Suspense } from 'react';
import { Button } from 'ui/Button';

export const App: FC = () => (
  <div>
    <h1>My React and TypeScript <b>Shell</b> App!</h1>

    <Suspense fallback={'Loading Button'}>
      <Button onClick={() => console.log('test')}>cool</Button>
    </Suspense>
  </div>
);
