import PropTypes from 'prop-types';
import { StyledSection, Container, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </Container>
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
