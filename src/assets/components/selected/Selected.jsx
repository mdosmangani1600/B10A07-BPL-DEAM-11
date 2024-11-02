
import PropTypes from 'prop-types'
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer'

const Selected = ({selected}) => {
  return (
    <div>
            
            <h2>selected : {selected.length}</h2>
            {
                selected.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.playerId} selectedPlayer={selectedPlayer}></SelectedPlayer>)
            }
        </div>
  )
}

Selected.propTypes = {
    selected:PropTypes.array

}

export default Selected
