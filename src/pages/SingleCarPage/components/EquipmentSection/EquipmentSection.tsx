import { FC } from "react";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
interface Props {
  content: string[];
  title: string;
}

const EquipmentSection: FC<Props> = ({ content, title }) => {
  return (
    <section className="car-page__equipment-section">
      <h3 className="car-page__equipment-title">{title}</h3>
      <ul className="car-page__equipment-list">
        {content?.map((item) => (
          <EquipmentItem item={item} key={item} />
        ))}
      </ul>
    </section>
  );
};

export default EquipmentSection;
