var NodeLabel = function(label, pre) {
    this.pre = pre;
    this.label = label;
  };

  var nodeIns = {};

  nodeIns.add = function(lists) {
    var cur = null;

    var last = null;

    lists.reverse().forEach(d => {
      if (cur) {
        cur = new NodeLabel(d, cur);
      } else {
        cur = new NodeLabel(d, null);
        last = cur;
      }
    });

    last.pre = cur;

    nodeIns.first = last;

    nodeIns.pointer = nodeIns.first;
  };

  nodeIns.next = function() {
    nodeIns.pointer = nodeIns.pointer.pre;
    return nodeIns.pointer;
  };