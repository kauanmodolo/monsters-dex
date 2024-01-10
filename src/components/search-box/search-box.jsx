import { Component } from "react";
import './search-box.styles.css';

class Searchbox extends Component {
    render() {
        return(
            <input 
        className='search-box' 
        type='search' 
        placeholder='Buscar Monstros' 
        onChange={this.props.onChangeHandler}
          
       ></input>
        )
    }
}

export default Searchbox;