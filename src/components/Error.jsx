import styled from "@emotion/styled"

const TextoError = styled.h1`
    color:#fff;
    text-align: center;
    background-color: #8f0000;
    padding: 15px;
    font-size: 22px;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    
`

const Error = ({msjErr}) => {
    return (
        <div>
            <TextoError>{msjErr}</TextoError>
        </div>
    )
}

export default Error
