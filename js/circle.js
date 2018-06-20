let circle = d3.selectAll("circle");

circle.data([32, 57, 112]);

circle.transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d); });

circle.attr("cx", function(d, i) { return i * 100 + 30; });
