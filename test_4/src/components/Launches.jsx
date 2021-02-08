import styled from 'styled-components';
import Launch from './Launch';

const StyledLaunches = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
`;

const Launches = ({ launches, rockets }) => {
    return (
        <StyledLaunches>
            {launches.map(launch => <Launch key={launch.id} launch={launch} rockets={rockets}></Launch>)}
        </StyledLaunches>
    )
}

export default Launches
