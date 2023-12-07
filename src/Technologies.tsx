import React from "react";
import styled from "styled-components";

export const Technologies = () => {
    return (
        <ul>
            <ListItem>HTML</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Styled Components</ListItem>
        </ul>)
}

const ListItem = styled.li`
  list-style-type: georgian;
`