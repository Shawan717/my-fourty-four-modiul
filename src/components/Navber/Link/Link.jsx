import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li className="ml-3" >
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};
Link.protoTypes={
    route: PropTypes.object
}
export default Link;