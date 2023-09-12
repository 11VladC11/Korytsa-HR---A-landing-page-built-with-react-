import styled from "styled-components";

export const ServicesWrapper = styled.div`
padding-top: 3.625rem;
padding-bottom: 12.7rem;
width: 100%;
position: relative;
img.leftLine{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 23.43rem;
}
img.rightLine{
	position: absolute;
	right: 0;
	top: 3rem;
	width: 17.37rem;
}
`


export const ServicesHeader = styled.h1`
text-align: center;
font-weight: 500;
margin-bottom: 2.625rem;
`
export const ServicesContainer = styled.div`
	width: 79.81rem;
	margin: 0 auto;
ul{
	margin: 0;
	display: flex;
	flex-wrap: wrap;
	row-gap: 6.25rem;
	column-gap: 1rem;
	padding: 0;
	li{
		padding: 1.25rem 1.5rem 1.25rem 1.5rem ;
		width: 22rem;
		.logoIcon{
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
		h1{
			font-size: 1.125rem;
			font-weight: 600;
			margin-top: 1.625rem;
		}
		h2{
			font-weight: 400;
			font-size: 1rem;
			margin-top: 0.75rem;
			width: 21rem;
		}
	}
}
	
`

