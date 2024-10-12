import { getTranslations } from 'next-intl/server';

import DummyClientComponent from '#bazaar/components/main/DummyClientComponent';

const RootPage = async () => (
  <main>
    <h1 className="text-purple-400">
      Server
    </h1>
    <DummyClientComponent />
  </main>
);

export default RootPage;
