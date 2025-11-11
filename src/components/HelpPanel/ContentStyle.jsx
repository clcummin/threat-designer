import styled from "styled-components";

export const DocsContainer = styled.div`
  font-family: "Amazon Ember", Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
`;

export const Heading1 = styled.h1`
  color: #16191f;
  margin-bottom: 12px;
`;

export const Heading2 = styled.h2`
  color: #16191f;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Paragraph = styled.p`
  margin-bottom: 8px;
`;

export const List = styled.ul`
  margin-bottom: 8px;
  padding-left: 24px;

  li {
    margin-bottom: 8px;
  }

  ul,
  ol {
    margin-top: 8px;
    margin-bottom: 0;
  }
`;

export const OrderedList = styled.ol`
  margin-bottom: 8px;
  padding-left: 24px;

  li {
    margin-bottom: 4px;
  }

  ul {
    margin-top: 4px;
    margin-bottom: 0;
  }
`;
