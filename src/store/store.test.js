import * as store from './store';

describe('Hook: store', () => {
    describe('removeListner()', () => {
        it('should remove the listner passed as an argument', () => {
            const output = store.removeListner(['a', 'b', 'c'], 'a')
            expect(output).toEqual(['b', 'c']);
        });
    })

    describe('addListner()', () => {
        it('should add a listner passed as an argument', () => {
            const output = store.addListner(['a', 'b'], 'c')
            expect(output).toEqual(['a', 'b', 'c']);
        })
    });

    describe('notifyAllListners()', () => {
        it('should execute all listners and pass the currentState', () => {
            let count = 0;
            const incCount = (incBy) => count = count + incBy;

            store.notifyAllListners([incCount, incCount, incCount], 2)
            expect(count).toEqual(6);
        });
    });
});