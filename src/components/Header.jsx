import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  HeaderTitle,
  HeaderTitleWrapp,
  FormatTicket,
  FormatTicketWrapp,
} from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderTitleWrapp>
        <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
          <BiLeftArrowAlt size={32} color={"#6D6D69"} />
        </Link>

        <HeaderTitle>Проїзд</HeaderTitle>
      </HeaderTitleWrapp>
      <FormatTicketWrapp>
        <FormatTicket
          style={{
            color: "#99D507",
            borderBottomStyle: "solid",
            borderBottomWidth: "2px",
            borderBottomColor: "#99D507",
          }}
        >
          Квиток
        </FormatTicket>
        <FormatTicket>Проїзний</FormatTicket>
      </FormatTicketWrapp>
    </>
  );
};
