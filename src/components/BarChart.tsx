import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'
import { fetchGraph } from '../helpers/fetchData'


export const BarChart = () => {

    const [checkIn] = useState<number[]>([10, 20, 24, 10,]);
    const [checkOut] = useState<number[]>([22, 12, 16, 13,]);
    const [occupancyPercentage] = useState<number[]>([12, 23, 15, 14]);
    const [days, setDays] = useState<string[]>([
        '01-07',
        '08-14',
        '15-21',
        '22-28',
    ]);
    const svgRef = useRef();

    let width = 600;
    let height = 500;
  
    useEffect(() => {
      

      let axisHeight = height - 30;
      let svg = d3
        .select(svgRef.current!)
        .append("svg")
        .attr("width", width)
        .attr("height", height);
        
     //event listener on windows resize
      
      //X and Y axis
      const xScale = d3.scaleBand().domain(days).range([28, 600]);
      svg
        .append("g")
        .call(d3.axisBottom(xScale))
        .attr("transform", `translate (${0},${axisHeight})`);
  
      const maxYAxis = d3.max([...checkIn, ...checkOut, ...occupancyPercentage])! + 5;
      const yScale = d3.scaleLinear().domain([0, maxYAxis]).range([axisHeight, 10]);
      svg
        .append("g")
        .call(d3.axisLeft(yScale))
        .attr("transform", "translate (26,0)");
  
      const yRange = (axisHeight - 10) / maxYAxis;
  
      svg
        .append("g")
        .attr("class", "grid")
        .call(d3.axisLeft().scale(yScale).tickSize(-width, 0, 0).tickFormat(""))
        .attr("transform", "translate (15,0)")
        .attr("color", "#eee");
  
      var chartInfo = d3
        .select(svgRef.current!)
        .append("div")
        .style("position", "relative")
        .style("visibility", "hidden")
        .style("background-color", "white")
        .style("width", "110px")
        .style("height", "30px")
        .style("box-shadow", "0px 8px 30px #00000012")
        .style("border-radius", "5px")
        .style("border", "solid 1px")
        .style('font-size', '14px')
        .style("padding", "5px");
  
      var mouseover = function (d) {
        chartInfo.style("visibility", "visible");
        d3.select(this).style("stroke", "black");
      };
  
      var mouseleave = function (d) {
        chartInfo.style("visibility", "hidden");
        d3.select(this).style("stroke", "none");
      };
  
      svg
        .selectAll()
        .data(checkIn)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * xScale.bandwidth() + xScale.bandwidth() / 2 + 8 )
        .attr("y", (d) => axisHeight - d * yRange)
        .attr("width", 20)
        .attr("height", (d) => d * yRange)
        .attr("fill", "#135846")
        .on("mouseover", mouseover)
        .on("mousemove", (event, i) => {
          chartInfo.html("Check In: " + i)
            .style("visibility", "visible")
            .style("left", d3.pointer(event)[0] + "px")
            .style("top", d3.pointer(event)[1] - 400 + "px");
        })
        .on("mouseleave", mouseleave);
  
      svg
        .selectAll()
        .data(checkOut)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * xScale.bandwidth() + xScale.bandwidth() / 2 + 29)
        .attr("y", (d) => axisHeight - d * yRange)
        .attr("width", 20)
        .attr("height", (d) => d * yRange)
        .attr("fill", "#E23428")
        .on("mouseover", mouseover)
        .on("mousemove", (event, i) => {
          chartInfo.html("Check Out: " + i)
            .style("visibility", "visible")
            .style("left", d3.pointer(event)[0] + "px")
            .style("top", d3.pointer(event)[1] - 400 + "px");
        })
        .on("mouseleave", mouseleave);

        svg
        .selectAll()
        .data(occupancyPercentage)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * xScale.bandwidth() + xScale.bandwidth() / 2 + 50 )
        .attr("y", (d) => axisHeight - d * yRange)
        .attr("width", 20)
        .attr("height", (d) => d * yRange)
        .attr("fill", "#fcdf03")
        .on("mouseover", mouseover)
        .on("mousemove", (event, i) => {
          chartInfo.html("Check In: " + i)
            .style("visibility", "visible")
            .style("left", d3.pointer(event)[0] + "px")
            .style("top", d3.pointer(event)[1] - 400 + "px");
        })
        .on("mouseleave", mouseleave);
    }, [checkIn]);

  return (
    <>
      <svg ref={svgRef} width={width} height={height}></svg>
    </>
  )
}
