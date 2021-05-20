import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should corectly render expenseSummary wih 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should corectly render expenseSummary wih multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={98712310231} />);
    expect(wrapper).toMatchSnapshot();
});

