Sorting is not a big deal for small input like:

```typescript
const letters: string[] = ['a', 'd', 'z', 'e', 'r', 'b'];

letters.sort();
```

Why the company ask a simple question: The problem is when input become larger and larger, becaouse is cost company a lot of money.

For example: 

- Google it's have a tone of websites that are indexed, what is they need to sort those websites in a way. Sorting a news article based on the time that is was realised.
- Amazon: it's sorts products based on category, based on price, based on rating.
- Apple: have the apple store and they list all those apps is a sort of order.
- Microsoft: they need to sort all those logs in a sort of data centers around the word so that if an incident happends they know where is comming from.
- Netflix: theu need to sort ehry shows, the movies, the tv shows somehow, and they can not use a buit-in sort method that comes with the language.

They all need custom sorted methods based on the data. They sort data or it pre-procesed.

In javascript `.sort()` method converts in string and then it's sorts:

```typescript
const basket: number[] = [2, 65, 34, 2, 1, 7, 8];

basket.sort(); // output: [1, 2, 2, 34, 65, 7, 8]
'2'.charCodeAt(0) // output: 50
'65'.charCodeAt(0) // output: 54
'34'.charCodeAt(0) // output: 51
'7'.charCodeAt(0) // output: 55

basket.sort((a, b) => a-b); // output: [1, 2, 2, 7, 8, 34, 65]
```

The sort method in javascript is depended on the browser: becaouse Chrome is using a version of javascrpt, other than Firefox od Safari. So you need to read the documentation of the method.

```typescript
const spanish: string[] = ['único', 'árbol', 'cosas', 'fútbol'];

spanish.sort((a, b) => a.localeCompare(b)); // need to use this function because sort method, sorts by unicode 
```

Usefull resources for `sort()` in Javascript:

- [Documentation for sort method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Documentation for localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
  
Exists [sorting algorithms](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important) that are stable and unstable 

When you should use diferent sorting algorithms:

- **Insertion Sort**: should be used if your inputs are small or items ar mostly sorted
- **Bubble Sort**: you well never going to use bubble sort is only used for educational purposes
- **Selection Sort**: most likely you well never going to use it
- **Merge Sort**: is really fast becaouse of divide and conquer this is the best for everything
- **Quick Sort**: is better than Merge Sort, it's have a good space complexity

Comparison Sort:

- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort
  
Non-Comparison Sort:

- Counting Sort
- Radix Sort
- this types of algortihms only work with numbers 
