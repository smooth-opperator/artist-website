import React from "react";
import dayjs from "dayjs";

import { useVideosQuery } from "../../generated/graphql";
import GallerySection from "../GallerySection";
import LoadingSpinner from "../LoadingSpinner";

const Video: React.FC<{ id: string }> = ({ id }) => {
  const { data, error, loading } = useVideosQuery({
    variables: {
      id: id
    }
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !data || !data.video) {
    return null;
  }

  const { title, materials, location, year, url } = data.video;

  return (
    <GallerySection
      id={id}
      title={title || ""}
      videoUrl={url || ""}
      caption={`${title}, ${materials}, ${location}, ${dayjs(year).format('YYYY')}`}
    />
  );
};

export default React.memo(Video);