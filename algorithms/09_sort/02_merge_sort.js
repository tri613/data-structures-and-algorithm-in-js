// 兩個"已從小到大"排序好的array進行比對並合成一個，就是merge sort
// 但由於一開始只有一個array，所以要進行拆分
// 直到拆分到僅剩一個元素，再慢慢合併回來

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  let mid = Math.floor(array.length / 2);
  let [a, b] = [array.slice(0, mid), array.slice(mid)];

  return merge(mergeSort(a), mergeSort(b));
}

function merge(a, b) {
  let merged = [];

  while (a.length && b.length) {
    if (a[0] > b[0]) {
      merged.push(b.shift());
    } else {
      merged.push(a.shift());
    }
  }

  merged.push(...a);
  merged.push(...b);

  return merged;
}
