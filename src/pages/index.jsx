import * as React from 'react';
import '../i18n';

import { useTranslation } from 'react-i18next';

import MainLayout from '../layouts/main';

const IndexPage = () => {
  const { t } = useTranslation();

  return <MainLayout>{t`title`}</MainLayout>;
};

export default IndexPage;
