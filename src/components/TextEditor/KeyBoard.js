import React, { Component } from "react";
import Key from "./Key";
import { styled } from '@mui/system';
import { Box } from "@mui/material";

const StyledBox = styled(Box)({
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "center",
    width: '100%',
    '& > button': {
        flex: 1,
        margin: '0.5rem 0.5rem',
        maxWidth: '0.5rem',
    }
})

const StyledDiv = styled('div')({
    backgroundColor: "#ffd55a",
})

class KeyBoard extends Component {

    constructor(props) {
        super(props);
        this.state = props.state
        this.state.keys = {
            english: [
                "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "q w e r t y u i o p [ ] \\",
                "{shift} a s d f g h j k l ; '",
                "z x c v b n m , . / {enter}",
                "{language} {space}"
            ],
            ENGLISH: [
                "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                "Q W E R T Y U I O P { } |",
                '{shift} A S D F G H J K L : "',
                "Z X C V B N M < > ? {enter}",
                "{language} {space}"
            ],
            hebrew: ["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "{shift} ק ר א ט ו ן ם פ [ ] \\",
                "ש ד ג כ ע י ח ל ך ף ; ' {enter}",
                "ז ס ב ה נ מ צ ת ץ , . /",
                "{language} {space}"
            ],
            HEBREW: ["~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                "{shift} ק ר א ט ו ן ם פ { } |",
                'ש ד ג כ ע י ח ל ך ף : " {enter}',
                "ז ס ב ה נ מ צ ת ץ < > ?",
                "{language} {space}"]
        }
        this.state.layoutName = "english"
        this.state.langu4age = "english"
    }

    getSplitLayout = (state) => {
        let keys = []
        for (let i = 0; i < 5; i++) {
            keys.push(state.keys[state.layoutName][i].split(" "))
        }
        return keys
    }

    render() {
        return (
            <StyledDiv>
                {React.Children.toArray(
                    this.getSplitLayout(this.props.state).map((keys) =>
                        <StyledBox>
                            {React.Children.toArray(
                                keys.map((title) =>
                                    <Key state={this.props.state} title={title} />
                                )
                            )}
                        </StyledBox>
                    ))}
            </StyledDiv>
        )
    }
}

export default KeyBoard