import { NumbersContainer, NumbersImage, NumbersInfo, ReliabilityContainer, ReliabilityImage, ReliabilityInfo, WhyUsContainer, WhyUsWrapper } from "./whyUs.styles";
import reliabilityBackground from '../../assets/img/right_personal-min.png'
import numbersBackground from '../../assets/img/left_personal-min.png'
import mailVector from '../../assets/icons/mail_vector.svg'
import puffVector from '../../assets/icons/puff_vector.svg'
import likeVector from '../../assets/icons/like-vector.svg'
import graphVector from '../../assets/icons/graph_vector.svg'



const WhyUs = ()=>{
	return(
		<WhyUsWrapper>
			<WhyUsContainer>
				<ReliabilityContainer>
					<ReliabilityInfo>
						<h1>Korytsa HR - Надёжность</h1>

						<h2>Добро пожаловать в “Korytsa HR” – вашего надежного партнера в управлении персоналом. Мы помогаем бизнесам достигать успеха через эффективное управление людскими ресурсами.</h2>

						<ul>
							<li>
								<div className="iconImage">
									<img src={mailVector} alt="" />
								</div>
								<div className="description">
									Good parameters
								</div>
							</li>

							<li>
								<div className="iconImage">
									<img src={puffVector} alt="" />
								</div>
								<div className="description">
									Fresh view about hr
								</div>
							</li>

							<li>
								<div className="iconImage">
									<img src={likeVector} alt="" />
								</div>
								<div className="description">
									Amazing customers reaction
								</div>
							</li>

							<li>
								<div className="iconImage">
									<img src={graphVector} alt="" />
								</div>
								<div className="description">
									Best results in short terms
								</div>
							</li>
						</ul>
					</ReliabilityInfo>

					<ReliabilityImage>
						<img src={reliabilityBackground} alt="" />
					</ReliabilityImage>
				</ReliabilityContainer>
				
				<NumbersContainer>
					<NumbersImage>
						<img src={numbersBackground} alt="" />
					</NumbersImage>
					
					<NumbersInfo>
						<h1>Цифры тоже важны!</h1>
						<h2>Добро пожаловать в “Korytsa HR” – вашего надежного партнера в управлении персоналом. Мы помогаем бизнесам достигать успеха через эффективное управление людскими ресурсами.</h2>

						<ul>
							<li>
								<span>2</span>
								<h2>часа, покажем кандидата</h2>
							</li>

							<li>
								<span>15</span>
								<h2>Консультантов</h2>
							</li>
							
							<li>
								<span>300+</span>
								<h2>Выполненных проектов</h2>
							</li>
							
							<li>
								<span>10 000+</span>
								<h2>Просмотренных резюме</h2>
							</li>
						</ul>
					</NumbersInfo>		
				</NumbersContainer>
			</WhyUsContainer>
		</WhyUsWrapper>
	)
}


export default WhyUs;