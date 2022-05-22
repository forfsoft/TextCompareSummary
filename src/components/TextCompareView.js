import React from 'react';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';

import newCodeJson from './../TestDataNew.json';
import oldCodeJosn from './../TestDataOld.json';
/*
const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
`;
const newCode = `
const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
console.log('done')
asdf
`;
*/
const newStyles = {
  variables: {
    dark: {
      diffViewerBackground: '#2e303c',
      diffViewerColor: '#FFF',
      addedBackground: '#044B53',
      addedColor: 'white',
      removedBackground: '#632F34',
      removedColor: 'white',
      wordAddedBackground: '#055d67',
      wordRemovedBackground: '#7d383f',
      addedGutterBackground: '#034148',
      removedGutterBackground: '#632b30',
      gutterBackground: '#2c2f3a',
      gutterBackgroundDark: '#262933',
      highlightBackground: '#2a3967',
      highlightGutterBackground: '#2d4077',
      codeFoldGutterBackground: '#21232b',
      codeFoldBackground: '#262831',
      emptyLineBackground: '#363946',
      gutterColor: '#464c67',
      addedGutterColor: '#8c8c8c',
      removedGutterColor: '#8c8c8c',
      codeFoldContentColor: '#555a7b',
      diffViewerTitleBackground: '#2f323e',
      diffViewerTitleColor: '#555a7b',
      diffViewerTitleBorderColor: '#353846',
    },
  },
  line: {
    padding: '10px 2px',
    '&:hover': {
      background: '#444444',
    },
  },
};

function TextCompareView() {
  const [highlightLine, setHighlightLine] = React.useState([]);
  const onLineNumberClick = (id, e) => {
    let newHighlightLine = [id];
    if (e.shiftKey && highlightLine.length === 1) {
      const [dir, oldId] = highlightLine[0].split('-');
      const [newDir, newId] = id.split('-');
      if (dir === newDir) {
        newHighlightLine = [];
        const lowEnd = Math.min(Number(oldId), Number(newId));
        const highEnd = Math.max(Number(oldId), Number(newId));
        for (let i = lowEnd; i <= highEnd; i++) {
          newHighlightLine.push(`${dir}-${i}`);
        }
      }
    }
    setHighlightLine(newHighlightLine)
  };

  const oldCode = JSON.stringify(oldCodeJosn,null,2);
  const newCode = JSON.stringify(newCodeJson,null,2);

  return (
    <ReactDiffViewer 
      styles={newStyles}
      highlightLines={highlightLine}
      onLineNumberClick={onLineNumberClick}
      useDarkTheme
      leftTitle="left title"
      rightTitle="right title"
      oldValue={oldCode} 
      newValue={newCode} 
      splitView={true}
      compareMethod={DiffMethod.WORDS}
    />
  );
}

export default TextCompareView;
