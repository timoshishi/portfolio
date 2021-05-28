import { keyframes } from 'styled-components';

const fadeIn = keyframes`
 0% {opacity: 0}
 100% {opacity: 1}
`;

const growLine = keyframes`
0% {
  transform: translateY(0px);
}
100% {
  transform: translateY(-200px);
}
`;

const growBush = keyframes`
0% {
  transform: scale(0.25)
}
25% {
  transform: scale(0.25)
}
100% {
  transform: scale(1)
}
`;

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); opacity: 1 }
  10% { transform: translate(-1px, -2px) rotate(-1deg); opacity: 1}
  20% { transform: translate(-1px, 0px) rotate(1deg); opacity: 1}
  30% { transform: translate(3px, 2px) rotate(0deg); opacity: 1}
  40% { transform: translate(1px, -1px) rotate(1deg); opacity: 1}
  50% { transform: translate(-1px, 2px) rotate(-1deg); opacity: 1}
  60% { transform: translate(-3px, 1px) rotate(0deg); opacity: 1}
  70% { transform: translate(3px, 1px) rotate(-1deg); opacity: 1}
  80% { transform: translate(-1px, -1px) rotate(1deg); opacity: 0.2}
  90% { transform: translate(1px, 2px) rotate(0deg); opacity: 0.1}
  100% { transform: translate(1px, -2px) rotate(-1deg); opacity: 0}
`;
const growLeft = keyframes`
  from {
    transform:  scaleX(0);
  }
  to {
    transform:  scaleX(1);
  }
`;

const growName = keyframes`
from {
  transform:  translateY(100%) scale(0.25);
}
to {
  transform:  translateY(0%) scale(1);
}

`;
export { fadeIn, growLine, growBush, shake, growLeft, growName };
