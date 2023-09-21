import React, { useRef, useEffect, useCallback } from "react";
import style from "./ActionList.module.scss";
import { ActionItem } from "../ActionItem/ActionItem";

export const ActionList = ({ actionList }) => {
  const actionListRef = useRef();

  const scrollToBottom = useCallback(() => {
    if (actionListRef.current) {
      const scrollHeight = actionListRef.current.scrollHeight;
      const height = actionListRef.current.clientHeight;
      actionListRef.current.scrollTop = scrollHeight - height;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [actionList, scrollToBottom]);

  return (
    <div className={style.actionList}>
      <div className={style.header}>Действия пользователя:</div>
      <div className={style.action_list} ref={actionListRef}>
        {actionList.length > 0 &&
          actionList.map((actionItem, idx) => {
            return (
              <ActionItem
                key={idx}
                item={{
                  idx: idx + 1,
                  type: actionItem[0],
                  rate: actionItem[1],
                }}
              />
            );
          })}
      </div>
    </div>
  );
};
