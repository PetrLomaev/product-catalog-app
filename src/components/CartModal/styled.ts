import styled from 'styled-components';

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  animation: fadeIn 0.3s ease;
`;

export const CartContainer = styled.div`
  width: 400px;
  max-width: 100%;
  height: 100%;
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(0);
  transition: transform 0.3s ease;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: #333;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 5px;
  line-height: 1;

  &:hover {
    color: #333;
  }
`;

export const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 40px 0;
  color: #666;
  font-size: 16px;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #f5f5f5;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.h3`
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const ItemPrice = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff3b30;
  font-size: 14px;
  cursor: pointer;
  padding: 5px;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;

export const CartTotal = styled.div`
  padding-top: 20px;
  border-top: 1px solid #eee;
  font-size: 18px;
  font-weight: 600;
  text-align: right;
  margin-top: auto;
`;

export const CheckoutButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.2s ease;

  &:hover {
    background: #444;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
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
