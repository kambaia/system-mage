import styled from "styled-components";

/* Modal */
export const Container = styled.section`
.overlay {
    /* background-color: rgba(0, 0, 0, 0.5); */
    position: fixed;
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  
  .modalContainer {
    max-width: 600px;
    width: 100%;
    position: fixed;
    margin: auto;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    display: flex;
 
    background-color: #ffffff;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    border-radius: 8px;
  }
  
  img {
    width: 350px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  
  .modalRight {
    width: 100%;
  }
  
  .closeBtn {
    position: fixed;
    top: 8px;
    right: 8px;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    padding: 1rem 1rem;
  }
  .body-main{
    padding: 1rem 1rem;
    margin-bottom: 2rem;
  }
  .group{
    padding-top: 10px;
    .legend{
      padding-top: 10px;
      font-size: 14pt;
    }
  }
  .header-modal{
    padding: 1rem 0rem;
    h3{
      border-bottom: 2px solid ${({ theme }) => theme.backgroundBlue};
      padding: 1rem 0rem;
      font-size: 1.2em;
    }
  }
  .closeBtn{
    cursor: pointer;
  }
  .btnContainer {
    display: flex;
    margin-top: 1rem;
  }
  .btnContainer button {
    width: 100%;
    margin: 0 .1rem;
    padding: 16px 0;
    /* border: none; */
    border: 1px solid #411b57;
    /* color: #ffffff; */
  }
  
  .btnPrimary {
    background-color: ${({ theme }) => theme.backgroundBlue};
    color: white;
  }
  
  .btnOutline {
    /* background-color: #a76a99; */
    background-color: white;
    color: #411b57;
  }
  
  .bold {
    font-weight: 600;
  }
  
  @media screen and (max-width: 500px) {
    .modalContainer {
      flex-direction: column;
      top: 0;
      left: 0;
      transform: none;
      width: 100%;
      height: 100vh;
    }
    img {
      width: 100%;
      max-height: 70vh;
      object-fit: cover;
    }
  
    .heading {
      margin: 1rem;
    }
  }
  `;

  
export const CardButton = styled.div`
margin: 0 auto;
display: flex;
flex-direction: row;
align-content: center;
justify-content: flex-end;
width: 100%;
button {
background-color: ${({ theme }) => theme.greanButton};
opacity: 1;
:hover{
  background-color: ${({ theme }) => theme.greanButton};
  opacity: 0.8;
}
}
`;

