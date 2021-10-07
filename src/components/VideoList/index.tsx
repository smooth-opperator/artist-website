import React from "react";

import { useVideoListQuery } from "../../generated/graphql";
import { SectionContainer } from "../../styles"
import { SectionTitle } from "../../styles";
import Video from "../Video";
import LoadingSpinner from "../LoadingSpinner";

const VideoList: React.FC = () => {
  const { data, error, loading } = useVideoListQuery();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return null;
  }

  const { videos } = data;

  return (
    <SectionContainer id="videos">
      <SectionTitle>VIDEOS</SectionTitle>
      {videos.map(({ id }) => (
        <Video id={id} key={id} />
      ))}
    </SectionContainer>
  );
};

export default VideoList;