import styled from "styled-components";

export const MainSectionWrapper = styled.div`
	margin: 0;
	position: relative;
	width: 100%;
	height: 56.25rem;
	overflow: hidden;
`
export const MainSectionBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	img{
		width: 100%;
	}

`

export const MainSectionContainer = styled.div`
 position: relative ;
`
export const MainSectionInfoContainer = styled.div`
padding-top: 16.93rem;
text-align: center;
	
`
export const MainSectionTitle = styled.div`
	h1{
		font-size: 3.25rem;
	}
`

export const MainSectionDescription = styled.div`
	h2{
		font-size: 1.25rem;
		color: #5A4650;
		margin-top: 1.125rem;
	}
	
`

export const MainSectionFacts = styled.div`
	margin-top: 5.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2.625rem;

	.facts{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		.checkedIcon{
			width: 1.5rem;
			height: 1.5rem;
			background-color: #CF4869;
			border-radius: 100rem;
					display: flex;
		align-items: center;
		justify-content: center;
		}
	}
`