import * as React from 'react';
import styled from '@emotion/styled';

import Img, { FixedObject } from 'gatsby-image';
import { colors } from '../styles/variables';
import { getEmSize } from '../styles/mixins';

const StyledCard = styled.div`
    background-color: ${colors.white};
    border-radius: 5px;
    padding: 1em;
    border: ${getEmSize(1)}em solid ${colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
`;

interface BandMemberCardProps {
    name: string
    fixed: FixedObject,
}

const BandMemberCard: React.FC<BandMemberCardProps> = ({
  fixed,
  name,
}) => (
  <StyledCard>
    {name}
    <Img fixed={fixed} alt={name} />
  </StyledCard>
);

export default BandMemberCard;
