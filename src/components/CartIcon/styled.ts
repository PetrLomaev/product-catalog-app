import styled from 'styled-components';

export const CartIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: auto;
  padding: 8px;
  color: #333;
  transition: all 0.2s ease;

  &:hover {
    color: #666;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff3b30;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;
