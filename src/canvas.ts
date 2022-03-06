const canvasContainer = document.createElement('div') as HTMLDivElement
canvasContainer.setAttribute('id', 'container')
document.body.appendChild(canvasContainer)
const canvas = document.createElement('canvas') as HTMLCanvasElement
canvas.textContent = 'Your browser does not seem to support HTML5 canvas.'
canvasContainer.appendChild(canvas)
canvas.setAttribute('id', 'canvas')

const canvasW = (canvas.width = 300)
const canvasH = (canvas.height = 600)
const scaleW = 10
const scaleH = 10
const boardW = canvasW / scaleW //30
const boardH = canvasH / scaleH //60
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

/*
https://www.microfocus.com/documentation/silk-test/200/en/silktestworkbench-help-en/SILKTEST-21EEFF3F-DIFFERENCEBETWEENTEXTCONTENTSINNERTEXTINNERHTML-REF.html
textContents is all text contained by an element and all its children that are for formatting purposes only.
innerText returns all text contained by an element and all its child elements.
innerHtml returns all text, including html tags, that is contained by an element.

*/
