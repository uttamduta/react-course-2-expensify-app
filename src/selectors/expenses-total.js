import expenses from "../tests/fixtures/expenses";

// export default (expenses) => {
//     if (expenses.length === 0) {
//         return 0;
//     }
//     else {
//         return expenses
//             .map((expense) => expense.amount)
//             .reduce((sum, value) => sum + value 
//                 , 0);
//     }
// };

// using common code and making use of default 0 in reduce function to return 0 when no epense array
export default (expenses) => {

    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value
            , 0);

};

