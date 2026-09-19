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
        while(currNode.nextNode != null) {
            size++;
            currNode = currNode.nextNode;
        }
        return size;
    };

    return { append, head, tail, prepend, size };
})();

LinkedList.append(8);
LinkedList.append(2);
LinkedList.append(3);
