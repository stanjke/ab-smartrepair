import { FC } from "react";
import Check from "../../../../components/ui-kit/Icons/Check";

interface Props {
  item: string;
}

const EquipmentItem: FC<Props> = ({ item }) => {
  return (
    <li className="car-page__equipment-item">
      <Check />
      {item}
    </li>
  );
};

export default EquipmentItem;
