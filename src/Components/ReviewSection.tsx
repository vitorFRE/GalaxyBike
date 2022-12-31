import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { HeaderDescription } from './Helper/HeaderDescription';
import { ReviewSlide } from './Helper/ReviewSlide';
import { NextArrow, PrevArrow } from './Helper/PrevNext';
import Infos from '../Components/Helper/Infos.json';
import { device } from './Styles/BreakPoints';

export const ReviewSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <HeaderDescription
        title="O que os nossos alunos estão dizendo"
        text="Confira avaliações de nossos alunos sobre nossas aulas de ciclismo para iniciantes."
      />

      <Slider {...settings}>
        {Infos.avaliações.map((slide) => (
          <ReviewSlide
            key={slide.id}
            ReviewText={slide.avaliação}
            Person={slide.nome}
          />
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => theme.container}

  margin-bottom:80px;

  .slick-slider {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }
  .prevArrow,
  .nextArrow {
    position: relative;
    z-index: 99999;
    top: -10px;
    fill: ${({ theme }) => theme.colors.Secondary};
    background-color: ${({ theme }) => theme.colors.Primary};
    padding: 12px;
    border-radius: 50%;

    @media ${device.sm} {
      padding: 0px;
      background-color: transparent;
    }
  }

  .prevArrow:hover,
  .nextArrow:hover {
    cursor: pointer;
  }

  @media ${device.sm} {
    .prevArrow,
    .nextArrow {
      padding: 4px;
      border-radius: 50%;
    }
    .prevArrow {
      margin-right: 6px;
    }
    .nextArrow {
      margin-left: 6px;
    }
  }
`;
