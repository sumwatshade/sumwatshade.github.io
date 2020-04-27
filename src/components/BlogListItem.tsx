import * as React from 'react';
import styled from '@emotion/styled';

import { Link } from 'gatsby';
import { colors } from '../styles/variables';
import { getEmSize } from '../styles/mixins';

interface BlogListItemProps {
    title: string,
    to: string
}

const ListItemContainer = styled.li`
    min-height: ${getEmSize(3)}em;
    border: ${getEmSize(1)}em solid ${colors.brand};
    margin: 1em;

`;

const StyledLink = styled(Link)`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 1em;
`;

const BlogListItem: React.FC<BlogListItemProps> = ({
  title,
  to,
}) => (
  <li>

    <ListItemContainer>
      <StyledLink to={to}>
        {title}
      </StyledLink>
    </ListItemContainer>
  </li>
);

export default BlogListItem;
