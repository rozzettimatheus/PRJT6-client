import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from '@styled-icons/heroicons-outline';

export const Header = styled.header`
  max-width: var(--max-width);
  width: 100%;
  border-bottom: 2px solid var(--border-color);
  padding: 1.4rem 0;
  text-align: end;
  margin: 2.4rem 0 3rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: var(--text);
  }
`;

export const Grid = styled.main`
  width: 100%;
  display: grid;
  grid-gap: 30px;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
`;

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  margin: 1.8rem 0;
`;

export const Paginate = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--text);
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 700;
`;

export const LeftArrow = styled(ChevronLeft)`
  height: 30px;
  color: var(--text);
  margin-right: 8px;
`;

export const RightArrow = styled(ChevronRight)`
  height: 30px;
  color: var(--text);
  margin-left: 8px;
`;
