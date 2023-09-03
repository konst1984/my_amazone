import { formattedAmount } from "@/utils/forrmattedAmount";

interface IProps {
  amount: number;
}

const FormattedPrice = ({ amount }: IProps) => {
  const amountPrice = formattedAmount(amount);
  return <span>{amountPrice}</span>;
};

export default FormattedPrice;
