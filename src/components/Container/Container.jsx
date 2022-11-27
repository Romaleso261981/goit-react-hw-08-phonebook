import PropTypes from 'prop-types';
import {Wrap} from './Container.style';


export const Container = ({children}) => {
    return(<Wrap>{children}</Wrap>) 
   }

Container.propTypes = {
  children: PropTypes.node,
};


