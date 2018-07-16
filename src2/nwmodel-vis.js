'use strict'

import * as d3 from 'd3'
import {Networks} from './networks'

d3.json('http://localhost:8080/model/target.json', (error, topoData) => {
  if (error) {
    throw error
  }
  var networks = new Networks(topoData)
  console.log('networks: ', networks)
  console.log('graphNodes: ', networks.makeGraphNodes())
  console.log('graphLinks: ', networks.makeGraphLinks())
})