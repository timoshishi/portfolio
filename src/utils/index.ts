import axios from 'axios';
import ReactGA from 'react-ga4';
import { v4 } from 'uuid';

export const LAMBDA_API = 'https://mb678rsg83.execute-api.us-east-1.amazonaws.com/blocked-user';

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

export const recordEvent = ({ category, action, label }: { category: string; action: string; label?: string }) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export const adBlockTest = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const test = document.createElement('div');
    test.innerHTML = '&nbsp;';
    test.className = 'ad-medium';
    test.id = 'ad-medium';
    document.body.appendChild(test);

    window.setTimeout(() => {
      if (test.offsetHeight === 0) {
        axios(LAMBDA_API).catch((_) => {});
      } else {
        axios(LAMBDA_API).catch((_) => {});
        recordEvent({
          category: 'adblock',
          action: 'page_visit',
          label: 'no_adblock_detected',
        });
      }
      test.remove();
    }, 400);
  });
};
