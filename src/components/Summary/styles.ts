import styled from "styled-components";

export const Container = styled.div`  
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;   */

    display: flex;
    align-items: center;
    justify-content: space-between;   

    margin-top: -4rem;  

    div {
        background: var(--shape);
        color: var(--text-title);
        width: 22rem;        
        border-radius: .313rem;
        padding: 1rem 2rem;   
        
        &:last-child {
            background: var(--green);
            color: var(--shape);
        }

        header { 
            display: flex;
            align-items: center;
            justify-content: space-between;            
        }

        strong {  
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;            
        }
    }
`