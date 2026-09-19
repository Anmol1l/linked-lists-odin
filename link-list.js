class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
    setNext(node) {
        this.nextNode = node;
    }
}

const LinkedList = (() => {
    let headNode;
    let tailNode;

    const append = (value) => {
        let newNode = new Node(value, null);

        if (tailNode instanceof Node) {
            tailNode.nextNode = newNode;
        }
        tailNode = newNode;
        if (!(headNode instanceof Node)) {
            headNode = tailNode;
        }
    };

    const prepend = (value) => {
        let newNode = new Node(value, headNode);
        headNode = newNode;
        if (!(tailNode instanceof Node)) {
            tailNode = headNode;
        }
    };

    const head = () => {
        return headNode;
    };

    const tail = () => {
        return tailNode;
    };

    const size = () => {
        let size = 1;
        if (!headNode) return size;
        let currNode = headNode;
        while (currNode.nextNode != null) {
            size++;
            currNode = currNode.nextNode;
        }
        return size;
    };

    const at = (index) => {
        if (index > LinkedList.size() - 1) {
            return undefined;
        }

        let currNode = headNode;
        let i = 0;
        while (i < index) {
            currNode = currNode.nextNode;
            i++;
        }
        return currNode.value;
    };

    const pop = () => {
        let newHead = headNode.nextNode;
        headNode = null;
        headNode = newHead;
        return headNode;
    };

    const contains = (value) => {
        let currNode = headNode;
        while (currNode != null) {
            if(currNode.value === value) {
                return true
            }
            currNode = currNode.nextNode;
        }
        return false;
    };

    const findIndex = (value) => {
        let currNode = headNode;
        let i = 0
        while(currNode != null) {
            if(currNode.value === value) {
                return i;
            }
            currNode = currNode.nextNode;
            i++;
        }
        return -1;
    }

    return { append, head, tail, prepend, size, at, pop, contains, findIndex };
})();

LinkedList.append(8);
LinkedList.append(2);
LinkedList.append(3);
