import { styled } from "styled-components";

export const BroadcastCardWrapper = styled.div<{ hide: boolean }>`
  position: absolute;
  left: -4px;
  top: 260px;
  border-radius: 0 8px 8px 0;
  height: 275px;
  max-height: 300px;
  width: 400px;
  background: rgb(123, 0, 18);
  background: radial-gradient(circle, #5f0b2f 0%, rgba(27, 0, 4, 1) 100%);
  border: 4px solid #ffcd30;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  ${(props) =>
    props.hide
      ? `animation-duration: 2s;
  animation-name: slideleft; left: -500px;`
      : ""}
`;

export const BroadcastCardRole = styled.p`
  margin: 0;
  font-weight: 750;
  font-size: 30px;
`;

export const BroadcastCardName = styled.p`
  margin: 0;
  margin-top: 4px;
  font-size: 36px;
  font-weight: 400;
  text-decoration: none;
`;
