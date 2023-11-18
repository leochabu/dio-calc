import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background-color: #00AAF0;
    ${props => props.variant === 'equals' ? 'background-color: #60686b;' : ''} 
    padding: 20px;
    border: 1px solid #CDCDCD;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    
    &:hover {
        opacity: 0.6;
    }
    
`