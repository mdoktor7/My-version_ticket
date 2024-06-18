import styled from "styled-components";

export const Container = styled.div``;

export const HeaderTitleWrapp = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-left: 10px;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

export const FormatTicketWrapp = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  border-bottom: 1px solid #dfe1d9;
  box-shadow: 0px 1px 1px 0px rgb(223, 225, 217, 0.75);
`;

export const FormatTicket = styled.li`
  width: 50%;
  padding-bottom: 15px;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: #999999;
`;
