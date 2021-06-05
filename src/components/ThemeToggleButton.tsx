import styled from 'styled-components';
import Switch from 'react-switch';
import { NightsStay, Brightness7 } from '@material-ui/icons';
import { IStyled } from '../ts/interfaces/interfaces';
import { Device } from '../ts/enums/mediaBreakpoints';

const S: IStyled = {
  ToggleDiv: styled.div`
    position: absolute;
    top: 1rem;
    right: 3rem;
    width: 5%;
    height: 5%;
    z-index: 9999;
    @media ${Device.laptop} {
      top: 2rem;
      right: 1rem;
      width: 5%;
      height: 5%;
    }
  `,
};

type IProps = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeToggleButton = ({ toggleTheme, isDarkTheme }: IProps) => {
  return (
    <S.ToggleDiv>
      <label htmlFor='small-radius-switch'>
        <Switch
          checked={isDarkTheme}
          onChange={toggleTheme}
          handleDiameter={28}
          onColor='#6B8096'
          onHandleColor='#1a91da'
          offColor='#6B8096'
          offHandleColor='#15202b'
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
          activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
          height={20}
          width={48}
          className='react-switch'
          id='material-switch'
          uncheckedHandleIcon={
            <NightsStay
              style={{
                color: 'yellow',
                marginTop: '3px',
                marginLeft: '3px',
                height: '1.4rem',
              }}
            />
          }
          checkedHandleIcon={
            <Brightness7
              style={{
                color: '#ffc438',
                marginTop: '2.5px',
                marginLeft: '3px',
                height: '1.5rem',
              }}
            />
          }
          aria-label='toggle light dark theme'
        />
      </label>
    </S.ToggleDiv>
  );
};

export default ThemeToggleButton;
