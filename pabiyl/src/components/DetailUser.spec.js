import detailUser from './DetailUser';
const expect = global.expect;

describe('detailUser', () => {
    test('Had to recieve a detail user', (done) => {
        const url = 'http://localhost:4200/api/detailUser/';
        detailUser().then(name => {
            expect(name).toBeEqual('MartaGutierrez');
            done();
        });
    });
});