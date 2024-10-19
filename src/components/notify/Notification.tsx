import { FC, useEffect } from 'react';
import styled from '@emotion/styled';
import { removeNotification } from '@redux/slice/notificationsSlice';
import { useAppDispatch } from '@redux/store';

import { $errorColor, $infoColor, $phoneWidth, $successColor, fadeIn } from '@styled/helpers';

import { TNotificationType } from '@interfaces/notification';
import { css } from '@emotion/react';
import { IconClose } from '../icons';

type NotificationProps = {
  id: string;
  message: string;
  type: TNotificationType;
};

export const Notification: FC<NotificationProps> = (props) => {
  const { id, message, type } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeNotification(id));
    }, 500000);

    return () => clearTimeout(timer);
  }, [id, dispatch]);

  return (
    <Wrapper $type={type}>
      <span>{message}</span>
      <Close onClick={() => dispatch(removeNotification(id))}>
        <IconClose />
      </Close>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $type: TNotificationType }>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  padding: 1rem 1.5rem;
  max-width: 38.875rem;
  border-radius: 1rem;
  animation: ${fadeIn} 0.5s;

  ${({ $type }) => {
    switch ($type) {
      case 'success':
        return css`
          background: rgba(169, 255, 129, 0.2);
          span {
            color: ${$successColor};
          }
          svg {
            fill: ${$successColor};
            stroke: ${$successColor};
          }
        `;
      case 'error':
        return css`
          background: rgba(255, 83, 83, 0.2);
          span {
            color: ${$errorColor};
          }
          svg {
            fill: ${$errorColor};
            stroke: ${$errorColor};
          }
        `;
      case 'info':
        return css`
          background: rgba(255, 197, 83, 0.2);
          span {
            color: ${$infoColor};
          }
          svg {
            fill: ${$infoColor};
            stroke: ${$infoColor};
          }
        `;
    }
  }}
  span {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  @media screen and (max-width: ${$phoneWidth}) {
    width: 100%;
  }
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.5;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
`;
