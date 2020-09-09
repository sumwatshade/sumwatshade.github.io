import * as React from 'react';

import browserslist from 'browserslist';
import styled from '@emotion/styled';

import Page from '../../components/Page';
import Container from '../../components/Container';
import IndexLayout from '../../layouts';


const Result = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #c8e8e8;
  border: 1px solid grey;
  border-radius: 3px;
  color: black;
`;

const Error = styled(Result)`
  background-color: #ffcccb;
`;

const BrowserList = styled.ul`
  list-style: none;
`;

const QueryForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
`;

const QueryInput = styled.input`
  background-color: #c8e8e8;
  border: 1px solid grey;
  border-radius: 2px;
  margin-right: 10px;
  padding: 10px;

  :hover,
  :focus {
    border: 1px solid goldenrod;
  }
`;

const QueryButton = styled.button`
  background-color: #c8e8e8;
  border: 1px solid grey;
  border-radius: 2px;
  margin-right: 10px;
  padding: 10px;

  :hover, :focus {
    background-color: goldenrod;
    border: 1px solid white;
  }
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
          <h1>Browserslist Query</h1>
          <QueryForm>
            <QueryInput placeholder={'ex. ">=1%, not dead"'} value={query} onChange={(e) => setQuery(e.target.value)} />
            <QueryButton type="submit" onClick={handleClick}>Click here to query</QueryButton>
          </QueryForm>
          {result && (<Result><BrowserList>{result}</BrowserList></Result>)}
          {error && (<Error>{error}</Error>)}
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default Browsers;
