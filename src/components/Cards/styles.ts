import styled from 'styled-components';
export const FeatureContainer = styled.nav`
     display: flex;
	 justify-content: space-between;
	 width: 100%;
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
  .items-card{
	  width: 100%;
  }
  .feature-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
	width:100%;
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
    align-items: center;
	.feature-sub{
		  font-size: 10pt;
	  }
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
        color: #555;
        font-size: 1em;
        margin-left: 5px;
      }
      .icon-left{
        margin-left:20px;
      }
    }
  }

  .card-menu{
    background-color: #f00;
  }
`;
