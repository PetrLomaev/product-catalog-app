import styled from 'styled-components';

export const TabsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;

export const TabList = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  margin-top: 0px;
  border-bottom: 1px solid #e0e0e0;
`;

export const TabItem = styled.div<{ $isActiveTab: boolean }>`
  padding: 5px 20px;
  cursor: pointer;
  font-weight: ${({ $isActiveTab }) => ($isActiveTab ? '600' : '400')};
  color: ${({ $isActiveTab }) => ($isActiveTab ? '#333' : '#666')};
  border-bottom: 2px solid ${({ $isActiveTab }) => ($isActiveTab ? '#333' : 'transparent')};
  transition: all 0.2s ease;

  &:hover {
    color: #333;
  }
`;
