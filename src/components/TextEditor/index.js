import {Component} from 'react'
import {VscBold, GoItalic, AiOutlineUnderline} from 'react-icons/all'

import {
  AppBgContainer,
  ContentContainer,
  FirstContainer,
  SecondContainer,
  Heading,
  BtnContainer,
  StyledBtn,
  StyledTextarea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBoldClicked: false,
    isItalicClicked: false,
    isUnderLineClicked: false,
  }

  onBoldClick = () => {
    console.log('Bold')
    this.setState(prevState => ({
      isBoldClicked: !prevState.isBoldClicked,
    }))
  }

  onItalicClick = () => {
    this.setState(prevState => ({
      isItalicClicked: !prevState.isItalicClicked,
    }))
  }

  onUnderLineClick = () => {
    this.setState(prevState => ({
      isUnderLineClicked: !prevState.isUnderLineClicked,
    }))
  }

  render() {
    const {isBoldClicked, isItalicClicked, isUnderLineClicked} = this.state
    return (
      <AppBgContainer>
        <ContentContainer>
          <FirstContainer>
            <Heading>Text Editor</Heading>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt=" text editor"
            />
          </FirstContainer>
          <SecondContainer>
            <BtnContainer>
              <StyledBtn
                aria-label="Bold"
                onClick={this.onBoldClick}
                data-testid="bold"
              >
                <VscBold color={isBoldClicked ? '#faff00' : '#f1f5f9'} />
              </StyledBtn>
              <StyledBtn
                aria-label="Italic"
                onClick={this.onItalicClick}
                data-testid="italic"
              >
                <GoItalic color={isItalicClicked ? '#faff00' : '#f1f5f9'} />
              </StyledBtn>
              <StyledBtn
                aria-label="Underlined"
                onClick={this.onUnderLineClick}
                data-testid="underline"
              >
                <AiOutlineUnderline
                  color={isUnderLineClicked ? '#faff00' : '#f1f5f9'}
                />
              </StyledBtn>
            </BtnContainer>
            <StyledTextarea
              rows="4"
              cols="60"
              isBold={isBoldClicked}
              isItalic={isItalicClicked}
              isUnderline={isUnderLineClicked}
            ></StyledTextarea>
          </SecondContainer>
        </ContentContainer>
      </AppBgContainer>
    )
  }
}

export default TextEditor
