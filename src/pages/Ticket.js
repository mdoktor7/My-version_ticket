import { Header } from "../components/Header";
import { Ticket } from "../components/Ticket";
import { useParams } from "react-router-dom";

const TicketPage = () => {
  const { carNumber, passengers } = useParams();

  const ticketComponents = Array.from({ length: passengers }, (_, index) => (
    <Ticket key={index} stop={index % 2 === 1} carNumber={carNumber} />
  ));

  return (
    <>
      <Header />
      {ticketComponents}
    </>
  );
};

export default TicketPage;
