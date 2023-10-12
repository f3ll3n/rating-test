import style from "./ExampleCard.module.scss";
import { Paper } from "@mui/material";

export default function ExampleCard({ props }) {
  return (
    <Paper elevation={3}>
    <div className={style.exampleCard}>
      <div className={style.card_header}>
        <div>{props.user}</div>
        <div>заказов: {props.orders}</div>
        <div>уровень: {props.level}</div>
      </div>
    </div>
    </Paper>
  );
}
