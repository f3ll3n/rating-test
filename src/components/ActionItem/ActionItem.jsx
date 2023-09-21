import React from "react";
import style from "./ActionItem.module.scss";

export const ActionItem = ({ item: { idx, type, rate, well } }) => {
  return (
    <div className={style.action_item}>
      <div>
        {idx}. 
          {type == 'order' && ' Заказ'}
          {type == 'late' && ' Опоздание'}
          {type == 'ntd' && ' НТД'}
      </div>
      {rate !== 0 && (
        <div>
          {rate > 0 && '+'}{rate} рейтинг ({rate / 100})
        </div>
      )}
    </div>
  );
};
