import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/effect-cube/effect-cube.scss';
import 'swiper/swiper.scss';
import styled from 'styled-components';
// import styled from 'styled-components';

console.log(EffectCube);
const SwiperWrapper = styled.div`
  width: 30vw;
  height: 30vh;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
`;
const cube = {
  minWidth: '30vw',
  minHeight: '30vh',
  color: 'yellow',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  border: '2px solid black',
};
const blueCube = {
  ...cube,
  backgroundColor: 'blue',
};
const redCube = {
  ...cube,
  backgroundColor: 'red',
};
const greenCube = {
  ...cube,
  backgroundColor: 'green',
};
const purpleCube = {
  ...cube,
  backgroundColor: 'purple',
};
SwiperCore.use([EffectCube]);
const ProjectCube = (props) => {
  return (
    <SwiperWrapper>
      <Swiper effect='cube'>
        {[blueCube, redCube, greenCube, purpleCube].map((cube) => {
          console.log(cube);
          return (
            <SwiperSlide style={cube}>
              <div>
                <div>HIYA</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperWrapper>
  );
};

ProjectCube.propTypes = {};

export default ProjectCube;
