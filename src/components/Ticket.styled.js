import styled from "styled-components";
import backgroundLogo from "../images/cmi_1f45051f.jpg";
import castomBorder1 from "../images/castom_border_1.svg";
import castomBorder2 from "../images/castom_border_2.svg";

export const Container = styled.div`
  width: calc(100% - 10%);
  padding: 15px;
  margin: 0 auto 10px auto;
  border: 1px solid rgb(223, 225, 217);
  border-radius: 4px;
  box-shadow: 0px 1px 5px 1px rgb(223, 225, 217, 0.75);
`;

export const Logo = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid rgb(223, 225, 217);
  border-radius: 4px;
  box-shadow: 0px 1px 5px 1px rgb(223, 225, 217, 0.75);
  background-image: url(${backgroundLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TicketInfoItem = styled.li`
  font-size: 18px;
`;

export const CastomBorder1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  padding: 2px;
  background-image: url(${castomBorder1});
  background-repeat: no-repeat;
  background-position: center;
`;

export const CastomBorder2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  padding: 2px;
  background-image: url(${castomBorder2});
  background-repeat: no-repeat;
  background-position: center;
  stroke: #44c9e4;
  transform: rotate(25deg);
`;

export const TicketLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  background-color: #a0e38d;
  border: 2px solid #fff;
  box-shadow: 0px 1px 2px 2px rgb(223, 225, 217);
`;

export const TramLayout = styled.div`
  position: absolute;
  top: 23px;
  left: 24px;
  width: 65px;
  height: 65px;
  transform: rotate(-25deg);
  border: 10px solid #dd0000;
  border-radius: 6px;
`;

export const WheelOne = styled.div`
  position: absolute;
  top: 108px;
  left: 55px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #dd0000;
`;

export const WheelTwo = styled.div`
  position: absolute;
  top: 87px;
  left: 100px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #dd0000;
`;

export const Bumper = styled.div`
  position: absolute;
  top: 77px;
  left: 40px;
  width: 75px;
  height: 20px;
  background-color: #dd0000;
  transform: rotate(-25deg);
`;

export const HeadlightOne = styled.div`
  position: absolute;
  top: 96px;
  left: 47px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #a0e38d;
`;

export const HeadlightTwo = styled.div`
  position: absolute;
  top: 73px;
  left: 97px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #a0e38d;
`;

export const Сurrency = styled.p`
  position: absolute;
  top: 61.5px;
  left: 64.5px;
  transform: rotate(-25deg);
  color: #fff;
  font-weight: 600;
`;

export const Cost = styled.p`
  position: absolute;
  top: -34px;
  left: 47px;
  transform: rotate(-25deg);
  color: #fff;
  font-family: Raleway;
  font-size: 57px;
  font-weight: 700;
  color: #44c9e4;
`;

export const Number = styled.p`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
`;
export const Car = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #999999;
  text-align: center;
`;

export const PropertieList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const PropertieItem = styled.li``;

export const ItemTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #999999;
  text-align: center;
`;

export const ItemInfo = styled.p`
  margin: 0;
  font-weight: 500;
  text-align: center;
`;

export const AddInfo = styled.p`
  font-size: 12px;
  color: #99d507;
  text-align: center;
  margin: 0;
`;

export const Countdown = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #99d507;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;
`;
