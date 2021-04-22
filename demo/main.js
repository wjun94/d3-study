const data = [{
    name: 'test1',
    value: 30
}, {
    name: 'test2',
    value: 10
}, {
    name: 'test3',
    value: 1
}, {
    name: 'test4',
    value: 3
}, {
    name: 'test5',
    value: 69
}, {
    name: 'test6',
    value: 24
}, {
    name: 'test7',
    value: 66
}]

let svg = d3.select('#svg')

const height = +(svg.attr('height'))
const width = +(svg.attr('width'))

const margin = {
    top: 30,
    bottom: 30,
    left: 50,
    right: 50
}

const innerHeight = height - margin.top - margin.bottom
const innerWidth = width - margin.left - margin.right

const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]) // x轴值范围
    .range([0, innerWidth]) // x轴宽度

const yScale = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([0, innerHeight])
    .padding(0.1) // 间距1%

const group = svg.append('g')
    .attr('id', 'group')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

const yAxis = d3.axisLeft(yScale)
    .tickSize(-innerWidth) // 设置轴线

group.append('g').call(yAxis)

const xAxis = d3.axisBottom(xScale).tickSize(-innerWidth)
group.append('g').call(xAxis).attr('transform', `translate(0, ${innerHeight})`)

data.forEach(v => {
    group.append('rect')
        .attr('width', xScale(v.value)) // 柱状图宽度
        .attr('height', yScale.bandwidth()) // 柱状图高度
        .attr('opacity', 0.8) // 透明度
        .attr('fill', 'green') //填充
        .attr('y', yScale(v.name)) // y轴位置
})

group.append('text').text('标题')
    .attr('font-size', '2em')
    // 设置居中
    .attr('transform', `translate(${innerWidth/2} ,0)`)
    .attr('text-anchor', 'middle')

// 设置文字字体
d3.selectAll('.tick text')
    .attr('font-size', '1.2em') // 字体大小用em
    .attr('color', 'blue')