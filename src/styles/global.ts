import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};
    }
  }

  body {
    background: ${props => props.theme.backgroundLight};
    font: 400 1rem 'Montserrat', sans-serif;
  }
    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #fff;
        a{
          transition: 0.5s;
          color: black;
          &.button{
            color: #fff;
          }
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }
      .Services .header-services p {
         color: rgb(78, 78, 78);
      }
      .Services .CardZone .Card1,
      .Card2,
      .Card3 {
        border: 1px solid var(--bColor-light);
      }
      .Packs .CardC, .CardL {
        border: 1px solid var(--bColor-light);
        border-top: 3px solid #0054a6;
        border-bottom: 3px solid #0054a6;
      }
      .card_content .card {
        border: 1px solid var(--bColor-light);
      }
      .content{
        .title{ }
        .form-contact{
            form{
            .label {
              color: #000;
            }
           }
        }
        
        .address{
          color: #000;
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color:var(--blue-strong) ;
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--blue);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
        button{
          color: #ddd;
        }
      }
 /*  session pages pagamemtos */
 .header-slog {
        h1.ligt-mode {
          color: var(--black);
        }
        .sub-slog {
          padding: 10px;
          h4 {
            color: #9ea8ca;
          }
        }
      }
    .schools-available {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px;

      .university,
    .school-college {
      div {
        h3 {
          color: #555;
        }
      }
      width: 40%;
      display: flex;
      align-items: center;
      flex-direction: column;
      .logo-schools {
        display: flex;
        align-items: center;
        width: 80%;
        height: 100px;

        li {
          display: flex;
          align-items: center;
          object-fit: cover;
        }
      }
    }
 

    }
    .service-payment{
      .header-title {
        h2, h3{
          color: #555;
        }
        
      }
    }
      .education {

        .ed-title {
            font-size: 2.5em;
            color: #555;
          }
    }
    .teach-description{
      h2{
        color: var(--black);
      }
     
    }
    .sistem-img-illustrate{
      .ligt{
        color: var(--black);
      }
    }
    .sistem-img-exemple {
      div:nth-child(1) {
        order: 2;
        h3 {
          font-size: 2em;
          color: var(--black);
          padding: 40px 0px;
        }
        p {
          font-size: 16pt;
          color: var(--black);
        }
      }

    }
  }


  img {
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }

`;
