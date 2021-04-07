import React from 'react';
// import PropTypes from 'prop-types';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/effect-cube/effect-cube.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/swiper.scss';
import styled from 'styled-components';
// import styled from 'styled-components';

const SwiperWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  position: absolute;
  left: 10%;
  top: 50%;
  margin-left: -150px;
  margin-right: -150px;
  margin-top: -150px;
`;
const cube = {
  width: '30vw',
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

SwiperCore.use([EffectCoverflow]);

const ProjectCube = (props) => {
  return (
    <SwiperWrapper>
      <Swiper effect='coverflow' grabCursor>
        {[
          blueCube,
          redCube,
          greenCube,
          purpleCube,
          blueCube,
          redCube,
          greenCube,
          purpleCube,
        ].map((cube, i) => {
          console.log(cube);
          return (
            <SwiperSlide key={i} style={cube}>
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
