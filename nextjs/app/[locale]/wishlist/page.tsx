import { getTranslations } from 'next-intl/server';

const TrainingsPage = async () => {
  const t = await getTranslations();

  return (
    <main>
      <h1 className="text-orange-500">
        { `${t('navigation.wishlist')}` }
      </h1>
    </main>
  );
};

export default TrainingsPage;
