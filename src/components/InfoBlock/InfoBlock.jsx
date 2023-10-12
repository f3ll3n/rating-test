import { useState, useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

export default function InfoBlock({ props }) {
    const [messages] = useState({
        max: 'У Вас максимальный рейтинг! Поздравляем',
        high: 'У Вас высокий рейтинг! Продолжайте повышать рейтинг и получайте приятные бонусы',
        start: 'Рады приветствовать Вас! Повышайте свой рейтинг и получайте приятные бонусы',
        middle: 'Вы в безопасной зоне, но все еще можете повысить свой рейтинг!',
        bonus: 'Вы отлично себя проявляете! Дарим 600 бонусов',
        improvement: 'Вы на пути к успеху и получению долгожданного бонуса! Так держать 👏',
        low: 'Ваш рейтинг стремительно падает - повышайте тонус и получайте бонус!',
        lowWarn: 'Внимание! Вы в зоне риска - записывайтесь на заказы и получайте возможность повысить свой рейтинг!',
        lowCritical: 'К сожалению, запись на заказы ограничена! Записывайтесь, ожидайте подтверждение менеджера и повышайте рейтинг, а также уровень доверия!',
        lowEnd: 'Нам очень жаль, но мы вынуждены прекратить с Вами сотрудничество 😔 Ожидайте, увольнение и расчет будут произведены в ближайшие дни. В случае возникновения вопросов свяжитесь с нами.',
    })
const [critical, setCritical] = useState(false)
const [message, setMessage] = useState(messages.start);


useEffect(() => {
    if(props.orders === 0 && props.rating === 500){
        setMessage(messages.start)
        setCritical(false)
    }
    if(props.rating < 400 && !critical){
        setCritical(true)
    }
    if(props.rating < 600 && props.rating >= 500 && props.orders <= 10){
        setMessage(messages.start)
    } 
    else if(props.rating === 1000){
        setMessage(messages.max)
        
    }
    else if(props.rating >= 600 && props.rating < 700 && props.maxRating < 700){
        setMessage(messages.bonus)
    }
    else if(props.rating <= 999 && props.rating >= 600){
        setMessage(messages.high)
    }
    else if(props.rating <= 1000 && props.rating >= 500 && props.orders > 10){
        setMessage(messages.middle)
        setCritical(false)
    }
    else if(props.rating > 399 && props.rating < 500 && critical){
        setMessage(messages.improvement)
    }
    else if(props.rating > 399 && props.rating < 500){
        setMessage(messages.low)
    }
    else if(props.rating > 299 && props.rating < 400){
        setMessage(messages.lowWarn)
    }
    else if(props.rating > 199 && props.rating < 300){
        setMessage(messages.lowCritical)
    }
    else if(props.rating >= 0 && props.rating < 200){
        setMessage(messages.lowEnd)
    }

}, [props, setMessage, messages, props.rating, props.orders, props.action, props.maxRating])

return (
    <Paper elevation={3}>
        <div style={{padding: '10px', display: 'flex', gap: '7px'}}>
            <InfoIcon/>
            <Typography>
                {message}   
            </Typography>
        </div>
    </Paper>
  );
}
