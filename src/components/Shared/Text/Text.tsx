import styled from 'styled-components';
import { TextProps, TextProperties} from './types';
import { renderText } from './utils';

const Title = styled.h2``;

const Paragraph = styled.p``;

const Text = (props: TextProps) => {
  return (
    <>
      {Object.entries(props.content).map(([key, value]) => {
        switch (key) {
          case TextProperties.Title: {
            return renderText(value, Title);
          }

          case TextProperties.Body: {
            return renderText(value, Paragraph);
          }
        }
      })}
    </>
  )
}

export default Text;