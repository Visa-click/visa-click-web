import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { RootState } from '@redux/store';
import { $phoneWidth } from '@styled/helpers';
import { Notification } from './Notification';

export const NotificationsList: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notifications);

  return (
    <Wrapper>
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 7.5rem;
  right: 4.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 100;
  @media screen and (max-width: ${$phoneWidth}) {
    top: 0;
    right: auto;
    left: 0;
    padding: 0.25rem 2.75rem 0.25rem 1rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 18.97%, #000 100%);
    width: 100%;
  }
`;
