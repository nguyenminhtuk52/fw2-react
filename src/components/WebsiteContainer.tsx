import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

type Props = {};
const WebsiteContainer = (props: Props) => {
  return (
    <ContainerStyle>
      <Heading3>Điện thoại nổi bật nhất</Heading3>
      <Outlet />
    </ContainerStyle>
  );
};
const Heading3 = styled.h3`
  color: black;
  font-size: 18px;
  font-weight: bold;
  padding-left:13 0px;
  margin-left:125px;
  margin-top:25px;
  margin-bottom:25px;
`;
const ContainerStyle = styled.div`
padding : 0 104px 0 68px;
`
export default WebsiteContainer;