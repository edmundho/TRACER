// sort function referenced from: https://stackoverflow.com/questions/5073799/how-to-sort-a-javascript-array-of-objects-by-nested-object-property?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
export default function sort(property, array) {
  array.sort((a, b) => {
    if (a[property] <= b[property]) {
      return 1;
    } else if (a[property] > b[property]) {
      return -1;
    } else {
      return 0;
    }
  });
}