import styled from "styled-components";

export const MainContainer = styled.div`
  background-image: url("/bodybackground.jpg");
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
  text-align: center;
  position: relative;
  padding: 0 30px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 411px) {
    padding: 0 20px;
  }
`;

export const SectionContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 12;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 5;
    padding-top: 30px;
  }
`;

export const SectionTitle = styled.div`
  font-size: 56px;
  font-weight: 200;
  display: flex;
  margin-top: 20px;
  color: white;
  text-align: left;
  margin-left: -30px;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 35px;
    margin: 0;
    padding: 10px 0;
  }
`;

export const SectionItem = styled.div`
  background: white;
  height: 'fit-content';
  overflow: hidden;
  padding: 20px 30px 0;
  display: flex;
  flex-direction: column;
  margin-left: -30px;
  margin-bottom: 60px;

  @media screen and (max-width: 1300px) {
    margin-right: -30px;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 15px 15px 0;
  }
`;

export const SectionItemTitle = styled.div`
  font-size: 24px;
  display: flex;
  color: silver;
`;

export const SectionItemSubtitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: darkgrey;
  font-weight: 400;
  text-align: left;
  margin: 12px 0;
`;

export const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const ImageCaption = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: darkgrey;
  font-weight: 400;
  grid-column-start: 1;
  grid-column-end: 9;
  margin-bottom: 5px;

  @media screen and (max-width: 1024px) {
    grid-column-end: 5;
  }
`;

export const ImageCredit = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: darkgrey;
  font-weight: 400;
  grid-column-start: 1;
  grid-column-end: 9;
  margin-top: 5px;

  @media screen and (max-width: 1024px) {
    grid-column-end: 5;
  }
`;

const sharedGalleryContainerStyles = `
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GalleryImageContainer = styled.div`
  ${sharedGalleryContainerStyles};
  img {
    width: 100%;
    object-fit: scale-down;
    max-height: 700px;
  }
`;

export const GalleryVideoContainer = styled.div`
  ${sharedGalleryContainerStyles};
  iframe {
    margin: 0 auto;
    display: block;
  }
`;

export const ListItemButton = styled.div<{ isActive?: boolean }>`
  font-size: 16px;
  line-height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: ${({ isActive }) => isActive ? '700' : '200'};
  color: ${({ isActive }) => isActive ? '#563d7c' : 'grey'};
  border-left:  ${({ isActive }) => isActive ? '2px solid #563d7c' : 'none'};
  margin-left:  ${({ isActive }) => isActive ? '0' : '2px'};
`;
