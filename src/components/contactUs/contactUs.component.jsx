import Form from "../form/form.component";
import { ContactsContainer, ContactsDescription, ContactsHeader, ContactsWrapper } from "./contactUs.styles";

const Contacts = () =>{
	return(
		<ContactsWrapper>
			<ContactsContainer>
				<ContactsHeader>Начнём сотрудничество &#129309;</ContactsHeader>
				<ContactsDescription>Заполните форму связи для сотрудничества с KORYTSA HR. <div>Консультация бесплатно.</div></ContactsDescription>
				<Form/>
			</ContactsContainer>
		</ContactsWrapper>
	)
}

export default Contacts;