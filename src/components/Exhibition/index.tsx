import React from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import { useExhibitionsQuery } from "../../generated/graphql";
import GallerySection from "../GallerySection";
import LoadingSpinner from "../LoadingSpinner";

dayjs.extend(advancedFormat)

const Exhibition: React.FC<{ id: string }> = ({ id }) => {
  const { data, error, loading } = useExhibitionsQuery({
    variables: {
      id: id
    }
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !data || !data.exhibition) {
    return null;
  }

  const { title, startDate, endDate, galleryName, location, images, about, photographerCredit } = data.exhibition;

  return (
    <GallerySection
      id={id}
      title={title || ""}
      images={images}
      aboutImage={about || undefined}
      caption={`${galleryName}, ${dayjs(startDate).format('MMMM Do YYYY')} - ${dayjs(endDate).format('MMMM Do YYYY')}, ${location}`}
      credit={photographerCredit}
    />
  );
};

export default React.memo(Exhibition);
