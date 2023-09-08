import Consultation from "../consultation/consultation.component";
import { MainSectionBackground, MainSectionInfoContainer,MainSectionContainer, MainSectionDescription, MainSectionFacts, MainSectionTitle, MainSectionWrapper } from "./mainSection.styles";
import backgroundImg from '../../assets/img/Screen10-min.jpg'
import checkIcon from '../../assets/icons/bifa.svg'
const MainSection =()=>{
	return(
		<MainSectionWrapper>

			<MainSectionBackground>
				<img src={backgroundImg} alt="" />
			</MainSectionBackground>

			<MainSectionContainer>
				<MainSectionInfoContainer>

					<MainSectionTitle>
						<h1>
							Korytsa HR <br/> Эксперт в управлении персоналом
						</h1>
					</MainSectionTitle>

					<MainSectionDescription>
						<h2>
							Воплощаем оптимальные стратегии найма, развития и удержания талантов
						</h2>
					</MainSectionDescription>

					<Consultation/>

					<MainSectionFacts>
					<div className="fisrtFact facts">
						<div className="checkedIcon">
							<img src={checkIcon} alt="" />
						</div>
						<div className="fact">
							Бесплатный пробный период
						</div>
					</div>
					
					<div className="secondFact facts">
						<div className="checkedIcon">
							<img src={checkIcon} alt="" />
						</div>
						<div className="fact">
							Прекрасный подбор для компаний
						</div>
					</div>
					</MainSectionFacts>
				</MainSectionInfoContainer>
			</MainSectionContainer>

		</MainSectionWrapper>
	)
}

export default MainSection;