import React, { useState, useRef, useEffect } from "react";

import { GalleryItem, GalleryImageContainer, GalleryVideoContainer, SectionItem, SectionItemTitle, SectionItemSubtitle, ImageCredit } from "../../styles";
import { ISection } from "./interfaces";

const Section: React.FC<ISection> = ({ id, title, caption, images, aboutImage, videoUrl, credit }) => {
  const [videoWidth, setVideoWidth] = useState<number>(0);
  const [videoHeight, setVideoHeight] = useState<number>(0);
  const videoRef = useRef<null | HTMLElement>(null);

  const aspectRatio = 9 / 16;

  useEffect(() => {
    const setVideoDimensions = () => {
      const videoElem = document.getElementById(`gallery-video-container-${videoUrl}`);
      videoRef.current = videoElem;

      if (videoRef.current) {
        const { clientWidth } = videoRef.current;
        setVideoWidth(clientWidth);
        setVideoHeight(clientWidth * aspectRatio);
      }
    }

    if (videoUrl) {
      setVideoDimensions();
      window.addEventListener('resize', setVideoDimensions);
      return () => window.removeEventListener('resize', setVideoDimensions)
    }
  }, [videoUrl, aspectRatio])

  return (
    <SectionItem id={id}>
      <SectionItemTitle>{title}</SectionItemTitle>
      <SectionItemSubtitle>
        {caption}
      </SectionItemSubtitle>
      {images?.map(({ id, url }) => (
        <GalleryItem key={id}>
          <GalleryImageContainer>
            <img src={url} alt={url} />
          </GalleryImageContainer>
          <ImageCredit>
            {credit}
          </ImageCredit>
        </GalleryItem>
      ))}
      {aboutImage && (
        <GalleryItem key={id}>
          <GalleryImageContainer>
            <img src={aboutImage.url} alt={aboutImage.url} />
          </GalleryImageContainer>
        </GalleryItem>
      )}
      {videoUrl && (
        <GalleryItem>
          <GalleryVideoContainer id={`gallery-video-container-${videoUrl}`}>
            <iframe src={videoUrl}
              title={videoUrl}
              width={videoWidth}
              height={videoHeight}
              frameBorder="0"
              allowFullScreen
            />
          </GalleryVideoContainer>
        </GalleryItem>
      )}
    </SectionItem>
  );
};

export default Section;