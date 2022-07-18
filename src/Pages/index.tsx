import React, { useState } from 'react';
import { GrapesjsReact } from 'grapesjs-react';
import 'grapesjs-preset-webpage';
import "grapesjs/dist/css/grapes.min.css";
import addListPlugin from '../Plugins/Cards';
export const Primary = () => {

    const [pluginLoaded, setPluginLoaded] = useState(false);

    if (!pluginLoaded) {
        // addListPlugin();
        setPluginLoaded(true);
    }
    return <GrapesjsReact
        id='grapesjs-react'
        plugins={[
            "gjs-blocks-basic",
            addListPlugin
        ]}
    />;
};

export default Primary;