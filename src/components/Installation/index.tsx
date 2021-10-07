import dayjs from "dayjs";
import React from "react";

import { useInstallationsQuery } from "../../generated/graphql";
import GallerySection from "../GallerySection";
import LoadingSpinner from "../LoadingSpinner";

const Installation: React.FC<{ id: string }> = ({ id }) => {
  const { data, error, loading } = useInstallationsQuery({
    variables: {
      id: id
    }
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !data || !data.installation) {
    return null;
  }

  const { title, materials, location, year, images, photographerCredit } = data.installation;

  return (
    <GallerySection
      id={id}
      title={title || ""}
      images={images}
      caption={`${title}, ${materials}, ${location}, ${dayjs(year).format('YYYY')}`}
      credit={photographerCredit}
    />
  );
};

export default React.memo(Installation);