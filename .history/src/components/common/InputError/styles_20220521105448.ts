import styled from 'styled-components';
export const Container = styled.div`
padding: 20px 0px;
.input-selet{
    font-size: "1.75rem";
    :focus{
      border:none;
    }
	${({ theme }) => theme.greanButton};
}
`;