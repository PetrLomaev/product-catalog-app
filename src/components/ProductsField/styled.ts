import styled from 'styled-components';

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  color: #666;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const ProductCardWrapper = styled.article`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  background: #fff;
  transition: transform 0.2s ease;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/5;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ProductInfo = styled.div`
  padding: 16px;
`;

export const ProductName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

export const AddToCardButton = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  padding: 15px;
  font-size: 18px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  width: 100%;

  &:hover {
    background: #676767;
    color: #fff;
    border-color: black;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const RemoveFromCardButton = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  padding: 15px;
  font-size: 18px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  width: 100%;

  &:hover {
    background: #676767;
    color: #fff;
    border-color: black;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
