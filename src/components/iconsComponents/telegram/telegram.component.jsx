import telegramIcon from '../../../assets/icons/telegram.svg'
import { TelegramContainer } from './telegram.styles'

const Telegram =()=>{
	return(
		<TelegramContainer>
			<a href="#nn" className='telegramLink'>
				<img src={telegramIcon} alt="" />
			</a>
		</TelegramContainer>
	)
}
export default Telegram;