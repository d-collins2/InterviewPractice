/*
We have an array A of integers, and an array queries of queries.

For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.

(Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)

Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.
*/
const A = [1,2,3,4]
const queries = [[1,0],[-3,1],[-4,0],[2,3]]

function sumEvenAfterQueries(array, queries) {
  const result = []
  for(let query of queries){
    array[query[1]] += query[0]

    const sum = 0
    array.forEach((val) => {
      if(val % 2 === 0){
        sum += val
      }
    })
    result.push(sum())
  }
  return result
};

sumEvenAfterQueries(A, queries)
