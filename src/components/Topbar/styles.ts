import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  z-index: 999;
  flex:1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  padding-right: 30px;
  border-bottom: 1px solid #ddd;
  width: calc(100% - 320px);
  left: 300px;
 

  background: #fff;
  .tobar-option{
    display: flex;
    flex: 4;
    display: flex;
    align-items: center;
  }
 
  .toggle {
    position: relative;
    top: 0px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5em;
    cursor: pointer;
	.icon-toggle{
		color: #555;
    font-size: 25px;
	}
  }

  .search {
    position: relative;
    margin-left: 250px;

  }
  .search label {
    width: 100%;
    position: relative;
  }

  .search label input {
    width: 100%;
    border-radius: 40px;
    font-size: 18px;
    border: 1px solid var(--black3);
    outline: none;
    padding: 10px;
    padding-left:20px;
    width: 350px;
  }

  .search label ion-icon {
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 1.2em;
  }

  .user {
      display: flex;
      align-items: center;
      width: 100px;
      border: 1px solid var(--blue);
      border-radius: 50px;
      padding:2px 10px;
      span{
        margin-left: 10px;
        font-size: 1.2em;
      }
  }
  .user img {
    object-fit: cover;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
 
  }
`

export const MenusLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  .menus-left{
    display: flex;
    align-items: center;
    span{
      margin-left: 20px;
        background-color: var(--white);
        border-radius: 50%;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      a {
        padding: 5px;
       
        .icons{
          font-size:18px;
          padding: 8px;
          color: #287bff;
        }
      }
    }
  }

`