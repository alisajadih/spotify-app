import React from "react";
import Item from "./Item";
import styled from "styled-components";

const Wapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-content: space-between;
  margin:0 auto;
  margin-bottom:50px;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  
`;
const WrapperHeader = styled.h2`
  color: white;
  letter-spacing: 1.5px;
  margin-bottom: 5px;
  flex-basis: 100%;
  margin-left: 10px;
`;

const ItemsWrapper = ({ header='', items=[] }) => {

  
  return (
    <>
      <Wapper>
        <WrapperHeader>{header}</WrapperHeader>
        {items.map(item => (
          <Item
            key={item.id}
            image={item.images[0].url}
            name={item.name}
          />
        ))}
      </Wapper>
    </>
  );
};

export default ItemsWrapper;
