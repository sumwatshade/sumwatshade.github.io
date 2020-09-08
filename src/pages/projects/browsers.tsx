import * as React from 'react';

import browserslist from 'browserslist';
import styled from '@emotion/styled';
import Page from '../../components/Page';
import Container from '../../components/Container';
import IndexLayout from '../../layouts';

const Result = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #c8e8e8;
  border: 1px solid white;
  border-radius: 3px;
  color: black;
`;
const Error = styled(Result)`
  color: red;
`;
const BrowserList = styled.ul`
  list-style: none;
`;

const Browsers: React.FC = () => {
  const [query, setQuery] = React.useState<string>('>= 1%');
  const [error, setError] = React.useState<string | undefined>();
  const [result, setResult] = React.useState<React.ReactNode[] | undefined>(undefined);

  const handleClick = (clickEvent: React.MouseEvent) => {
    clickEvent.preventDefault();
    try {
      if (query) {
        const browsers = browserslist(query);
        setResult(browsers.map((v) => <li>{v}</li>));
        setError(undefined);
      }
    } catch (e) {
      setResult(undefined);
      setError(e.message);
    }
  };

  React.useEffect(() => {

  }, [query]);

  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Browserslist</h1>
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
          <button type="submit" onClick={handleClick}>Click to Query</button>
          {result && (<Result><BrowserList>{result}</BrowserList></Result>)}
          {error && (<Error>{error}</Error>)}
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default Browsers;
