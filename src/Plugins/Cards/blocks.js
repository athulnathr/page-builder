export default (editor, opts = {}) => {
    // console.log(editor , 'editor');
    const bm = editor.BlockManager;
    bm.add(opts.name, {
        label: `<i class="fa fa-arrow-h"></i>
        <div class="gjs-block-label">
        ${opts.name}
        </div>
        `,
        category: opts.category,
        content:`<div>Swiper</div>`
    })
}