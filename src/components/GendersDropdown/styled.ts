import styled from 'styled-components';

export const SortContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: auto;
`;

export const SortButton = styled.button`
  min-width: 180px;
  width: auto;
  max-width: 100%;
  padding: 8px 16px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #f5f5f5;
  }

  &::after {
    content: '▼';
    margin-left: 8px;
    font-size: 10px;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: white;
  min-width: 180px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
  right: 0;
  top: 100%;
  margin-top: 5px;
`;

export const DropdownItem = styled.button<{ $active?: boolean }>`
  display: block;
  width: 100%;
  padding: 10px 16px;
  text-align: left;
  background: ${({ $active }) => ($active ? '#007bff' : 'white')};
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #45a4ed;
  }
`;
