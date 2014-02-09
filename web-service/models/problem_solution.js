var problemSolution = require('cs-utils/model-primitives/set')('solution:problem');

problemSolution.parseMap = problemSolution.filters.ifStrReturnInt;

module.exports = problemSolution;