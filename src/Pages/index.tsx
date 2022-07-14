import React from 'react';
import { GrapesjsReact } from 'grapesjs-react';
import 'grapesjs-preset-webpage';
import "grapesjs/dist/css/grapes.min.css";

export const Primary = () => {
    return <GrapesjsReact
        id='grapesjs-react'
        plugins={[
            "gjs-blocks-basic",
        ]}
    />;
};

export default Primary;