/* 
Hash Table:
- Pros
  - hash table has very fast runtime (without collision)
    - Lookup: O(1)
    - Insertion: O(1)
- Cons
  - Data doens't store references to other pieces of data
*/

class HashTable {
  constructor(size) {
    this.buckets = Array(size);
  }

  hash(key) {
    return key.split('').reduce((result, current) => result += current.charCodeAt(0), 0) % this.buckets.length;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    } else {
      let currentNode = this.buckets[index];
      while (currentNode.key !== key && currentNode.next) {
        currentNode = currentNode.next;
      }

      if (currentNode.key == key) {
        currentNode.value = value;
      } else {
        currentNode.next = new HashNode(key, value);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    let currentNode = this.buckets[index];

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  retrieveAll() {
    return this.buckets
      .map((hashNode, index) => {
        let nodes = [];
        let currentNode = hashNode;
        while (currentNode) {
          nodes.push({ index, ...currentNode });
          currentNode = currentNode.next;
        }
        return nodes;
      })
      .reduce((flatten, row) => [...flatten, ...row], []);
  }
}

class HashNode {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

var myht = new HashTable(30);

myht.insert("Trina", "tri613@gmail.com")
myht.insert("Chu", "wooshot@gmail.com")
myht.insert("Cuh", "sherry21_cat@gmail.com")
myht.insert("Sherry", "sherry21_cat@gmail.com")
myht.insert("Cuh", "peter@gmail.com")
myht.insert("Chu", "chu_v2@gmail.com")
myht.insert("Trina", "trina_v2@gmail.com")

myht.retrieveAll()
  .forEach(row => console.log(`[${row.index}] ${row.key} : ${row.value}`))

console.log(myht.get("Trina"))
console.log(myht.get("Z__Z"))