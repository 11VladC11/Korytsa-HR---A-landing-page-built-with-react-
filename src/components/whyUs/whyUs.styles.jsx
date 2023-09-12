import styled from "styled-components";

export const WhyUsWrapper = styled.div`
width: 100%;
padding: 9.375rem 0 7.5rem 0;
`

export const WhyUsContainer = styled.div`
	width: 79.81rem;
	margin: 0 auto;
	h1{
	margin-bottom: 1.375rem;
	}
	h2{
		margin-bottom: 2.5rem;
	}
`

export const ReliabilityContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const ReliabilityInfo = styled.div`
ul{
	padding: 0;
	li{
		display: flex;
		align-items: center;
		.iconImage{
			width: 3.5rem;
			height: 3.5rem;
			border-radius: 0.125rem;
			display: flex;
			align-items: center;
			justify-content: center;
			background: linear-gradient(101.91deg, rgba(199, 137, 137, 0.15) 0.74%, rgba(255, 255, 255, 0.0825) 73.93%, rgba(237, 0, 0, 0.15) 104.07%);
			box-shadow: 0px 4px 8px 0px #0000002E;
			margin-right: 1.125rem;
		}

		.description{
			font-family: 'Lora', serif;
			color: #6B545F;
			font-size: 1.125rem;
			font-weight: 500;
		}

	}	
}

`

export const ReliabilityImage = styled.div`
	img{
		width: 46.68rem
	}
`

export const NumbersContainer = styled.div`
	margin-top: 2.5rem;
	display: flex;
	justify-content: space-between;
	gap: 4.25rem;
`

export const NumbersInfo = styled.div`
h2{
	width: 32rem;
}
	ul{
		margin-top: 3.75rem;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		row-gap: 2rem;
		li{
			width: 50%;
			span{
				font-family: 'Lora', serif;
				font-size: 1.875rem;
				font-weight: 600;
				color: #94265C;
			}
			h2{
				font-weight: 500;
				margin-top: 0.75rem;
			}
		}
	}
`

export const NumbersImage = styled.div`
	img{
		width: 38.87rem
	}
`


