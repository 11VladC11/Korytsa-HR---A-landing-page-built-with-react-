import { FormButton, FormContainer, FormInput, FormWrapper, InputSection, PersonalInformation, SubmitButton, SuccessSubmit, TextArea } from "./form.styles";
import { useState } from "react";
import emailjs from "emailjs-com";
import substract from '../../assets/icons/subtract.svg'
import close from '../../assets/icons/close.svg'


const Form =()=>{
		const [isActive, setIsActive] = useState(false);
	const [phone, setPhone] = useState('');
	const [error, setError] = useState(false);
	const handleClick =()=>{
		setIsActive(false)
	};
	function sendEmail(e){
		 e.preventDefault();
		if(!phone){
			setError(true);
			return;
		}
   	 emailjs.sendForm('', '', e.target, '')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
		e.target.reset()
		setIsActive(current => !current)
		setError(false);
		setPhone('');

	}
	return(
		<FormWrapper id="form">
			<FormContainer onSubmit={sendEmail}>
				<PersonalInformation>
					<InputSection className="jumi " >
						<div className="phoneInput">
							<label htmlFor="phone">Телефон*</label>
							<FormInput id='phone' name="phone" type='number' value={phone} style={
								{
									border: error ? '1px solid #D63535' : '',

								}
								} onChange={(e) => {
									setPhone(e.target.value);
									setError(false)}
								} placeholder="068 584 828" autoComplete="off"/>
							{
								error ? (
									<div className="error">* Это поле обязательно для заполнения</div>
									):('')
							}
						</div>
					</InputSection>
					
					<InputSection className="jumi">
						<label htmlFor="name">Имя</label>
						<FormInput id='name' name='name' type='text' placeholder="Кулай Степан" autoComplete="off"/>
					</InputSection>
				</PersonalInformation>
				<InputSection>
					<label htmlFor="car-model">Компания</label>
					<FormInput id="car-model" name="carModel" type='text' autoComplete="off" placeholder="MirAvia SRL"/>
				</InputSection>
				<InputSection>

					<label htmlFor="problem">Ваши пожелания</label>
					<TextArea id="problem" name="problem" type='textarea' autoComplete="off" placeholder="Например: Мне нужна помощь с наймом сотрудников для компании по продажи авиабилетов. Название компании «MirAvia»..." >
					</TextArea>
				<SubmitButton>
					<FormButton children="Отправить"/>
				</SubmitButton>
				</InputSection>
				<div style={
						{
							cursor: isActive ? '' :'default',
						}
						}>
					<SuccessSubmit style={
						{
							opacity: isActive ? '1' :'0',
						}
						}>
						<div>
						<img src={substract} alt="" />
						<span>Ваша заявка была успешна отправлена! Ожидайте ответа.</span>
						</div>				
						<img src={close} alt="" onClick={handleClick}
						style={
						{
							cursor: isActive ? 'pointer' :'default',
						}
						}/>
						
						
					</SuccessSubmit>
				</div>

			</FormContainer>
		</FormWrapper>
	)
}

export default Form;