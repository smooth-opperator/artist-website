import React from "react";

import { useExhibitionListQuery } from "../../generated/graphql";
import { SectionTitle } from "../../styles";
import Exhibition from "../Exhibition";
import LoadingSpinner from "../LoadingSpinner";
import { SectionContainerStyled } from "./styles";

const ExhibitionList: React.FC = () => {
  const { data, error, loading } = useExhibitionListQuery();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return null;
  }

  const { exhibitions } = data;

  return (
    <SectionContainerStyled id="exhibitions">
      <SectionTitle>EXHIBITION VIEWS</SectionTitle>
      {exhibitions.map(({ id }) => (
        <Exhibition id={id} key={id} />
      ))}
    </SectionContainerStyled>
  );
};

export default ExhibitionList;