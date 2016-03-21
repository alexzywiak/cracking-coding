export const hasRouteDepth = (start, end, graph) => {
  
  graph.getNodes(node => node.visited = false);

  const sub = (start, end) => {
    start.visited = true;
    if(start === end){
      return true;
    }

    for(let i = 0; i < start.edges.length; i++){
      let edge = start.edges[i];
      if(!edge.visited){
        if(sub(edge, end)){
          return true;
        }
      }
    }
    return false;
  }

  return sub(start, end);
};

export const hasRouteBreadth = (start, end, graph) => {

  graph.getNodes(node => node.visited = false);

  let q = [];
  q.push(start);
  start.visited = true;

  while(q.length){
    let cur = q.shift();
    cur.visited = true;
    if(cur === end){
      return true;
    }
    cur.edges.forEach(edge => {
      if(!edge.visited){
        q.push(edge);
      }
    });
  }
  return false;
};