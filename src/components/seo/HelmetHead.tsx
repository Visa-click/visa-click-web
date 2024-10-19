import { type FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  descr: string;
  img?: string;
}

export const HelmetHead: FC<Props> = (props) => {
  const { title, descr } = props;
  const path = window.location.pathname + window.location.search;
  const url = `https://www.ketaketa.ru${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={`${url}`} />
      <meta name="description" content={descr} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={descr} />
      <meta property="og:url" content={`${url}`} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={descr} />
    </Helmet>
  );
};
