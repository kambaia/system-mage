import styled from 'styled-components';
export const FieldError = styled.div`
    font-size: 1.75rem;
	color: ${({ theme }) => theme.error};
    :focus{
      border:none;
    }
`;