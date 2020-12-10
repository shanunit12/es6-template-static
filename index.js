const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"Home", sName:"Shannon Halycz"});
    }
    render(sPage) {
        return `
        ${this.requireMarked('_pages/index.md')}
        `;
    }
}