import React from "react";
import styled from "styled-components";

export const Header = () => {
    return (
        <header>
            <HeaderLinks>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#"}>News Feed</a></li>
                <li><a href={"#"}>Messages</a></li>
            </HeaderLinks>
        </header>
    )
}

const HeaderLinks = styled.ul`
  display: flex;
`