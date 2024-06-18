import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputStyled, ContainerHome, ButtonStyled, PassengerInputStyled } from "./InputNumber.styled";

export const InputNumber = () => {
  const [value, setValue] = useState("");
  const [passengers, setPassengers] = useState(1);
  const navigate = useNavigate();

  const handleInput = () => {
    if (!value) {
      return alert("Please, enter number!");
    }
    if (passengers < 1) {
      return alert("Please, enter a valid number of passengers!");
    }
    navigate(`/${value}/${passengers}`);
  };

  return (
    <ContainerHome>
      <InputStyled
        placeholder="input number"
        name="number"
        value={value}
        onChange={(evt) => setValue(evt.currentTarget.value)}
      />
      <PassengerInputStyled
        type="number"
        placeholder="number of passengers"
        value={passengers}
        onChange={(evt) => setPassengers(parseInt(evt.currentTarget.value))}
        min="1"
      />
      <ButtonStyled type="submit" onClick={handleInput}>
        Go to ticket!
      </ButtonStyled>
    </ContainerHome>
  );
};

