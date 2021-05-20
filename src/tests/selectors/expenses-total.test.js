import selectExpenesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
    const resp = selectExpenesTotal([]);
    expect(resp).toBe(0);
});

test('should correctly add up a single expense', () => {
    const resp = selectExpenesTotal([expenses[0]]);
    expect(resp).toBe(195);
});

test('should correctly add up a multiple expenses', () => {
    const resp = selectExpenesTotal(expenses);
    expect(resp).toBe(114195);
});
