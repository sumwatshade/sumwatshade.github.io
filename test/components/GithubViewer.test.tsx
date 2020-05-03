import React from 'react';
import { render } from '@testing-library/react';

import GithubViewer from '../../src/components/GithubViewer';
import { GithubRepoInfo } from '../../src/types.ts';

describe('GithubViewer', () => {
  let data: GithubRepoInfo;

  beforeEach(() => {
    data = {
      description: 'a site',
      name: 'lshadler.github.io',
      url: 'test',
      homepageUrl: 'test-homepage',
      primaryLanguage: {
        color: 'green',
        name: 'java',
      },
    };
  });

  it('renders correctly', () => {
    const { asFragment } = render(<GithubViewer repo={data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
