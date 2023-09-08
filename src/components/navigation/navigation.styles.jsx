import styled from "styled-components";

export const NavigationWrapper = styled.div`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	color: #632041;
	font-size: 1.125rem;
	font-family: 'Lora', serif;
	font-weight: 400;
	padding-top: 1.875rem;


`
export const NavigationContainer = styled.div`
	width: 79.81rem;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1.875rem 0 1.875rem;

`
export const NavigationLogo = styled.div`
	img{
		width: 12.96rem;
	}
`
export const NavigationLinks = styled.div`
	width: 22.62rem;
	ul{
		display: flex;
		justify-content: space-between;
		a{
			transition: all 0.2s ease;
		}
		a:hover{
			color:#999999;
			transition: all 0.2s ease;
		}
	}
`
export const NavigationContacts = styled.div`
	font-size: 1.5rem;

	ul{
		display: flex;
		justify-content: space-between;
		
		
		li.phone{
			margin-right: 1.75rem;
			a {
				height: 1.875rem;
				display: flex;
				align-items: center;
			}

			img{
				width: 1.81rem;
				margin-right: 0.6rem;
				
			}
		} 
		li.telegramIconLink{
			margin-right: 0.75rem;
		}
	}
 
`