const data = [{
    name: 'test',
    value: 30
}]

let svg = d3.select('#svg')

const height = +(svg.attr('height'))
const width = +(svg.attr('width'))

const margin = {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30
}

const innerHeight = height - margin.top - margin.bottom
const innerWidth = width - margin.left - margin.right

const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]) // x轴值范围
    .range([0, innerWidth]) // x轴宽度

const yScale = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([0, innerWidth])

const group = svg.append('g')
    .attr('id', 'group')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

const yAxis = d3.axisLeft(yScale)
group.append('g').call(yAxis)

const xAxis = d3.axisBottom(xScale)
group.append('g').attr('transform', `translate(0, ${innerHeight})`).call(xAxis)