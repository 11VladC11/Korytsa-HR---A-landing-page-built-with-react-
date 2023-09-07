import { NavigationWrapper,NavigationContainer, NavigationLogo, NavigationLinks,NavigationContacts } from "./navigation.styles";
import logoImg from '../../assets/img/Korytsa HR-min.png'
import phoneIcon from '../../assets/icons/local_phone.svg'
import Telegram from "../iconsComponents/telegram/telegram.component";
import Whatsapp from "../iconsComponents/whatsapp/whatsapp.component";
const Navigation =()=>{
	return(
		<NavigationWrapper>
			<NavigationContainer>
			
				<NavigationLogo>
					<img src={logoImg} alt="" />
				</NavigationLogo>

				<NavigationLinks>
					<ul>
						<li>
							<a href="#us">О нас</a>
						</li>
						<li>
							<a href="#services">Услуги</a>
						</li>
						<li>
							<a href="#contacts">Контакты</a>
						</li>
					</ul>
				</NavigationLinks>

				<NavigationContacts>
					<ul>
						<li className="phone">
							<a href="tel:+37368321001">
								<img src={phoneIcon} alt="" />
								<span>068 321 001</span>
							</a>
						</li>
						<li>
							<Telegram/>
						</li>
						<li>
							<Whatsapp/>
						</li>
					</ul>
				</NavigationContacts>

			</NavigationContainer>
		</NavigationWrapper>
	)
}
export default Navigation;