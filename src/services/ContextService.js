import * as React from "react";

export default function customContext() {

    const [Provider, Consumer] = React.createContext(null);

    return {Provider, Consumer}


};