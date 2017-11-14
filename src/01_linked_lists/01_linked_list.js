/* 
The Big O's in Linked List:
- Adding / removing head or tail: O(1) (constant time)
- Searching through Linked List: O(n) (linear time - increase proportionally of the length of the list)

Use cases:
- Poker game? circular linked list 

Memory Benefits: 
- Data doesn't have to be stored together (for lower level operation when dealing with the memory directly)
- So it uses memory efficiently
*/

function LinkedList() {
	this.head = null;
	this.tail = null;
}

LinkedList.prototype.addToHead = function(value) {
	const newNode = new Node(value, this.head, null);

	if (this.head) {
		this.head.prevNode = newNode;
	} else {
		this.tail = newNode;
	}

	this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
	const newNode = new Node(value, null, this.tail);

	if (this.tail) {
		this.tail.nextNode = newNode;
	} else {
		this.head = newNode;
	}

	this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
	if (!this.head) {
		return null;
	} else {
		let oldValue = this.head.value;
		if (this.head.nextNode) {
			this.head = this.head.nextNode;
			this.head.prevNode = null;
		} else { // only has one node
			this.head = null;
			this.tail = null;
		}
		return oldValue;
	}
}

LinkedList.prototype.removeTail = function() {
	if (!this.tail) {
		return null;
	} else {
		let oldValue = this.tail.value;
		if (this.tail.prevNode) {
			this.tail = this.tail.prevNode;
			this.tail.nextNode = null;
		} else { // only has one node
			this.head = null;
			this.tail = null;
		}
		return oldValue;
	}
}

LinkedList.prototype.printNodes = function() {
	let nodes = [];
	let currentNode = this.head;

	while (currentNode) {
		currentNode = currentNode.nextNode;
		nodes.push(currentNode.value);
	}

	return nodes;
};

LinkedList.prototype.search = function(searchValue) {
	let currentNode = this.head;

	while (currentNode && currentNode.value !== searchValue) {
		currentNode = currentNode.nextNode;
	}

	return currentNode;
};

LinkedList.prototype.indexOf = function(searchValue) {
	let result = [];
	let currentNode = this.head;
	let currentIndex = 0;

	while (currentNode) {
		if (currentNode.value == searchValue) {
			result.push(currentIndex);
		}
		currentNode = currentNode.nextNode;
		currentIndex++;
	}

	return result;
}

function Node(value, nextNode, prevNode) {
	this.value = value;
	this.nextNode = nextNode;
	this.prevNode = prevNode;
};

module.exports = LinkedList;