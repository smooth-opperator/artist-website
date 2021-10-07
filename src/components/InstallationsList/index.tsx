import React from "react";

import { useInstallationsListQuery } from "../../generated/graphql";
import { SectionContainer, SectionTitle } from "../../styles";
import Installation from "../Installation";
import LoadingSpinner from "../LoadingSpinner";

const InstallationsList: React.FC = () => {
  const { data, error, loading } = useInstallationsListQuery();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return null;
  }

  const { installations } = data;

  return (
    <SectionContainer id="installations">
      <SectionTitle>INSTALLATIONS</SectionTitle>
      {installations.map(({ id }) => (
        <Installation id={id} key={id} />
      ))}
    </SectionContainer>
  );
};

export default InstallationsList;