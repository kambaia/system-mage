import styled from 'styled-components';
export const FeatureContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  flex-direction: row;



  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #1111;
  }

  .feature-items {
    flex: 1;
    margin: 10px 10px;
    padding: 30px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 11px -1px #ddd;
    box-shadow: 0px 0px 11px -1px #ddd;

    border: 2px solid #ddd;
    background: #fff;
  }
  .feature-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icons {
      font-size: 3em;
	  color: ${({ theme }) => theme.backgroundBlue};
    }
  }
  .feature-title {
    font-size: 1.2em;
  }
  .feature-money-container {
    margin: 10px 0;
    display: flex;
    align-items: center;
    .feature-money {
      font-size: 1.5em;
      font-weight: 600;
    }
  }

  .percentage {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .feature-rate {
      display: flex;
      align-items: center;
      margin-left: 2em;

      .icon-growth {
        color: green;
        font-size: 1em;
        margin-left: 5px;
      }
      .icon-decrease {
        color: red;
        font-size: 1em;
        margin-left: 5px;
      }
    }
  }
`;
