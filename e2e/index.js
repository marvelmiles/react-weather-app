import {Selector} from 'testcafe';

fixture `Running weather app`
    .page `http://localhost:5000`;

test('Get weather report Page', async t=>{
    const  searchBar = Selector('#search');
    await t.expect(await searchBar.exists).ok();
    await t
        .typeText(searchBar,'Lagos')
        .pressKey('enter');
    await t.expect(await Selector('#report').exists).ok();
});