import styled from 'styled-components';
export const FieldError = styled.div`
    font-size: 1.75rem;
	color: ${({ theme }) => theme.error};
	background-color: #f00;
    :focus{
      border:none;
    }
`;