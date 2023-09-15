import { useRef } from "react"

export const Events = (props) => {
    const inputRef = useRef();
    
    const addRating = () => {
        let points = 10;
        if(props.data.ordersCount < 5){
            points = 20
        }
        props.changeRating('increase', points);
    };

    const addLateStreak = () => {
        props.setShowLateCount(props.data.showLateCount + 1);
        props.setErrorStreak(props.data.errorStreak + 1);
        console.log(props.data.errorStreak);
        if (props.data.errorStreak >= 2) {
            props.setErrorStreak(0);
            props.changeRating('decrease', 50);
        }
    };

    const addNoShowStreak = () => {
        props.setNoshowstreak(props.data.noShowStreak + 1);
        props.changeRating('decrease', props.data.noShowStreak * 50);
    };
    
    const handleOnClearData = () => {
        props.changeRating('clear')
    };

    const handleKeyDown = (event) => {
        const points = 0;
        if (event.key === 'Enter') {
            props.changeRating('input', points, inputRef.current.value)
            inputRef.current.value = ''
        }
    }

    return(
        <div className="options_navigation">
            <div className="title">Действия:</div>
            <div className="buttons_block">
                <button onClick={() => addRating()}>+ 1 заказ</button>
                <button onClick={() => addLateStreak()}>Опоздание</button>
                <button onClick={() => addNoShowStreak()}>НТД</button>
                <button onClick={() => handleOnClearData()}>Очистить данные</button>
                <input className='input' ref={inputRef} placeholder="Введите рейтинг" onKeyDown={() => handleKeyDown(event)} type="text"></input>
            </div>
        </div>
    )
}