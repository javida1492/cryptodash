import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer;
`;

export const CenterDiv = styled.div`
    display: grid;
    justify-context: center;
`;

export default function () {
    return (
        <AppContext.Consumer>
            {({confirmFavorites}) => 
                <ConfirmButtonStyled>
                    <CenterDiv>
                        <ConfirmButtonStyled onClick={confirmFavorites}>
                            Confirm Favorites
                        </ConfirmButtonStyled>
                    </CenterDiv>
                </ConfirmButtonStyled> 
            }
        </AppContext.Consumer>
    );
}