import styled from 'styled-components'
import {Pill} from '../../styles'

export const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid #000;

  height: calc(100vh - 79px);
  width: 660px;

  position: fixed;
  z-index: 2;
  right: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-660px')};
  bottom: 0;
  transition: 300ms;

  box-sizing: border-box;
  padding: 40px 120px 60px 40px;

  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vw;
    height: calc(100vh - 72px);
    bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100vh')};
    right: unset;
    z-index: 3;
  }
`

export const CloseWrapper = styled(Pill)`
  display: ${({$state}) => ($state === 'entered' ? 'flex' : 'none')};
  cursor: pointer;
  top: 120px;
  right: 40px;
  position: fixed;
  z-index: 4;

  @media (max-width: 800px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`
export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  opacity: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 1 : 0)};
  pointer-events: ${({$state}) => ($state === 'exited' ? 'none' : 'auto')};
  transition: 300ms;
`
