import style from "./ExampleCard.module.scss";

export default function ExampleCard({ props }) {
  return (
    <div className={style.exampleCard}>
      <div className={style.card_header}>
        <div>{props.user}</div>
        <div>заказов: {props.orders}</div>
        <div>уровень: {props.level}</div>
      </div>
    </div>
  );
}
