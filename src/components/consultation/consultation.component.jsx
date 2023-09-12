import { ConsultationButton, ConsultationChat, ConsultationContainer, TelegramContainerBigger, WhatsappContainerBigger } from "./consultation.styles";
import Telegram from "../iconsComponents/telegram/telegram.component";
import Whatsapp from "../iconsComponents/whatsapp/whatsapp.component";

const Consultation = ()=>{
	return(
		<ConsultationContainer className="consultation">
			<ConsultationButton>
				<a href="#button">
					Консультация здесь
				</a>
			</ConsultationButton>

			<ConsultationChat>
				<span>Живой чат:</span>

				<TelegramContainerBigger>
					<Telegram/>
				</TelegramContainerBigger>
				
				<WhatsappContainerBigger>
					<Whatsapp/>
				</WhatsappContainerBigger>
				
			</ConsultationChat>


		</ConsultationContainer>
	)
}

export default Consultation;