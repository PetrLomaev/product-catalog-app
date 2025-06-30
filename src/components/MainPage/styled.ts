import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f7;
  position: relative;
`;

export const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #f5f5f7;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  h1 {
    margin: 0;
    font-size: 1.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70%;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;

    h1 {
      font-size: 1.4rem;
      max-width: 100%;
    }
  }
`;

export const NavigationContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
