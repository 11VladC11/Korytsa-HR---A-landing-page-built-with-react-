import styled from "styled-components";
export const FormWrapper = styled.div`
width: 100%;
@media screen and (max-width:1000px){
	width: 100%;
	}
`
export const FormContainer = styled.form`
width: 100%;

	/* .change{
		height:2.625rem ;
		width: 100%;
		margin:1rem 0 ;
	} */
	
	
	`
export const PersonalInformation = styled.div`
	display:flex ;
	justify-content:space-between ;
	gap:2.5rem ;
	@media screen and (max-width:1000px){
		flex-direction:column ;
		gap: 0;
	}
	.jumi{
		width:50% ;
	@media screen and (max-width:1000px){
		width: 100%;
	}
}

`
export const FormInput = styled.input`
	padding: 1rem 0.625rem 1rem 1.375rem;
	background: #FFF2F2;
	border-radius: 0.125rem;
	color:#B99FAC !important;
	outline:none ;
	font-family: 'Lora', serif;
	font-size: 1.125rem;
	width:100% ;
	box-sizing:border-box ;
	transition:all 0.3s ease;
	border: 1px solid #FACFCF;
	&:hover{
		background:#050D1B ;
	}
	
	&:focus{
		color:#2F80ED ;
		border:1px solid #2F80ED ;
	}


`
export const InputSection = styled.div`
margin-top:1.5rem ;
label{
	font-family: 'Lora', serif;
	font-size: 1.125rem;
	color:#6B545F ;
	font-weight:400 ;
	display:block ;
	margin-bottom:0.75rem ;
}

#problem{
	height:7.25rem ;
}
.phoneInput{
position: relative;
.error{
	font-size:0.8rem ;
	position:absolute ;
	bottom:-1.2rem ;
	color:#D63535 ;

}
}

`

export const SuccessSubmit = styled.div`
transition:all 0.3s ease ;
margin:1rem 0 ;
background: #2FA62D;
border-radius: 0.75rem;
width: 100%;
font-size:0.875rem ;
padding:0.75rem ;
display:flex ;
align-items:center ;
box-sizing:border-box ;
justify-content:space-between ;
div{
	display:flex ;
	align-items:center ;
	img{
		width: 1rem;
		margin-right:0.625rem ;
		cursor:default ;
	}
}
img{
	width: 1rem;
	cursor: pointer;
}
`
export const TextArea = styled.textarea`
	resize:none ;
	padding: 1rem 1.375rem 0rem 1.375rem;

	background: #FFF2F2;
	border-radius: 0.125rem;
	color:#B99FAC ;
	outline:none ;
	width:100% ;
	font-family: 'Rubik', sans-serif;
	font-size:1rem ;
	box-sizing:border-box ;
	transition:all 0.3s ease;
	border: 1px solid #FACFCF;

	&:hover{
		background:#050D1B ;
	}
	&:focus{
		color:#2F80ED ;
		border:1px solid #2F80ED ;
	}
`

export const FormButton = styled.button`
margin:0 0 0 auto  ;
padding: 1.375rem 2rem 1.375rem 2rem;
font-family: 'Lora', serif;
font-size: 1.125rem;
line-height: 1.3rem;
color: #FFFFFF;
font-weight:400 ;
border:none ;
outline:none ;
cursor:pointer ;
border-radius: 0.125rem;
transition:all 0.3s ease ;
background:#CF4969;
	@media screen and (max-width:1000px){
		width: 100%;
	}
`

export const SubmitButton = styled.div`
width: 100%;
margin-top:1rem ;
text-align: end;

`