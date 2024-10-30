import styled from "@emotion/styled";

const ProjectContainer = styled.div`
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: ${props => props.bgColour};
    & > h1 {
      padding-bottom: 5px;
      margin: 0px 20px;
      border-bottom: solid 2px black
    }
`

const ProjectTemplate = ({children, heading, bgColour}) => {
    return (
        <ProjectContainer bgColour={bgColour}>
            <h1>{heading}</h1>
            <div>
              {children}
            </div>

        </ProjectContainer>
    )
}

export default ProjectTemplate;