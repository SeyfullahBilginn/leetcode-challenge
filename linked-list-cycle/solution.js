
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const hasCycle = (head) => {
    let fast = head;
    console.log(head);
    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
        if (head === fast) return true;
    }
    return false;
};

const head = [3,2,0,-4];
console.log(hasCycle(head));