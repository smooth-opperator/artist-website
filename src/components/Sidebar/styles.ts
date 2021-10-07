import styled from "styled-components";
import { ListItemButton } from "../../styles";

export const MobileHeader = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    position: sticky;
    top: 0;
    display: flex;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: 5;
    z-index: 1;
    height: 30px;
    flex-shrink: 0;
  }
`;

const sharedIconButtonStyles = `
  display: flex;
  background: none;
  border: none;
  height: 30px;
  width: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  svg {
    flex-shrink: 0;
  }
`;

export const MobileDrawerOpen = styled.button`
  @media screen and (max-width: 1024px) {
    ${sharedIconButtonStyles};
    margin-left: -30px;
  }

  @media screen and (max-width: 411px) {
    margin-left: -25px;
  }
`;

export const MobileDrawerClose = styled.button`
  display: none;

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    ${sharedIconButtonStyles};
  }
`;

export const StickyContainer = styled.div<{ isExpanded?: boolean }>`
  position: sticky;
  top: 0;
  height: 100vh;
  opacity: 0.8;
  margin-left: -30px;
  margin-right: 0;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;

  @media screen and (max-width: 1200px) {
    grid-column-end: 3;
    margin-right: -30px;
  }

  @media screen and (max-width: 1024px) {
    transition: transform 1s ease-out;
    grid-row-start: 1;
    z-index: 2;
    transform: ${({ isExpanded }) => isExpanded ? 'none' : 'translateX(-512px)'};
    box-shadow: ${({ isExpanded }) => isExpanded ? '0px 5px 16px -4px #B0B0B0' : 'none'};
    opacity: 1;
    margin-right: 0;
  }

  @media screen and (max-width: 411px) {
    grid-column-end: 4;
  }
`;

export const FixedSidebar = styled.div`
  position: fixed;
  top: 30px;
  left: 30px;
  height: 100vh;

  @media screen and (max-width: 1300px) {
    left: 20px;
  }
`;

export const Section = styled.div<{ isExpanded?: boolean }>`
  height: ${({ isExpanded }) => isExpanded ? 'fit-content' : '25px'};
  overflow: hidden;
  text-align: left;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: #563d7c;
  font-size: 16px;
  text-decoration: uppercase;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  white-space: pre;
`;

export const Subtitle = styled(ListItemButton)`
  font-size: 16px;
  text-transform: capitalize;
  line-height: 24px;
  padding-left: 8px;
  margin-top: 5px;
`;

export const ListItem = styled(ListItemButton)`
  padding-left: 16px;
`;
