import PropTypes from 'prop-types';

const SelectedPlayer = (selectedPlayer) => {
    const {image, name, role } = selectedPlayer;
    console.log(selectedPlayer);
    return (
        <div>
            <img src={image} alt="" />
            <h3> Name:{name}</h3>
            <h4>role :{role}</h4>


        </div>
    );
};

SelectedPlayer.propTypes ={
    selectedPlayer: PropTypes.object.isRequired
}

export default SelectedPlayer;