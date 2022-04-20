import styled from "styled-components";
import { SectionItem } from "../../styles";


export const SectionItemStyled = styled(SectionItem)`
  &:last-of-type {
    margin-bottom: 800px;
  }

  @media screen and (max-width: 768px) {
    &:last-of-type {
      margin-bottom: 300px;
    }
  }
`;

export const InfoItem = styled.div`
  padding: 30px 30px 30px 0;

  > p {
    text-align: left;
    margin-top: 0;
    font-size: 14px;
    line-height: 16px;
    color: darkgrey;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }
`;

export const CV = styled(InfoItem)`
  em {
    margin-left: 40px;
  }
`;