import Consultation from "../consultation/consultation.component";
import { InTouchContainer, InTouchWrapper } from "./inTouch.styles";


const InTouch = ()=>{
	return(
		<InTouchWrapper>
			<InTouchContainer>
			<h1>
				Нужен результат за кратчайший срок?
			</h1>
			<h2>
				Свяжитесь с нами, и мы найдём нужное решение для вас и вашей компании
			</h2>
			<Consultation/>
			</InTouchContainer>
		</InTouchWrapper>
	)
}

export default InTouch;