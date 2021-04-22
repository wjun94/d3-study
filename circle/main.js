let dom = d3.select('.svg')

let mainGroup = dom.append("g") // <g>组标签
    .attr("transform", `translate(100, 100)`)

let circle = mainGroup.append("circle")
    .attr('stroke', 'black')
    .attr('r', '66')
    .attr('fill', 'yellow')

let rece1 = mainGroup.append("rect")
    .attr('stroke', 'black')
    .attr('height', '100')
    .attr('x', '0')
    .attr('y', '0')
    .attr('width', '50')
    .attr('fill', 'green')

let rece2 = mainGroup.append("rect")
    .attr('stroke', 'black')
    .attr('height', '100')
    .attr('x', '170')
    .attr('width', '50')
    .attr('fill', 'red')