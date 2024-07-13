import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, isDisabled, onClick }: IButtonProps) => {
  console.log(isDisabled)
  return <ButtonContainer 
    onClick={onClick}
    disabled={!isDisabled}
  >{title}</ButtonContainer>;
};

export default Button;
