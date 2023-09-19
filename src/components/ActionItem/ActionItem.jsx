import React from 'react'
import style from './ActionItem.module.scss';


export const ActionItem = ({item: { idx, type, rate, well }}) => {
  return (
      <div className={style.action_item}>
          <div>
              {idx}. {type}
          </div>
          {rate && (
              <div>
                  {well} {rate} рейтинг
              </div>
          ) 
          }
      </div>
  )
}
