import * as React from 'react';
import styled from '@emotion/styled';

import { colors } from '../styles/variables';
import { getEmSize } from '../styles/mixins';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center
    background-color: ${colors.white};
    border: ${getEmSize(1)}em solid ${colors.black};
    border-radius: 5px;

`;

const Bar = styled.div`
    background-color: ${colors.brand};
`;

const Percentage = styled.span`
    color: ${colors.white};
    margin-left: 5%;
`;

interface SkillBarProps {
    skillName: string,
    pct: string
}


const SkillBar: React.FC<SkillBarProps> = ({
  skillName,
  pct,
}) => (
  <>
    <h3>{skillName}</h3>
    <Container>
      <Bar style={{ width: `${pct}%` }}><Percentage>{`${pct}%`}</Percentage></Bar>
    </Container>
  </>
);

export default SkillBar;
