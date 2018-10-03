A non-empty array A consisting of N integers is given.<br/>

A permutation is a sequence containing each element from 1 to N once, and only once.<br/>

For example, array A such that:<br/>

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:<br/>

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.<br/>

The goal is to check whether array A is a permutation.<br/>

Write a function:<br/>

    function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.<br/>

For example, given array A such that:<br/>

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.<br/>

Given array A such that:<br/>

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.<br/>

Write an efficient algorithm for the following assumptions:<br/>

- [x] N is an integer within the range [1..100,000];
- [x] each element of array A is an integer within the range [1..1,000,000,000].
