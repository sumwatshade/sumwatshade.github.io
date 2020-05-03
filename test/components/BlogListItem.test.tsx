import React from 'react';
import { render } from '@testing-library/react';

import BlogListItem from '../../src/components/BlogListItem';
import { BlogPostData } from '../../src/types.ts';

describe('BlogListItem', () => {
  let data: BlogPostData;

  beforeEach(() => {
    data = {
      fields: {
        slug: 'blog-post-one',
      },
      frontmatter: {
        title: 'Blog Post One',
        date: '1995/11/11',
      },
    };
  });

  it('renders correctly', () => {
    const { asFragment } = render(<BlogListItem data={data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
