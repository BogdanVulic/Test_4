import styled from 'styled-components';

const StyledLaunch = styled.div`
    padding: 10px;
    max-width: 200px;
    background-color: rgb(200, 200, 200);
`;

const Launch = ({ launch, rockets }) => {

    const rocket = rockets.filter(rocket => rocket.id === launch.rocket)

    return (
        <StyledLaunch>
            <img src={launch.links.patch.small} />
            <p>{launch.name}</p>
            <p>{new Date(launch.static_fire_date_unix * 1000).toLocaleString()}</p>
            <details className="info">
                <p>{rocket[0].name}</p>
                <p>{rocket[0].active ? 'active' : 'not active'}</p>
            </details>
        </StyledLaunch>
    )
}

export default Launch
