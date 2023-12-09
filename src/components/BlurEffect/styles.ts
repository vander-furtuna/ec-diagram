import styled, { css } from 'styled-components';

interface ICircleProps {
  color: 'yellow' | 'blue' | 'green';
  position: 'right' | 'center' | 'left';
}

export const BlurEffectContainer = styled.div`
    position: absolute;

    width: 100%;
    overflow: hidden;
`;

export const Circle = styled.div<ICircleProps>`
    position: absolute;

    width: calc(100vw * 0.5);
    height: calc(100vw * 0.5);
    border-radius: 50%;
    z-index: -1;

    top: -100%;
    filter: blur(calc(100vw * 0.1));
    opacity: 0.6;

    ${({ position }) =>
    position === 'right' &&
    css`
            right: 0;
            top: 0;
            transform: translate(40%, -90%);
        `}
    ${({ position }) =>
    position === 'center' &&
    css`
            top: 0;
            left: 50%;
            transform: translate(-50%, -90%);
        `}
    ${({ position }) =>
    position === 'left' &&
    css`
            left: 0;
            top: 0;
            transform: translate(-40%, -90%);
        `}

    background-color: ${({ theme, color }) =>
    color === 'yellow'
      ? theme.automation300
      : color === 'blue'
        ? theme.computing300
        : theme.telecomunications300};
`;
