import { Header } from "../components/Header";
import { Ticket } from "../components/Ticket";
import { useParams } from "react-router-dom";

const TicketPage = () => {
  const { carNumber, passengers } = useParams();

  return (
    <>
      <Header />
      <Ticket stop={false} carNumber={carNumber} passengerCount={parseInt(passengers)} />
    </>
  );
};

export default TicketPage;


