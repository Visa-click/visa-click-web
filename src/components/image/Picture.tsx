import { FC } from 'react';

interface Props {
  webp?: string;
  png?: string;
  alt?: string;
  def?: boolean;
}

export const Picture: FC<Props> = (props) => {
  const { webp, png, alt, def = false } = props;

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={png} type="image/png" />
      <img loading={def ? 'eager' : 'lazy'} src={webp} alt={alt} />
    </picture>
  );
};
