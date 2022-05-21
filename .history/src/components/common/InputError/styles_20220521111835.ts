import styled from 'styled-components';
export const FieldError = styled.div`
    font-size: 1.15rem;
	color: ${({ theme }) => theme.error};
    :focus{
      border:none;
    }
`;