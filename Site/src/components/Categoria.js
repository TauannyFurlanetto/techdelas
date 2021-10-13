import PropTypes from "prop-types";
import {selectCat} from'../js/pesquisa.js';
function Categoria ({classe, txt}){
    return(
        <li onClick = {e=>{selectCat(e.target)}} style= {{fontWeight: "500"}} className = {classe}>{txt}</li>
    )
}

Categoria.propTypes = {
    classe: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired
}
export default Categoria