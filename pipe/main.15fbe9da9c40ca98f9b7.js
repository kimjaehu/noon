(()=>{"use strict";function t(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var i=function(){function i(t,s,e,a,h,n,o){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i),this.x=t,this.y=s,this.cardSize=e,this.red=a,this.green=h,this.blue=n,this.alpha=o}var s,e,a;return s=i,(e=[{key:"animate",value:function(t){t.beginPath(),t.strokeStyle="#000000",t.lineWidth=5,t.save(),t.fillStyle="RGB(".concat(this.red,",").concat(this.green,",").concat(this.blue,",").concat(this.alpha,")"),t.moveTo(this.x,this.y),t.lineTo(this.x,this.y-this.cardSize),t.lineTo(this.x-this.cardSize,this.y-this.cardSize),t.fill(),t.beginPath(),t.fillStyle="RGB(0,0,0)",t.moveTo(this.x,this.y),t.lineTo(this.x+this.cardSize,this.y-this.cardSize),t.lineTo(this.x+this.cardSize,this.y),t.fill()}}])&&t(s.prototype,e),a&&t(s,a),i}();function s(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var e=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.logo=new Path2D("M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"),this.alpha=0,this.text="THIS IS NIKE.",this.fontSize=60,this.speed=5e-4}var i,e,a;return i=t,(e=[{key:"resize",value:function(t,i){this.stageWidth=t,this.stageHeight=i}},{key:"draw",value:function(t,i){t.drawImage(i,.5*this.stageWidth-200,.5*this.stageWidth-200,400,400)}},{key:"standBy",value:function(t){this.alpha<.3?this.alpha+=this.speed:this.alpha=0,t.save(),t.setTransform(1,0,0,1,0,0),t.fillStyle="rgba(255,255,255,".concat(this.alpha,")"),t.translate(.5*this.stageWidth-300,.5*this.stageHeight-200),t.scale(.004*this.stageWidth,.004*this.stageWidth),t.fill(this.logo),t.restore()}}])&&s(i.prototype,e),a&&s(i,a),t}();function a(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var h=[{img:"image_0.jpg"},{img:"image_1.jpg"},{img:"image_2.jpg"},{img:"image_3.jpg"},{img:"image_4.jpg"},{img:"image_5.jpg"},{img:"image_6.jpg"}],n=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.backBtn=document.createElement("div"),this.backBtn.classList.add("back-btn"),this.backA=document.createElement("a"),this.backA.classList.add("back-btn__link"),this.backA.setAttribute("href","/"),this.backSvg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.backSvg.classList.add("back-btn__svg"),this.backSvg.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.backSvg.setAttributeNS(null,"viewBox","0 0 24 24"),this.backPath=document.createElementNS("http://www.w3.org/2000/svg","path"),this.backPath.setAttributeNS(null,"d","M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"),this.backSpan=document.createElement("span"),this.backSpan.classList.add("back-btn__text"),this.backSpan.innerHTML="Back to noon",this.backSvg.appendChild(this.backPath),this.backA.append(this.backSvg,this.backSpan),this.backBtn.appendChild(this.backA),document.body.appendChild(this.backBtn),this.instruction=document.createElement("div"),this.instruction.classList.add("instruction","hidden","visuallyhidden"),this.instructionSvg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.instructionSvg.classList.add("instruction__svg"),this.instructionSvg.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.instructionSvg.setAttributeNS(null,"viewBox","0 0 24 24"),this.instructionPath=document.createElementNS("http://www.w3.org/2000/svg","path"),this.instructionPath.setAttributeNS(null,"d","M18.19,12.44l-3.24-1.62c1.29-1,2.12-2.56,2.12-4.32c0-3.03-2.47-5.5-5.5-5.5s-5.5,2.47-5.5,5.5c0,2.13,1.22,3.98,3,4.89 v3.26c-2.15-0.46-2.02-0.44-2.26-0.44c-0.53,0-1.03,0.21-1.41,0.59L4,16.22l5.09,5.09C9.52,21.75,10.12,22,10.74,22h6.3 c0.98,0,1.81-0.7,1.97-1.67l0.8-4.71C20.03,14.32,19.38,13.04,18.19,12.44z M17.84,15.29L17.04,20h-6.3 c-0.09,0-0.17-0.04-0.24-0.1l-3.68-3.68l4.25,0.89V6.5c0-0.28,0.22-0.5,0.5-0.5c0.28,0,0.5,0.22,0.5,0.5v6h1.76l3.46,1.73 C17.69,14.43,17.91,14.86,17.84,15.29z M8.07,6.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5c0,0.95-0.38,1.81-1,2.44V6.5 c0-1.38-1.12-2.5-2.5-2.5c-1.38,0-2.5,1.12-2.5,2.5v2.44C8.45,8.31,8.07,7.45,8.07,6.5z"),this.instructionSvg.appendChild(this.instructionPath),this.instruction.appendChild(this.instructionSvg),document.body.appendChild(this.instruction),this.mouseCursor=document.createElement("div"),this.mouseCursor.className="cursor",document.body.appendChild(this.mouseCursor),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.tmpCanvas=document.createElement("canvas"),this.tmpCtx=this.tmpCanvas.getContext("2d"),this.background=document.createElement("img"),this.background.className="background",this.background.src="./this_is_not_a_pipe_bg.png",document.body.appendChild(this.background),this.pixelRatio=window.devicePixelRatio>1?2:1,this.logo=new e,window.addEventListener("resize",this.resize.bind(this),!1),this.pageLoaded=!1,this.loadedImages=0,this.loadedFiles=[],this.image,this.preloadImages(),this.logoImg=new Image,this.logoImg.src="nike_logo.png",document.addEventListener("pointerdown",this.onDown.bind(this),!1),document.addEventListener("pointermove",this.onMove.bind(this),!1),document.addEventListener("pointerup",this.onUp.bind(this),!1),this.cards=[],this.cardSize=75,this.imageNum=0,this.cur=0,this.isLoaded=!1,this.isPressed=!1,this.imgPos={x:0,y:0,width:0,height:0}}var s,n,o;return s=t,(n=[{key:"resize",value:function(){console.log(this.pixelRatio),this.stageWidth=document.body.clientWidth,this.stageHeight=document.body.clientHeight,this.canvas.width=this.stageWidth*this.pixelRatio,this.canvas.height=this.stageHeight*this.pixelRatio,this.ctx.scale(this.pixelRatio,this.pixelRatio),this.showInstruction(),this.logo.resize(this.stageWidth,this.stageHeight),this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight),window.requestAnimationFrame(this.animate.bind(this))}},{key:"preloadImages",value:function(){for(var t=0;t<h.length;t++){var i=h[t],s=new Image;s.addEventListener("load",this.trackProgress.bind(this),!0),s.src=i.img,i.loadedImg=s,this.loadedFiles.push(i)}}},{key:"trackProgress",value:function(){this.loadedImages++,this.loadedImages>=h.length&&(this.pageLoaded=!0,this.resize(),this.pageLoaded&&requestAnimationFrame(this.animate.bind(this)))}},{key:"showInstruction",value:function(){var t;clearInterval(t),t=setInterval(function(){setTimeout(function(){this.instruction.style.transform="translate(".concat(.5*this.stageWidth-48,"px, ").concat(.8*this.stageHeight-48,"px)")}.bind(this),1e3)}.bind(this),10),this.instruction.classList.remove("hidden"),setTimeout(function(){this.instruction.classList.remove("visuallyhidden")}.bind(this),1e3),setTimeout(function(){this.instructionSvg.style.width="84px",this.instructionSvg.style.height="84px"}.bind(this),2200),setTimeout(function(){this.instructionSvg.style.width="96px",this.instructionSvg.style.height="96px"}.bind(this),3200),setTimeout(function(){this.instruction.classList.add("visuallyhidden")}.bind(this),5e3),setTimeout(function(){this.instruction.classList.add("hidden"),clearInterval(t)}.bind(this),5500)}},{key:"drawImage",value:function(){var t=this.stageWidth/this.stageHeight,i=this.image.width/this.image.height;this.imgPos.width=this.stageWidth,this.imgPos.height=this.stageHeight,i>t?(this.imgPos.width=Math.round(this.image.width*(this.stageHeight/this.image.height)),this.imgPos.x=Math.round((this.stageWidth-this.imgPos.width)/2)):(this.imgPos.height=Math.round(this.image.height*(this.stageWidth/this.image.width)),this.imgPos.y=Math.round((this.stageHeight-this.imgPos.height)/2)),this.ctx.drawImage(this.image,0,0,this.image.width,this.image.height,this.imgPos.x,this.imgPos.y,this.imgPos.width,this.imgPos.height),this.imgData=this.ctx.getImageData(0,0,this.stageWidth,this.stageHeight),this.getCards()}},{key:"getCards",value:function(){this.cards=[],this.columns=Math.ceil(this.stageWidth/this.cardSize),this.rows=Math.ceil(this.stageHeight/this.cardSize);for(var t=0;t<this.rows;t++)for(var s=t*this.cardSize+this.cardSize,e=Math.max(Math.min(s,this.stageHeight),0),a=0;a<this.columns;a++){var h=a*this.cardSize,n=Math.max(Math.min(h,this.stageWidth),0),o=Math.floor(Math.random()*this.cardSize+this.cardSize),c=4*(n+e*this.stageWidth),r=this.imgData.data[c+0],d=this.imgData.data[c+1],g=this.imgData.data[c+2],l=this.imgData.data[c+3],u=new i(h,s,o,r,d,g,l);this.cards.push(u)}}},{key:"animate",value:function(t){if(window.requestAnimationFrame(this.animate.bind(this)),this.isPressed){if(this.cards.length>0){var i=Math.floor(Math.random()*this.cards.length);this.cards[i].animate(this.ctx),this.logo.draw(this.ctx,this.logoImg)}}else this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight)}},{key:"onDown",value:function(t){this.isPressed=!0,this.image=this.loadedFiles[this.imageNum].loadedImg,this.imageNum++,this.imageNum>6&&(this.imageNum=0),this.drawImage()}},{key:"onMove",value:function(t){this.mouseCursor.style.transform="translate(".concat(t.clientX-this.mouseCursor.offsetWidth/2,"px, ").concat(t.clientY-this.mouseCursor.offsetHeight/2,"px)")}},{key:"onUp",value:function(t){this.isPressed=!1,this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight)}}])&&a(s.prototype,n),o&&a(s,o),t}();window.onload=function(){new n}})();
//# sourceMappingURL=main.15fbe9da9c40ca98f9b7.js.map