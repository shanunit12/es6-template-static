const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"Contact", sName:"Shannon Halycz"});
    }
    render(sPage) {
        return `
        ${this.requireMarked('_pages/contact.md')}
        `;
    }
}