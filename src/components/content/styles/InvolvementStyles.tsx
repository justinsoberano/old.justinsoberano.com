import styled from "styled-components";

export const InvolvementCard = styled.div`
  white-space: normal;
  display: inline-block;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.758);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  width: 450px;
  height: 150px;
  position: relative;
  border: 4px solid white;
  overflow-wrap: break-word;
`;

export const InvolvementImg = styled.img`
  border-radius: 0px 12px 12px 0;
  width: 150px;
  float: right;
  height: 150px;
  object-fit: cover;
`;

export const InvolvementTitle = styled.p`
  font-size: 1.4em;
  margin-left: 15px;
  margin-top: 15px;
  font-weight: bold;
  font-family: 'San Francisco';
  color: white;
  text-align: left;
`;

export const InvolvementDesc = styled.p`
  font-size: 14px;
  margin-left: 15px;
  font-family: 'San Francisco';
  color: white;
  margin-top: -20px;
  text-align: left;
  margin-right: 200px;
`;

export const InvolvementContainer = styled.div`
  overflow: auto;
  white-space: nowrap;
  margin-top: -190px;
  zoom: 0.8;
`;