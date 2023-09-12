import { ServicesContainer, ServicesHeader, ServicesWrapper } from "./services.styles";
import mailVector from '../../assets/icons/mail_vector.svg'
import leftLine from '../../assets/img/left_line-min.png'
import rightLine from '../../assets/img/right_line-min.png'

const Services =()=>{
	return(
		<ServicesWrapper>
			<img src={leftLine} alt="" className="leftLine" />
			<img src={rightLine} alt="" className="rightLine" />
			<ServicesContainer>
			<ServicesHeader>Услуги</ServicesHeader>
				<ul>
					<li>
						<div className="logoIcon">
							<img src={mailVector} alt="" />
						</div>
						<h1>Найм и подбор персонала</h1>
						<h2>Разработка вакансий и описаний должностей, поиск кандидатов, проведение собеседований и оценка кандидатов.</h2>
					</li>
					<li>
						<div className="logoIcon">
							<img src={mailVector} alt="" />
						</div>
						<h1>Найм и подбор персонала</h1>
						<h2>Разработка вакансий и описаний должностей, поиск кандидатов, проведение собеседований и оценка кандидатов.</h2>
					</li>
					<li>
						<div className="logoIcon">
							<img src={mailVector} alt="" />
						</div>
						<h1>Найм и подбор персонала</h1>
						<h2>Разработка вакансий и описаний должностей, поиск кандидатов, проведение собеседований и оценка кандидатов.</h2>
					</li>
					<li>
						<div className="logoIcon">
							<img src={mailVector} alt="" />
						</div>
						<h1>Найм и подбор персонала</h1>
						<h2>Разработка вакансий и описаний должностей, поиск кандидатов, проведение собеседований и оценка кандидатов.</h2>
					</li>
					<li>
						<div className="logoIcon">
							<img src={mailVector} alt="" />
						</div>
						<h1>Найм и подбор персонала</h1>
						<h2>Разработка вакансий и описаний должностей, поиск кандидатов, проведение собеседований и оценка кандидатов.</h2>
					</li>
					<li>
						<div className="logoIcon">
							<img src={mailVector} alt="" />
						</div>
						<h1>Найм и подбор персонала</h1>
						<h2>Разработка вакансий и описаний должностей, поиск кандидатов, проведение собеседований и оценка кандидатов.</h2>
					</li>
				</ul>
			</ServicesContainer>
		</ServicesWrapper>
	)
}

export default Services;