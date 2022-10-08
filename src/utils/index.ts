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
          userId: userKey,
        },
      },
    ],
    {
      gaOptions: {
        userId: userKey,
      },
    }
  );
  ReactGA.set({
    userId: userKey,
    user_id: userKey,
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const recordEvent = ({
  category,
  action,
  label,
}: // eventMetadata,
{
  category: string;
  action: string;
  label: string;
  // eventMetadata?: string;
}) => {
  ReactGA.event({
    category,
    action,
    label,
    // dimension1: eventMetadata,
  });
};
