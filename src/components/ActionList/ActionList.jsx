import React from 'react'
import style from './ActionList.module.scss';
import { ActionItem } from '../ActionItem/ActionItem';
export const ActionList = ({actionList}) => {
    console.log(actionList)
    return (
    <div className={style.actionList}>
        <div className={style.header}>
            Действия пользователя:
        </div>
        <div className={style.action_list}>
            {actionList.length > 0 && actionList.map((actionItem, idx) => {
                return (
                    <ActionItem key={idx} item={{ idx: idx + 1, type: actionItem.action, rate: actionItem.points, well: actionItem.well }} />
                )
            })}
        </div>
    </div>
  )
}
