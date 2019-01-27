import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import {fontSize1, greenBoxShadow, color3} from "../Shared/Styles"

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: ${color3};
    padding: 5px;
    cursor: pointer;
    &:hover {
        ${greenBoxShadow}
    }
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