import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

export const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: 8px 16px;
  border: 1px solid ${({ $isActive }) => ($isActive ? '#333' : '#ddd')};
  background: ${({ $isActive }) => ($isActive ? '#f0f0f0' : 'white')};
  border-radius: 4px;
  cursor: pointer;
`;
