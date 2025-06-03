import styled from 'styled-components';

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ControlButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const QuantityValue = styled.span`
  min-width: 20px;
  text-align: center;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff3b30;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffeeec;
  }
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  display: block;

  &:hover {
    background-color: #0056b3;
  }
`;
