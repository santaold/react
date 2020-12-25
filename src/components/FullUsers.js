import customContext from "../services/ContextService";

export default function FullUser(props) {

    const {items} = props;
    let {Provider, Consumer} = new customContext();


    return (
        <Consumer>
            {
                (contextData) => {
                    return {items.map(value => (<div>{value.id}-{value.username}-{contextData}</div>))}
                }
            }
        </Consumer>
    );
}
