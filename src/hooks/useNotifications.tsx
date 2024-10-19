import { isNull } from '@bunt/is';
import { useAppDispatch } from '@redux/store';
import { TNotificationType } from '@interfaces/notification';
import { addNotification, removeNotification } from '../redux/slice/notificationsSlice';

const useNotifications = () => {
  const dispatch = useAppDispatch();

  const notify = (message: string | null = 'omething went wrong', type: TNotificationType) => {
    if (isNull(message)) return;
    const id = new Date().getTime().toString();
    dispatch(addNotification({ id, message, type }));

    return id;
  };

  const dismiss = (id: string) => {
    dispatch(removeNotification(id));
  };

  return { notify, dismiss };
};

export default useNotifications;
