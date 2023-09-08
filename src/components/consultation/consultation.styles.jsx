import styled from "styled-components";

import { TelegramContainer } from "../iconsComponents/telegram/telegram.styles";
import { WhatsappContainer } from "../iconsComponents/whatsapp/whatsapp.styles";

export const ConsultationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.75rem;
	margin-top: 2.75rem;

`

export const ConsultationButton = styled.button`
border: none;
outline: none;
padding: 1.2rem 2.625rem 1.2rem 2.625rem;
margin: 0;
color: #FFFFFF;
background-color: #CF4969;
font-size: 1.125rem;
font-family: 'Lora', serif;
font-weight: 400;
border-radius: 0.125rem;
transition: all 0.2s ease;
:hover{
	background-color:#E1607F;
}

`

export const ConsultationChat = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 0.75rem;
span{
	font-size: 1.125rem;
	font-weight: 500;
}
`

export const TelegramContainerBigger = styled(TelegramContainer)`
	.telegramLink{
		box-shadow: 3px 6px 7px 0px #94000026;
		width: 2.875rem;
		height: 2.875rem;
	}

	img{
		width: 1.6rem;
		margin-left: -0.18rem ;
	}
`

export const WhatsappContainerBigger = styled(WhatsappContainer)`
.whatsappLink{
	box-shadow: 3px 6px 7px 0px #94000026;
	width: 2.875rem;
	height: 2.875rem;
}

 img{
	width: 1.875rem;
 }
`