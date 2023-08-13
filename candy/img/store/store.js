(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.store_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {store:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65B8BF").s().p("AgFAKQgFgCgBgFQgBgEADgEQACgFAFgBQAEgBAEADQAEACACAFQABAEgCAEQgDAEgFACIgDAAQgCAAgDgCg");
	this.shape.setTransform(62.2836,30.8462,1.5409,1.5409);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#65B8BF").s().p("AAAAMQgFAAgEgEQgDgEABgEQAAgFAEgDQAEgEAEABQAFAAADAEQAEAEgBAEQgBAFgDADQgEADgEAAIAAAAg");
	this.shape_1.setTransform(6.7443,30.8462,1.5409,1.5409);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.3).p("AC+BEIioipQgJgIgMAAQgLAAgJAIIiqCoQgJAIAAANQAAAIAFAGQAFAGAHABQAIABAGgFQAHgFAAgIQABgOgMgGICYiWQAJgIALAAQAMAAAJAJICXCXQgLAEgBAMQgBAIAFAGQAFAGAIAAQAIABAGgFQAGgFAAgIQABgBgBgBQABgNgJgKg");
	this.shape_2.setTransform(34.4854,16.9905,1.5409,1.5409);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D74C6A").s().p("ACyBuQgIAAgFgGQgFgGABgIQABgMALgEIiXiXQgJgJgMAAQgLAAgJAIIiYCWQAMAGgBAOQAAAIgHAFQgGAFgIgBQgHgBgFgGQgFgGAAgIQAAgNAJgIICqioQAJgIALAAQAMAAAJAIICoCpQAJAKgBANIAAACQAAAIgGAFQgFAEgGAAIgDAAg");
	this.shape_3.setTransform(34.4854,16.9905,1.5409,1.5409);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_4.setTransform(34.8548,61.2412,1.5409,1.5409);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhHACIAAgDICQAAIAAADg");
	this.shape_5.setTransform(49.6479,61.2412,1.5409,1.5409);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHACIAAgDICPAAIAAADg");
	this.shape_6.setTransform(19.7922,61.2412,1.5409,1.5409);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7CC58").s().p("Ai0CRQgSAAgMgNQgNgNAAgSIAAjJQAAgSANgNQAMgNASAAIFpAAQASAAANANQAMANAAASIAADJQAAASgMANQgNANgSAAgAilgDQgCADAAADQAAAKAHAEQAHAEAMAAQAMAAAJgFQAIgHAAgJQAAgFgDgEIgHgGIgTgIIgGgEQgCgDAAgDQAAgFAEgDQAEgCAIAAQAFAAAEACQADABAAAEIAAADIAAAEIABADQABAAAAAAQABABAAAAQAAAAABAAQABAAAAAAQADAAACgDQACgCAAgGQAAgFgDgEQgEgEgFgCIgMgCQgJAAgGADQgGADgDAEQgEAFAAAHQAAAGADAEQAEAEAEACIATAJIAFADIABAEQAAAGgEACQgEADgHAAQgGAAgGgCQgEgDAAgDIABgCIAAgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgEAAgBADgAB1ASQAGADAMAAIARgCQAJgBAEgCQADgCABgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIgBgDQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgCABQgIADgGABIgQABQgKAAgGgCQgFgDAAgFQAAgDACgDQACgDAFgBQAEgCAIAAQAGAAAAgGIgBgDIgDgBQgIAAgDgDQgDgCAAgEQAAgGAEgDQAEgDAIAAQAEAAAEACQACACAAADIAAAEIAAADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQADAAACgEQACgEAAgEQAAgIgFgEQgGgFgLAAQgHAAgIADQgGADgEAEQgEAFAAAGQAAAFADAEQACAEAFABQgJADgFAFQgFAFAAAHIABAEIgDADIgGABQgDAAgCgCIgFgIIgFgGQgDgDgDgBQAGgBAFgEQAFgFACgDQACgFAAgFQAAgFgCgFQgDgEgGgDQgGgDgIAAQgMAAgJAGQgKAGgFAKQgFAKAAAQQAAAGADAHQACAGAFADQAEAEAGAAQAFAAADgDIAEgIIACgQIAEABIAEAFIAEAHQAEAIAEADQAEADAGAAQAFAAAFgDIAGgFQACADAIACgAgYgvQgIAFgGAKQgFAMAAAMQAAAIAEAHQAEAIAGACQAGAEAIAAQALAAAHgGQAIgFAFgKQAFgJAAgOQAAgKgEgGQgEgHgGgDQgFgEgIAAQgLAAgHAGgAhKgmIgBADIgHAsIgBAHQAAAAAAABQAAABABAAQAAABAAAAQAAAAABABIAEABIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAIAJg6IAMAAIAMABQAEAAABgBQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAIgBgDIgFgCIgZgCQgRAAgIACQgLADgEAEQgFAEAAAIIABAGIADAEIACABQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAIAAgCQgCgCAAgDQAAgEACgCQAEgCADgBQAGgBAIAAg");
	this.shape_7.setTransform(34.5081,50.0308,1.5409,1.5409);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7CC58").s().p("AgOAWQgEgFAAgLQAAgJADgHQADgIAFgEQAFgEAGAAQAHAAAEAFQAEAGAAAKQAAAKgCAGQgDAIgFAEQgFAEgGAAQgHAAgFgFg");
	this.shape_8.setTransform(32.7361,47.4883,1.5409,1.5409);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7CC58").s().p("AgRAaIgDgHIgBgJQAAgMAEgHQAEgJAGgEQAHgEAHgBQAHABAEADQAEADAAAFQAAAFgDADQgCAFgEABQgEACgEgBIACgNIAAgCQAAgEgFAAQgFAAgBAFIgDAOIgCAAIgDABQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIABADQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAIgDAOIgBADIgCABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_9.setTransform(43.5226,47.4498,1.5409,1.5409);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.store_1, new cjs.Rectangle(0,-1,69.1,73.4), null);


(lib.swing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {swing:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// swing
	this.instance = new lib.store_1();
	this.instance.setTransform(34.6,0,1,1,0,0,0,34.6,0);

	this.store = new lib.store_1();
	this.store.name = "store";
	this.store.setTransform(34.6,0,1,1,0,0,0,34.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},8).to({state:[{t:this.store}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,rotation:40.7874,x:34.65,y:-0.05},8).to({regY:0,rotation:-19.2113},7).to({regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:16.7484,x:34.75},8).to({_off:true,regY:0,scaleX:1,scaleY:1,rotation:0,x:34.6,y:0},6,cjs.Ease.backIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-20.1,130,99.80000000000001);


// stage content:
(lib.store = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {animation:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		let root=this;
		stage.enableMouseOver();
		
		this.store.addEventListener("mouseover",balance);
		
		
		function balance(){
			root.store.gotoAndPlay("swing")
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// animation
	this.store = new lib.swing();
	this.store.name = "store";
	this.store.setTransform(172.5,75.95,1.4347,1.4685,0,0,0,35.3,36.6);

	this.timeline.addTween(cjs.Tween.get(this.store).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(260.8,97.1,-39.80000000000001,31.400000000000006);
// library properties:
lib.properties = {
	id: '7ADE7FEAB15B471A8D0C4100064288C6',
	width: 278,
	height: 150,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7ADE7FEAB15B471A8D0C4100064288C6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;