import React from 'react';
import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
} from 'nextmail/mjml-react';
import Header from './src/components/Header';

function Demo(props) {
  const { firstName } = props;

  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Payload Only Demo</MjmlTitle>
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlColumn>
            <Header />
            <MjmlText align="center">
              {`Hello ${firstName}`}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
}

export default Demo;
