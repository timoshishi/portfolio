import { nanoid } from 'nanoid';
import ReactGA from 'react-ga';

export const getUserKey = () => {
  const userKey = localStorage.getItem('userKey');
  console.log({ userKey });
  if (userKey) {
    return userKey;
  } else {
    const newUserKey = nanoid();
    localStorage.setItem('userKey', newUserKey);
    return newUserKey;
  }
};

export const initGA = () => {
  ReactGA.initialize('UA-198621727-1', {
    debug: process.env.NODE_ENV === 'development' ? true : false,
    titleCase: false,
    gaOptions: {
      userId: getUserKey(),
    },
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const recordEvent = ({
  category,
  action,
  label,
  eventMetadata,
}: {
  category: string;
  action: string;
  label: string;
  eventMetadata?: string;
}) => {
  ReactGA.event({
    category,
    action,
    label,
    dimension1: eventMetadata,
  });
};
