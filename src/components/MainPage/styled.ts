import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const NavContainer = styled.div`
  position: sticky;
  top: 0px;
  padding: 1rem 2rem;
  z-index: 90;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
`;
