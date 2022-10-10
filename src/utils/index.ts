import ReactGA from 'react-ga4';
import { v4 } from 'uuid';

export const getUserKey = () => {
  const userKey = localStorage.getItem('userKey');
  if (userKey) {
    return userKey;
  } else {
    const newUserKey = v4();
    localStorage.setItem('userKey', newUserKey);
    return newUserKey;
  }
};

export const initGA = () => {
  const userKey = getUserKey();
  ReactGA.initialize(
    [
      { trackingId: 'UA-198621727-1', gaOptions: { userId: userKey, user_id: userKey } },

      {
        gtagOptions: {
          user_id: userKey,
        },
        trackingId: 'G-LR19JX3P72',
        gaOptions: {
          user_id: userKey,
        },
      },
      {
        gtagOptions: {
          user_id: userKey,
        },
        trackingId: 'G-CER5XHN12C',
        gaOptions: {
          user_id: userKey,
        },
      },
    ],
    {
      gaOptions: {
        user_id: userKey,
        legacyDimensionMetrics: true,
      },
    }
  );

  ReactGA.send('pageview');
};

export const recordEvent = ({
  category,
  action,
  label,
}: // eventMetadata,
{
  category: string;
  action: string;
  label?: string;
}) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
