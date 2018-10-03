An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).<br/>

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.<br/>

Assume that the following declarations are given:<br/>

>struct Results {
  >int * A;
  >int N; // Length of the array
>};

Write a function:<br/>

struct Results solution(int A[], int N, int K);<br/>

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.<br/>

For example, given<br/>

    >A = [3, 8, 9, 7, 6]<br/>
    >K = 3<br/>

the function should return [9, 7, 6, 3, 8]. Three rotations were made:<br/>

    >[3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]<br/>
    >[6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]<br/>
    >[7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]<br/>

For another example, given<br/>

    A = [0, 0, 0]<br/>
    K = 1<br/>
the function should return [0, 0, 0]<br/>

Given<br/>

    A = [1, 2, 3, 4]<br/>
    K = 4<br/>
the function should return [1, 2, 3, 4]<br/>

Assume that:<br/>

- [x] N and K are integers within the range [0..100];<br/>
- [x] each element of array A is an integer within the range [−1,000..1,000].<br/>
- [x] In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.<br/>
