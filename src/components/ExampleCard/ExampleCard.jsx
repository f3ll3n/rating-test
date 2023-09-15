import style from './ExampleCard.module.scss';

export default function ExampleCard() {
  return (
    <div className={style.exampleCard}>
        <div className={style.card_header}>
            <div>
                333-00122
            </div>
            <div>
                Уровень: <span className={style.card_number}>6</span>
            </div>
        </div>
        <div className={style.card_parameters}>
            <div className={style.card_parameter}>
                Рейтинг: <span className={style.card_number}>600</span>
            </div>
            <div className={style.card_parameter}>
                Заказов: <span className={style.card_number}>5</span>
            </div>
            <div className={style.card_parameter}>
                Опозданий: <span className={style.card_number}>1</span>
            </div>
            <div className={style.card_parameter}>
                НТД: <span className={style.card_number}>0</span>
            </div>
        </div>
    </div>
  );
}
