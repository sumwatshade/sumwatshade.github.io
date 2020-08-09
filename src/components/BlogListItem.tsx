import * as React from 'react';
import styled from '@emotion/styled';

import { Link } from 'gatsby';
import { breakpoints } from '../styles/variables';
import { getEmSize } from '../styles/mixins';
import { BlogPostData } from '../types.ts/index';

interface BlogListItemProps {
    data: BlogPostData
}

const ListItemContainer = styled.li`
    min-height: ${getEmSize(3)}em;
    border: ${getEmSize(1)}em solid var(--textTitle);
    margin: 1em;

`;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 1em;

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column-reverse;
    }
`;

const StyledTitle = styled.div``;

const StyledDate = styled.div`
`;

const BlogListItem: React.FC<BlogListItemProps> = ({
  data,
}) => {
  const { frontmatter: { title, date }, fields: { slug } } = data;
  const dateObj: Date = new Date(date);

  return (
    <ListItemContainer>
      <StyledLink to={slug}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDate>{dateObj.toLocaleDateString()}</StyledDate>
      </StyledLink>
    </ListItemContainer>
  );
};

export default BlogListItem;
