import whatsappIcon from '../../../assets/icons/whatsapp.svg'
import { WhatsappContainer } from './whatsapp.styles'
const Whatsapp =()=>{
	return(
		<WhatsappContainer>
			<a href="#nnn" className='whatsappLink'>
				<img src={whatsappIcon} alt="" />
			</a>
		</WhatsappContainer>
	)
}

export default Whatsapp;