import React from "react";
import parse from 'html-react-parser';

import { useInfoListQuery } from "../../generated/graphql";
import { GalleryImageContainer, GalleryItem, SectionContainer, SectionItem, SectionItemTitle, SectionTitle } from "../../styles";
import LoadingSpinner from "../LoadingSpinner";
import { InfoItem, SectionItemStyled } from "./styles";

const InfoList: React.FC = () => {
  const { data, error, loading } = useInfoListQuery();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !data || !data.infos) {
    return null;
  }

  const { cv, news, imprint } = data.infos[0];

  return (
    <SectionContainer id="infos">
      <SectionTitle>INFO</SectionTitle>
      <SectionItemStyled id="news">
        <SectionItemTitle>NEWS</SectionItemTitle>
        <InfoItem>
          {parse(news?.html || "")}
        </InfoItem>
      </SectionItemStyled>
      <SectionItem id={cv?.id}>
        <SectionItemTitle>CV</SectionItemTitle>
        <GalleryItem>
          <GalleryImageContainer>
            <img src={cv?.url} alt={cv?.url} />
          </GalleryImageContainer>
        </GalleryItem>
      </SectionItem>
      <SectionItemStyled id="imprint">
        <SectionItemTitle>IMPRINT</SectionItemTitle>
        <InfoItem>
          {parse(imprint?.html || "")}
        </InfoItem>
      </SectionItemStyled>
    </SectionContainer>
  );
};

export default InfoList;