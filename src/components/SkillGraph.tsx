import React from 'react';
import { Graph } from 'react-d3-graph';
import styled from '@emotion/styled';

interface GraphNodeType {
  id: string
  type?: string;
  x?: number;
  y?: number;
}

interface GraphLink {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Array<GraphNodeType>;
  links: Array<GraphLink>;
  focusedNodeId?: string
}

/**
 * Skills:
 *
 *  - math
 *  - Data Analysis and Visualization
 *  - Machine Learning
 *  - Economic Game Theory
 *  - Computational Astrophysics
 *
 * Languages
 *  - Python
 *  - Javascript
 *  - C99
 *  - Java
 *  - C++
 *  - Assembly (MIPS)
 *  - MySQL
 */

const NODES: Array<GraphNodeType> = [
  {
    id: 'Python',
    type: 'language',
  },
  {
    id: 'Javascript',
    type: 'language',
  },
  {
    id: 'Java',
    type: 'language',
  },
  {
    id: 'Assembly (MIPS)',
    type: 'language',
  },
  {
    id: 'MySQL',
    type: 'language',
  },
  {
    id: 'Data Analysis and Visualization',
    type: 'skill',
  },
  {
    id: 'Kubernetes',
    type: 'skill',
  },
  {
    id: 'AWS Solutions Architect',
    type: 'skill',
  },
  {
    id: 'Computational Astrophysics',
    type: 'skill',
  },
  {
    id: 'Jenkins',
    type: 'skill',
  },
  {
    id: 'CircleCI',
    type: 'skill',
  },
];

// graph payload (with minimalist structure)

const getData = (): GraphData => {
  const nodes = NODES.concat([{ id: 'Luke Shadler' }, { id: 'Skills', type: 'skill' }, { id: 'Languages', type: 'language' }]).map((n) => {
    let color: string = 'white';
    switch (n.type) {
      case 'skill':
        color = 'lightblue';
        break;
      case 'language':
        color = 'goldenrod';
        break;
      default:
        color = 'white';
        break;
    }
    return {
      id: n.id,
      color,
      symbolType: 'triangle',
    };
  });

  const links = NODES.concat([{ id: 'Skills', type: 'skill' }, { id: 'Languages', type: 'language' }]).map((n) => {
    let target: string = 'Luke Shadler';
    if (n.id !== 'Skills' && n.id !== 'Languages') {
      switch (n.type) {
        case 'skill':
          target = 'Skills';
          break;
        case 'language':
          target = 'Languages';
          break;
        default:
          target = 'Luke Shadler';
          break;
      }
    }
    return { source: n.id, target };
  });

  return {
    nodes,
    links,
    focusedNodeId: 'Luke Shadler',
  };
};

const data: GraphData = getData();

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  width: '1000',
  staticGraph: false,
  nodeHighlightBehavior: true,
  node: {
    color: 'white',
    highlightStrokeColor: 'goldenrod',
    fontColor: 'white',
    fontSize: 16,
    highlightFontColor: 'goldenrod',
    highlightFontSize: 16,
    size: 400,
  },
  link: {
    highlightColor: 'goldenrod',
    opacity: 0.3,
    highlightOpacity: 1,
  },
};

const StyledGraph = styled(Graph)`
`;


const SkillGraph = () => (
  <StyledGraph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={data}
    config={myConfig}
  />
);

export default SkillGraph;
