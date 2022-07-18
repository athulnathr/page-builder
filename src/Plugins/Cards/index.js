import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';

// export default function addListPlugin() {}
export default grapesjs.plugins.add("swiperComponent", (editor, opts = {}) => {
    let options = {
        label: 'Swiper',
        name: 'cswiper',
        category: 'Custom'
    };

    for (let name in options) {
        if(!(name in opts)) opts[name] = options[name]
    }

    loadBlocks(editor, opts);
    loadComponents(editor, opts)
})
