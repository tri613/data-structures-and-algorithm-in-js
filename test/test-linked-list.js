const should = require('should');
const LinkedList = require('./../src/01_linked_list/01_linked_list');

describe('LinkedList', function() {

	describe('modifying', function() {
		it('should be working fine while modifying the list', () => {
			const ll = new LinkedList();
			ll.addToHead('d');
			ll.addToHead('a');
			ll.addToHead('b');
			ll.addToTail('s');
			ll.addToTail('s');
			ll.printNodes().join('').should.eql('badss');

			ll.removeHead();
			ll.removeHead();
			ll.printNodes().join('').should.eql('dss');
			
			ll.removeTail();
			ll.removeTail();
			ll.removeTail();
			ll.removeTail();
			ll.printNodes().should.be.empty();
		});
	});

	describe('search', function() {
		it('should return null when the list is empty', () => {
			const ll = new LinkedList();
			should(ll.search('empty')).be.eql(null);
		});

		it('should be working fine when the list has only one element', () => {
			const ll = new LinkedList();
			ll.addToHead('one');
			ll.search('one').should.have.property('value', 'one');
			should(ll.search('two')).be.eql(null);
		});

		it('should be working fine with the list having more than two elements', () => {
			const ll = new LinkedList();
			ll.addToHead('one');
			ll.addToHead('two');
			ll.addToTail('three');

			ll.search('two').should.have.property('value', 'two');
			should(ll.search('zero')).eql(null);
		});

	});

	describe('indexOf', function() {
		it('should return an empty array when the list is empty', () => {
			const ll = new LinkedList();
			should(ll.indexOf('empty')).be.empty();
		});

		it('should be working fine when the list has only one element', () => {
			const ll = new LinkedList();
			ll.addToHead('one');
			ll.indexOf('one').should.be.Array().and.have.containDeepOrdered([0]);
			ll.indexOf('two').should.be.empty();
		});

		it('should be working fine with the list having more than two elements', () => {
			const ll = new LinkedList();
			ll.addToHead('one');
			ll.addToHead('two');
			ll.addToTail('three');
			ll.addToTail('two');

			ll.indexOf('two').should.have.length(2); //.and.have.containDeepOrdered([1, 3]);
			ll.indexOf('zero').should.be.empty();
		});

	});

});