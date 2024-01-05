import { useState } from 'react';
import styled from 'styled-components';
import ISingUp from './interfaces/ISingUp';

import Google from './assets/img/Google';
import Facebook from './assets/img/Facebook';
import Twitter from './assets/img/Twitter';
import eyeOpen from './assets/img/eye-open.svg';
import eyeClosed from './assets/img/eye-closed.svg'

const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: .7rem;
  height: calc(100vh - 4rem);
  padding: 2rem;
  width: calc(100% - 4rem);
`;

const StyledTitle = styled.h1`
  color: #EF233C;
  font-size: 3rem;
  font-family: var(--title-font);
  margin-top: auto;
  margin-bottom: 2rem;
`;

const StyledInputContainer = styled.div`
  display: flex;
  gap: .8rem;
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  background-color: aliceblue;
  border: none;
  border-radius: 10px;
  color: #2B2D42;
  font-weight: 500;
  height: 2.4rem;
  outline: 2px solid rgba(0,0,0,0);
  padding-left: 1rem;
  transition: outline .2s ease-in;
  width: 100%;

  &:focus {
    outline: 2px solid #EF233C;
  }

`;

const StyledInputSmall = styled(StyledInput)`
  width: calc(50% - .6rem);
`;

const StyledButton = styled.button`
  background-color: #EF233C;
  border: none;
  border-radius: 8px;
  color: aliceblue;
  font-weight: 800;
  height: 2.8rem;
  width: 100%;
`;

const StyledSpan = styled.span`
  color: #2B2D42;
  font-family: var(--text-font);
  font-size: .870rem;
  margin: 1.3rem 0 .5rem 0;
`;

const StyledSpanLast = styled(StyledSpan)`
  margin: 1rem 0 4rem 0;
`;

const StyledLoginOthers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 35%;
`;

const StyledStrong = styled.strong`
  color: #EF233C;
  font-weight: 700;
  text-decoration: underline;
`;

const StyledPasswordButton = styled.button`
  border: none;
  background-color: transparent;
  bottom: calc(50% - .7rem);
  height: 1.2rem;
  margin-right: .5rem;
  position: absolute;
  right: 0;
`;

const VisibilityEye = styled.img`
  height: 1rem;
  width: 1rem;
`;

function App() {
  const [firstName, setValueFirstName] = useState("");
  const [lastName, setValueLastName] = useState("");
  const [birthDate, setValueBirthDate] = useState("");
  const [street, setValueStreet] = useState("");
  const [neighborhood, setValueNeighborhood] = useState("");
  const [number, setValueNumber] = useState("");
  const [email, setValueEmail] = useState("");
  const [password, setValuePassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [visibilityIcon, setVisibilityIcon] = useState(eyeClosed);


  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const singUp: ISingUp = {
      firstName,
      lastName,
      birthDate,
      street,
      neighborhood,
      number,
      email,
      password
    };
    console.log(singUp);
  }

  const togglePasswordVisiblity = () => {
    setPasswordVisibility((prevShowPassword) => !prevShowPassword);
    setVisibilityIcon((prevIcon: HTMLOrSVGImageElement) => prevIcon === eyeClosed ? eyeOpen : eyeClosed);
  }

  return (
    <>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledTitle>Sign Up</StyledTitle>

          <StyledInputContainer>
            <StyledInputSmall 
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setValueFirstName(event.target.value)}
            />
            <StyledInputSmall 
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => setValueLastName(event.target.value)}
            />
          </StyledInputContainer>

          <StyledInputContainer>
            <StyledInput
                type="text"
                placeholder="Birth Date"
                value={birthDate}
                onChange={(event) => setValueBirthDate(event.target.value)}
            />
          </StyledInputContainer>

          <StyledInputContainer>
            <StyledInput
                type="text"
                placeholder="Street"
                value={street}
                onChange={(event) => setValueStreet(event.target.value)}
            />
          </StyledInputContainer>

          <StyledInputContainer>
          <StyledInputSmall 
              type="text"
              placeholder="neighborhood"
              value={neighborhood}
              onChange={(event) => setValueNeighborhood(event.target.value)}
            />
            <StyledInputSmall 
              type="text"
              placeholder="Nº"
              value={number}
              onChange={(event) => setValueNumber(event.target.value)}
            />  
          </StyledInputContainer>

          <StyledInputContainer>
            <StyledInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setValueEmail(event.target.value)}
            />
          </StyledInputContainer>

          <StyledInputContainer>
            <StyledInput
                type={passwordVisibility ? "text" : "password" }
                placeholder="Password"
                value={password}
                onChange={(event) => setValuePassword(event.target.value)}
            />
            <StyledPasswordButton type="button">
              <VisibilityEye 
                src={visibilityIcon} 
                onClick={togglePasswordVisiblity}
              />
            </StyledPasswordButton>
          </StyledInputContainer>
          
          <StyledSpan>or</StyledSpan>
          <StyledLoginOthers>
            <Google />  <Facebook /> <Twitter />   
          </StyledLoginOthers>
          <StyledButton type="submit">Create Account</StyledButton>
          <StyledSpanLast>Already have account? <StyledStrong>Login.</StyledStrong></StyledSpanLast> 
      </StyledForm>       
    </>
  );
}

export default App;
