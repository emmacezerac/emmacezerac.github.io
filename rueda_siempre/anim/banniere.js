(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banniere_atlas_1", frames: [[0,0,1603,2313],[824,2315,619,473],[0,2315,822,1238],[824,2790,791,306],[0,3555,931,362]]}
];


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



(lib.bananier = function() {
	this.initialize(ss["banniere_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Fichier72x = function() {
	this.initialize(ss["banniere_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gobelet_blanc2x = function() {
	this.initialize(ss["banniere_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lid12x = function() {
	this.initialize(ss["banniere_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.lid22x = function() {
	this.initialize(ss["banniere_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
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


(lib.plus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("+", "59px 'Chalkduster'", "#660000");
	this.text.lineHeight = 77;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plus, new cjs.Rectangle(0,0,41,78.6), null);


(lib.off = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("off", "41px 'Chalkduster'", "#660000");
	this.text.lineHeight = 54;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.off, new cjs.Rectangle(0,0,128,58.3), null);


(lib.membership = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("our membership gift", "40px 'Garamond'", "#660033");
	this.text.lineHeight = 47;
	this.text.lineWidth = 404;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.membership, new cjs.Rectangle(0,0,408,53), null);


(lib.maracas1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Fichier72x();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.maracas1, new cjs.Rectangle(0,0,619,473), null);


(lib.lid2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.lid22x();
	this.instance.setTransform(0,0,0.043,0.043);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lid2, new cjs.Rectangle(0,0,40,15.6), null);


(lib.lid1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.lid12x();
	this.instance.setTransform(0,0,0.0418,0.0418);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lid1, new cjs.Rectangle(0,0,33.1,12.8), null);


(lib.y = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("y", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.y, new cjs.Rectangle(0,0,10,13), null);


(lib.u = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("u", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.u, new cjs.Rectangle(0,0,10,13), null);


(lib.t = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("t", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t, new cjs.Rectangle(0,0,10,13), null);


(lib.s = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("s", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s, new cjs.Rectangle(0,0,10,13), null);


(lib.r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("r", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.r, new cjs.Rectangle(0,0,10,13), null);


(lib.o = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("o", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.o, new cjs.Rectangle(0,0,10,13), null);


(lib.n = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("n", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.n, new cjs.Rectangle(0,0,10,13), null);


(lib.m = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("m", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m, new cjs.Rectangle(0,0,10.2,13), null);


(lib.l = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("l", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l, new cjs.Rectangle(0,0,10,13), null);


(lib.i = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("i", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.i, new cjs.Rectangle(0,0,10,13), null);


(lib.h = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("h", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h, new cjs.Rectangle(0,0,10,13), null);


(lib.a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("a", "8px 'Garamond'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.a, new cjs.Rectangle(0,0,10,13), null);


(lib.gobelet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.gobelet_blanc2x();
	this.instance.setTransform(0,0,0.0437,0.0437);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gobelet, new cjs.Rectangle(0,0,35.9,54.1), null);


(lib.fond = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4jUyMAAAgpjMAxHAAAMAAAApjg");
	this.shape.setTransform(157.225,133);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fond, new cjs.Rectangle(0,0,314.5,266), null);


(lib.cinquante = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("50", "74px 'Chalkduster'", "#660033");
	this.text.lineHeight = 96;
	this.text.lineWidth = 105;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cinquante, new cjs.Rectangle(0,0,109,97.5), null);


(lib.bananier_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.bananier();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bananier_1, new cjs.Rectangle(0,0,1603,2313), null);


(lib.gobelet_avance = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {stop:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(160));

	// lid2
	this.instance = new lib.lid2();
	this.instance.setTransform(526.35,-238,2.695,2.695,0,0,0,20.1,7.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({scaleX:2.6949,scaleY:2.6949,rotation:53.7138,x:526.25,y:-161.5},3).to({scaleX:2.695,scaleY:2.695,rotation:-13.5343,x:526.4,y:-60.5},1).to({scaleX:2.6949,scaleY:2.6949,rotation:16.4648,x:526.35,y:-60.45},2).to({regY:7.7,scaleX:2.695,scaleY:2.695,rotation:1.4655,y:-56.1},4).wait(116));

	// lid1
	this.instance_1 = new lib.lid1();
	this.instance_1.setTransform(530.05,-252.7,3.8423,3.8423,0,0,0,16.6,6.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({scaleX:3.8422,scaleY:3.8422,rotation:-49.4544,x:530.25,y:-141.95},6).to({regX:16.7,regY:6.2,scaleX:3.7442,scaleY:3.7442,rotation:12.6821,x:526.75,y:-55.05},3).to({regX:16.8,rotation:-14.471,x:527.2,y:-52.6},3).to({regX:16.7,rotation:0,x:526.55,y:-42.7},3).wait(126));

	// gobelet
	this.instance_2 = new lib.gobelet();
	this.instance_2.setTransform(32.3,131.15,3.3542,3.3542,0,0,0,17.9,53.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-22.9575,x:276.35,y:131.25},7).to({scaleX:3.3538,scaleY:3.3538,rotation:-41.253,x:416.15,y:131.15},3).to({scaleX:3.3542,scaleY:3.3542,rotation:0,x:526.3},5).to({scaleX:3.3541,scaleY:3.3541,rotation:36.9393,x:526.2,y:131.2},4).to({scaleX:3.3542,scaleY:3.3542,rotation:0,x:526.3,y:131.15},6).wait(135));

	// maracas
	this.instance_3 = new lib.maracas1();
	this.instance_3.setTransform(737.75,140.1,0.1329,0.1329,0,115.7532,-64.2468,309.6,237.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46).to({_off:false},0).to({skewX:25.7532,skewY:-154.2468,x:668.2,y:117.55},9).to({regX:309.3,regY:237.7,skewX:55.7517,skewY:-124.2483,x:694.45,y:112},3).to({regX:309.6,regY:237.9,skewX:25.7532,skewY:-154.2468,x:668.2,y:117.55},3).wait(99));

	// Calque_6
	this.instance_4 = new lib.maracas1();
	this.instance_4.setTransform(548,30.8,0.133,0.133,-75.0025,0,0,309.4,237);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).to({regX:309.5,regY:237.6,rotation:29.4595,x:618.6,y:109.35},4).to({regX:309.4,rotation:-19.0295,x:596.1,y:73.35},6).to({regX:309.6,regY:238,rotation:32.4611,x:618.95,y:112.05},2).to({regX:309.9,rotation:-10.7529,x:602.05,y:77.9},4).wait(99));

	// bananier
	this.instance_5 = new lib.bananier_1();
	this.instance_5.setTransform(549.25,13.35,0.0168,0.0168,0,55.9203,-124.0797,988,1821.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45).to({_off:false},0).to({regX:1138,regY:1871.7,scaleX:0.0722,scaleY:0.0722,skewX:55.9101,skewY:-124.0899,x:540.25,y:6.45},4,cjs.Ease.bounceIn).to({regX:988,regY:1821.5,scaleX:0.0168,scaleY:0.0168,skewX:55.9203,skewY:-124.0797,x:549.25,y:13.35},4,cjs.Ease.bounceIn).to({scaleX:0.1102,scaleY:0.1102,skewX:55.9228,skewY:-124.0772,y:13.4},4,cjs.Ease.bounceIn).to({regX:987.8,regY:1821,scaleX:0.072,scaleY:0.072,skewX:55.9225,skewY:-124.0775},4,cjs.Ease.bounceIn).wait(99));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_45 = new cjs.Graphics().p("A2VAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_46 = new cjs.Graphics().p("A2VAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_47 = new cjs.Graphics().p("A2VAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_48 = new cjs.Graphics().p("A2VAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_49 = new cjs.Graphics().p("A2VAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_50 = new cjs.Graphics().p("A2VAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_51 = new cjs.Graphics().p("A2VAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_52 = new cjs.Graphics().p("A1TAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_53 = new cjs.Graphics().p("Az/AQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_54 = new cjs.Graphics().p("AyrAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_55 = new cjs.Graphics().p("AxWAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_56 = new cjs.Graphics().p("AwCAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_57 = new cjs.Graphics().p("AuuAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_58 = new cjs.Graphics().p("AtZAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_59 = new cjs.Graphics().p("AsFAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_60 = new cjs.Graphics().p("AqwAQIAAp/MAsrAAAIAAJ/g");
	var mask_graphics_61 = new cjs.Graphics().p("ApcAQIAAp/MAsrAAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_graphics_45,x:37.9782,y:-62.4472}).wait(1).to({graphics:mask_graphics_46,x:54.8532,y:-62.4472}).wait(1).to({graphics:mask_graphics_47,x:71.7282,y:-62.4472}).wait(1).to({graphics:mask_graphics_48,x:88.6032,y:-62.4472}).wait(1).to({graphics:mask_graphics_49,x:105.4782,y:-62.4472}).wait(1).to({graphics:mask_graphics_50,x:122.3532,y:-62.4472}).wait(1).to({graphics:mask_graphics_51,x:139.2282,y:-62.4472}).wait(1).to({graphics:mask_graphics_52,x:149.5513,y:-62.4472}).wait(1).to({graphics:mask_graphics_53,x:157.9888,y:-62.4472}).wait(1).to({graphics:mask_graphics_54,x:166.4263,y:-62.4472}).wait(1).to({graphics:mask_graphics_55,x:174.8638,y:-62.4472}).wait(1).to({graphics:mask_graphics_56,x:183.3013,y:-62.4472}).wait(1).to({graphics:mask_graphics_57,x:191.7388,y:-62.4472}).wait(1).to({graphics:mask_graphics_58,x:200.1763,y:-62.4472}).wait(1).to({graphics:mask_graphics_59,x:208.6138,y:-62.4472}).wait(1).to({graphics:mask_graphics_60,x:217.0513,y:-62.4472}).wait(1).to({graphics:mask_graphics_61,x:225.4888,y:-62.4472}).wait(99));

	// bepartoftheteam
	this.text = new cjs.Text("be part of the team", "35px 'Noteworthy'");
	this.text.lineHeight = 58;
	this.text.lineWidth = 280;
	this.text.parent = this;
	this.text.setTransform(183,-118.9);
	this.text._off = true;

	var maskedShapeInstanceList = [this.text];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(45).to({_off:false},0).wait(115));

	// membership
	this.instance_6 = new lib.membership();
	this.instance_6.setTransform(321,-38.85,1,1,0,0,0,204,26.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53).to({_off:false},0).to({y:-26.55,alpha:1},13).wait(94));

	// plus
	this.instance_7 = new lib.plus();
	this.instance_7.setTransform(160.45,39.2,1,1,0,0,0,20.4,39.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({_off:false},0).wait(94));

	// cinquante
	this.instance_8 = new lib.cinquante();
	this.instance_8.setTransform(227.5,31.6,1,1,0,0,0,46.5,43.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).to({alpha:0.1719},4).to({alpha:0.9219},15).to({alpha:1},5).wait(66));

	// percent
	this.text_1 = new cjs.Text("%", "59px 'Chalkduster'", "#660033");
	this.text_1.lineHeight = 77;
	this.text_1.lineWidth = 55;
	this.text_1.parent = this;
	this.text_1.setTransform(277,-10.3);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(89).to({_off:false},0).wait(71));

	// off
	this.instance_9 = new lib.off();
	this.instance_9.setTransform(405,29.2,1,1,0,0,0,64,29.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(91).to({_off:false},0).wait(69));

	// O
	this.instance_10 = new lib.o();
	this.instance_10.setTransform(109.55,92.25,5,5,0,0,0,3.9,8.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(97).to({_off:false},0).to({regY:8.9,scaleY:2.4157,y:129.95},3).to({regX:4.2,regY:8.8,scaleY:7.2159,x:111.05,y:129.2},1).to({scaleY:5},3).wait(56));

	// N
	this.instance_11 = new lib.n();
	this.instance_11.setTransform(130.65,92.8,4.9274,4.9274,0,0,0,4.1,8.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(101).to({_off:false},0).to({regY:9,scaleY:3.0005,y:130.3},2).to({regY:9.1,scaleY:6.7677,y:130.8},1).to({regY:9,scaleY:4.9274,y:130.2},1).wait(55));

	// Y
	this.instance_12 = new lib.y();
	this.instance_12.setTransform(159.8,81.9,5.0583,5.0583,0,0,0,3.9,8.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(103).to({_off:false},0).to({regX:4,scaleY:3.3232,x:160.8,y:128.3},3).to({scaleY:7.4109},1).to({regX:3.9,scaleY:5.0583,x:160.3},1).wait(52));

	// O
	this.instance_13 = new lib.o();
	this.instance_13.setTransform(177.15,92.15,5,5,0,0,0,3.9,8.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(106).to({_off:false},0).to({regY:8.9,scaleY:2.4157,x:177.05,y:130.1},2).to({regX:4.2,regY:8.8,scaleY:7.2159,x:178.55,y:129.2},1).to({scaleY:5,x:178.4},1).wait(50));

	// U
	this.instance_14 = new lib.u();
	this.instance_14.setTransform(199.25,86,4.9259,4.9259,0,0,0,4.3,9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(109).to({_off:false},0).to({regX:4.4,scaleY:2.4356,x:199.7,y:130.2},2).to({scaleY:6.4858,y:129.95},1).to({regX:4.3,scaleY:4.9259,x:199.25,y:130},1).wait(47));

	// R
	this.instance_15 = new lib.r();
	this.instance_15.setTransform(212.9,94.55,4.5154,4.5154,0,0,0,3.1,8.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(111).to({_off:false},0).to({scaleY:2.8317,x:212.85,y:129.05},3).to({scaleY:6.2501,y:128.85},1).to({scaleX:5.1021,scaleY:5.1021,x:212.8,y:128.95},1).wait(44));

	// l
	this.instance_16 = new lib.l();
	this.instance_16.setTransform(441.1,50.05,5.246,5.246,0,0,0,2.9,9);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(152).to({_off:false},0).to({regX:3,scaleY:1.807,x:441.95,y:129.85},3).to({regY:9.1,scaleY:6.6449,y:131.05},1).to({regY:9,scaleY:5.042,y:130.4},2).wait(2));

	// a
	this.instance_17 = new lib.a();
	this.instance_17.setTransform(425.95,70.65,4.897,4.897,0,0,0,3.1,9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(149).to({_off:false},0).to({regX:3.2,regY:9.1,scaleY:2.8726,x:426.4,y:130.1},3).to({scaleY:5.9093,y:130.25},1).to({regX:3.1,regY:9,scaleY:4.897,x:425.95,y:129.65},1).wait(6));

	// i
	this.instance_18 = new lib.i();
	this.instance_18.setTransform(415.2,77.2,4.5704,4.5704,0,0,0,2.8,8.8);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(146).to({_off:false},0).to({regY:8.9,scaleX:4.8878,scaleY:2.6635,x:415.05,y:129.7},3).to({scaleY:6.2058,y:129.5},1).to({regY:8.8,scaleY:4.8878,y:129},1).wait(9));

	// r
	this.instance_19 = new lib.r();
	this.instance_19.setTransform(403.7,94.55,4.5154,4.5154,0,0,0,3.1,8.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(143).to({_off:false},0).to({scaleY:2.8317,x:403.55,y:129.05},3).to({scaleY:6.2501,x:404.25,y:128.85},1).to({scaleY:4.9746,x:403.35,y:128.95},1).wait(12));

	// t
	this.instance_20 = new lib.t();
	this.instance_20.setTransform(391.6,86.65,4.6143,4.6143,0,0,0,3.1,9);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(140).to({_off:false},0).to({regX:3.2,scaleX:4.9027,scaleY:3.5681,x:392.2,y:129.9},3).to({scaleY:6.4552,y:130.15},1).to({regX:3.1,scaleY:4.9027,x:391.6,y:129.9},1).wait(15));

	// s
	this.instance_21 = new lib.s();
	this.instance_21.setTransform(369.7,83.65,4.589,4.589,0,0,0,3.6,9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(137).to({_off:false},0).to({regY:8.9,scaleY:2.8452,x:369.2,y:129.45},3).to({regY:9,scaleY:5.4738,y:129.75},1).to({regY:8.9,scaleY:4.6893,y:129.3},1).wait(18));

	// h
	this.instance_22 = new lib.h();
	this.instance_22.setTransform(351.5,89.05,5.0353,5.0353,0,0,0,4,9.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(134).to({_off:false},0).to({scaleY:2.6428,y:130.3},3).to({regX:4.1,scaleY:6.3985,x:352.2,y:130.85},1).to({regX:4,scaleY:5.0353,x:351.7,y:130.45},1).wait(21));

	// t
	this.instance_23 = new lib.t();
	this.instance_23.setTransform(334.9,86.65,4.6143,4.6143,0,0,0,3.1,9);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(131).to({_off:false},0).to({regX:3.2,scaleX:4.9027,scaleY:3.5681,x:335.6,y:129.9},3).to({scaleY:6.4552,y:130.15},1).to({regX:3.1,scaleY:4.9027,x:335.1,y:129.9},1).wait(24));

	// n
	this.instance_24 = new lib.n();
	this.instance_24.setTransform(319.9,92.8,4.9274,4.9274,0,0,0,4.1,8.8);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(128).to({_off:false},0).to({regY:9,scaleY:3.0005,x:320.9,y:130.3},3).to({regY:9.1,scaleY:6.7677,x:319.9,y:130.8},1).to({regY:9,scaleY:4.9274,x:319.65,y:130.2},1).wait(27));

	// o
	this.instance_25 = new lib.o();
	this.instance_25.setTransform(298.4,92.15,5,5,0,0,0,3.9,8.8);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(124).to({_off:false},0).to({regY:8.9,scaleY:2.4157,x:298.3,y:130.1},3).to({regX:4.2,regY:8.8,scaleY:7.2159,x:299.9,y:129.2},1).to({scaleY:5,x:299.75},1).wait(31));

	// m
	this.instance_26 = new lib.m();
	this.instance_26.setTransform(275,87.15,4.8948,4.8948,0,0,0,5.4,8.8);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(120).to({_off:false},0).to({regX:5.5,scaleY:2.9648,x:275.45,y:129.15},3).to({scaleY:7.4121,y:129.4},1).to({regX:5.4,scaleY:4.8948,x:275,y:129},1).wait(35));

	// Calque_2
	this.text_2 = new cjs.Text("3", "53px 'Chalkduster'", "#660033");
	this.text_2.lineHeight = 69;
	this.text_2.lineWidth = 43;
	this.text_2.parent = this;
	this.text_2.setTransform(219.5,88.35);
	this.text_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(118).to({_off:false},0).wait(42));

	// Vague
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,0,0,0)").s().p("AzIP1Q8Ogik7hbQk8hZZrmgQZomgPIkZQPIkaK2jzQK0jxE8BaQE9BZmdHYQmbHWw+H4Qv3HW5vAAQhxAAh0gCg");
	this.shape.setTransform(406.1456,-4.6261);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,0,0,0.102)").s().p("A0KPLQ7Hgmi+gxQi/gwY6ndQY4ndPOjfQPOjfJ2jhQJ2jfC+AwQDBAwm8HFQm7HFv9H+QuzHa4eAAQh2AAh6gDg");
	this.shape_1.setTransform(403.2643,-2.5142);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,0,0,0.2)").s().p("A1VOlQ5/gqhCgIQhCgGYKobQYIoaPTikQPUilI3jOQI2jOBDAGQBDAGncGzQnaG0u7IEQtxHe3OAAQh6AAh/gDg");
	this.shape_2.setTransform(401.257,-0.7735);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,0,0,0.302)").s().p("A2vOEQyQgikXAJQEahMSlncQXXpXPahpQPahrH3i9QBWggBFgbQD7i8AnAYQAxAelTCGQhzBWigCEQn6Ggt5IMQsvHi1+AAQh/AAiDgEgEgurAN4QgQgJBlgEQg1APgVAAQgIAAgDgCg");
	this.shape_3.setTransform(400.751,0.429);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,0,0,0.4)").s().p("EgtQANxQhlgpGdgEQiwA1hUAAQghAAgTgIgA4YNYQqtgXlTADQGah8OOmfQWnqUPggvQIGgZFvg6IBTg9QIamPC2BNQC3BNm3CqQjTBSlQA2QoFF5r6HrQruHl0yAAQiAAAiFgEg");
	this.shape_4.setTransform(401.8315,2.7217);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,0,0,0.502)").s().p("EgsAANmQjphZMLAKQkZBgicAAQhCAAgrgRgA6LMnQldgNj2gDQGxiULal5QV3rRPmALQC1ACChgDQnqFMpmG0QquHpzpAAQh/AAiFgFgEgjeAMXIAAAAgAdApUQI6l8EzB3QEzB2l4CZQk1B9rTAQIDgiXg");
	this.shape_5.setTransform(403.944,5.5679);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,0,0,0.6)").s().p("Egq2ANcQmQiUR/AoQliCHjfAAQhkAAhKgbgA8GL3IjBgHQGoihJiliQUPruPQAhQnuE+onGyQpwHtyeAAQh/AAiGgGgAV2ncIhUgEQB+hRB6hKQJalqGvCgQGxCgk6CHQjPBan8AAQkFAAlUgYgAUingIAAAAg");
	this.shape_6.setTransform(406.6524,8.2124);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,0,0,0.698)").s().p("EgpwANUQosjJUZA/QBeAEBaABQmWCskcAAQiHAAhsgngA7LLPQGUiqINlUQPVp7MuhUQnsEwnnGuQoxHwxWAAIhKgBgA7LLPIAAAAgAXen6Qj5ggkMAcQCMhXCMhMQJ5lYIsDKQItDKj6B2Qh3A4kmAAQlAAAoOhDg");
	this.shape_7.setTransform(409.754,10.6876);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,0,0,0.8)").s().p("EgorANNQqpjzTRBDQFIASEZgbQFliuGkkvQJcmzIki3QmKEElgFfQmaGbsFBJQniDslsAAQirAAiQgzgAZFoXQoPhhpPDFQDoiZD3h5QKYlGKpD0QKqD0i7BjQhBAjimAAQk2AAqUh6g");
	this.shape_8.setTransform(413.0721,13.0334);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,0,0,0.898)").s().p("EgnoANIQslkdSJBHQOMA4H0lPQsJIupXAAQjMAAi4hBgAoNCCQHvo2K3k0QK5k0MmEeQMmEdh8BSQh8BSv7j1Qv9j3y3PHQhWBEhUA+QBbhHBLhXg");
	this.shape_9.setTransform(416.4776,15.2254);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660000").s().p("EgmkANEQuilGRBBLQRBBLGto+QGto+LXkhQLYkiOjFHQOjFHg9BAQg8BAwCkvQwCkxyHQDQtxMMrsAAQjuAAjghOg");
	this.shape_10.setTransform(419.8959,17.297);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,0,0,0.922)").s().p("EgkPAKvQhZgGhKgDQlEilMXA5QF0AbEkgzQlFCSnMAAQhZAAhegFgAuSDVQGXoSKykKQBbgjBfgaQB2gfB8gQIg8AVQq0EJmlINQkNFQoIBaQEHh2CujXgAZ7mLIhAgSQpNidp+EoQKvmQJ/BrIA5ATQNmEuguA6QgHAJghAAQiaAArSjYg");
	this.shape_11.setTransform(414.4745,9.7219);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660000").s().p("Egm2AM3IgBAAQsakXLzAdQBKADBZAGQJFAiGDiuQIHhbEOlQQGloMK0kJIA7gWQHkikI4BkQDpAoDzBSQNsErhSAwQhCA1ugkSIgqgMQhlgehmgSQp+hrqwGQQkWCjkdD0Ql0E+lcC0Qo6F1n9AAQjmAAjZhMg");
	this.shape_12.setTransform(418.8963,20.1894);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660000").s().p("EgicALCIgZgGQgegHgegJIgJgDQrfkHO2BGQDmASDGgMQKEgqE6ltQFsmiIojsQBMghBPgdQHpisI7BgQDiAlDlBLQM2EPhnAfQhJArtpkCIgogMQnAiGnXB6QlgBclsDsQm1CwnQGKQiCBwh/BcQl7ColcAAQicAAiWgig");
	this.shape_13.setTransform(445.3103,8.8045);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,0,0,0.847)").s().p("EgheALTIgBAAQsvkdOHA3QD5ALDVggIAaAGQHkBsIljyQB/hdCChwQHOmKG1iwQi1B1i4CYQmbFRl8CpQpuHFonAAQjfAAjUhKgAr7AtQGCnmKMjzQBWggBZgXQDEgyDSgHQopDslrGkQk6FrqFAqQCPhcBxiAgAa0oGIg8gPQnxhyoZDYQFujsFghbQDJAkDUBHQMoEUggA0QgEAIgZAAQh/AAqRjLg");
	this.shape_14.setTransform(381.6671,31.694);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#660000").s().p("EghGAJ8QgpgIgogLIAAAAIgIgDQqHjpNzBEQBcAIBXACQiABviYBKIgugIgAq9CUQAagYAZgbQETkhF3jAQCxhcDJhFQHWiaIaBYQDcAiDXBCQMADzh9APQhQAhswjyIgngMQpqi6qUEwQjoBrjsCoQjuBRj2CUQhwBmiRBFQCCheB/hNg");
	this.shape_15.setTransform(458.0865,3.6875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,0,0,0.769)").s().p("A+7KcIAAAAQr3kKMqAuQHUANFXioQCYhLCAhuQAugnAqgtQFsm5JmjcQBRgdBUgVQELhAElAQQl3DAkTEiQgZAagaAZQh/BMiABeQCQhEBvhmQD3iVDthRQDtioDphrQDHAhDTBEQLsD7gSAtQgHArrBjiIg3gMQmWhMm1CVQhQA5hSBAQnGFkmeCYQqgIfpRAAQjYAAjNhIg");
	this.shape_16.setTransform(362.5688,38.8104);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660000").s().p("A/yIkIg+gNIgOgDIAAAAIgHgCQoRjCLBAyIBSAGQGvAnE5hMQEFiqD7hgQjFC+k7BMQhgA/hhBIQj+BNjvAAQh2AAhzgTgAjgjLQEQipFOhsQHCiIH7BQQDUAfDKA6QLKDYiTgCQhXAXr5jjIglgLQrrjishHpQiFBRiGBlIgtAgQhZAZhZAjQCsijDPiBg");
	this.shape_17.setTransform(470.8968,0.3821);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(102,0,0,0.694)").s().p("A8XJkIgBAAQq/j2LPAkQI+ACGVlFIA9AMQFaA5F8hyQhHA1hIA6QqMIYpDAAQjQAAjHhFgACehkQE7hMDFi/Qj6BhkGCqQk4BLmvgmIhSgGQFKlYIJixQBMgaBOgTQFQhNF4A1QjQCBisCjQBagiBYgZQnPFPmjB9QBghHBgg/gAYTnUIgzgJQk9gtlTBgIAtghQCGhlCGhRQCdAdCkAzQKuDhgEAnQACAFgNAAQhGAAoQiwg");
	this.shape_18.setTransform(343.4682,46.0045);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(102,0,0,0.616)").s().p("A51IsIAAAAQqGjiJxAbQINgQGslkQBKhSBVhIQAtAXBTAfIAGACIgBAAQAlAHAkAFQFKAqFrhrQjkCBjsC5QpTHboYAAQjJAAjChDgAiajhQjJgShxAAQEBi8FdhwQBHgXBIgQQGUhXHMBlIgsAiQh4BPh2BAQjCA3jKBkQiZAZizAAQiJAAiYgOgAXCm7IgvgGQjqgUj4A5QAvgfAqglQAhgcAigaIAxghQBhAWBjAdQJxDHAKAhQAEAEgHAAQgqAAnOijg");
	this.shape_19.setTransform(324.4295,53.1788);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#660000").s().p("A+eHXQgkgFgkgHIAAAAIgGgCQhSgegtgYQiOhKDrABQByAADIARQFgAiEPgsQDKhlDBg2QB2hBB5hPIAsghQCIhlCahUQhwBChxBQIg8AoIgxAgQgiAbghAcQgqAkgwAgQiQBhjBAyQiKA7iFAoQkEBMjzAAQhhAAhegMgAQInZQlPgOk5BUQkmBZj3CGQJhlkJEA/gEAh/gDJQheAOrBjUIgkgLQiZguibgRQCAAFCCAUQDOAbC8AzQJaCrhXAAIgYgCg");
	this.shape_20.setTransform(483.7529,-4.1795);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(102,0,0,0.537)").s().p("A3SH0IgBAAQpNjOIUARQGdgiGrk5QEqk3H2iVQBBgUBDgOQGPhPHEBnQiqBPikAyQjUAQj+gbQqrg/F+CSIAFACIgBAAIBEAIQFKAeFthwQECgSDChRIARAFICoA0IgcgCQqLgNsJJIQoZGfnsAAQjDAAi8hBgAWsmMQFHBpATAUQABAAABABQABAAAAABQABAAAAAAQAAABgBAAQgNAAlQiAgAVimjIAOABIA8AWIhKgXg");
	this.shape_21.setTransform(305.4349,60.3834);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#660000").s().p("A9JGiIhFgIIABAAIgFgCQl+iSKsA/QD+AbDUgQQCkgyCqhPQDchlDoiUQNFomMYDzIAjALIAcAJIhCgJQm7g+mcBiQoFCNl+EZQhcBFhyAwQjCBRkCASQkgBYkKAAQhIAAhFgGgAfviRQhjADpwi7QCiAWCRAkQHzCEgpAAQgJAAghgGg");
	this.shape_22.setTransform(496.6373,-11.0114);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(102,0,0,0.463)").s().p("A0xG5IAAAAQoVi5G4AHQEsg0GqkOQEVkLHQh+QA8gRA+gLQBhgRBkgHIARAHIAEABIA/AFQB8AGCBgMQC1ASC+AyICFAnQoyA7qgHiQnfFim/AAQi+AAi4hAgAZNkFQghgSl3hvQAigEAhgCIAmAAQFJCJgSAAIgIgCgAS1mGIAAAAg");
	this.shape_23.setTransform(286.4765,67.8244);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#660000").s().p("A72FsIg/gFIgEgBIgRgHQkBhsJWA7QB6AOBvAEQh4Aah1AMQhYAIhWAAQgoAAgngCgA0MFAQGshcHekYQMQnVLxDpIAhAKQDHA9CQAoQiZgfi1gUQmbg2mIBQQniB0l3DoQkRCwnKAAQguAAgwgCgAddhbQhIgEkehSIATAEIGOBgIg7gOg");
	this.shape_24.setTransform(509.5277,-17.7979);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(102,0,0,0.384)").s().p("AyQGDIgBAAQncilFbgDQC7hGGqjjQD/jfGshmQA1gOA5gJQGHg8GzBnICPAoQnhBtpDGFQmjEmmRAAQi4AAi1g+gAWUj2IlfhhQA7gOA5gJIAigDQEEB7gxAAIgKAAgAQ1lXIAAAAg");
	this.shape_25.setTransform(267.6584,74.8454);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#660000").s().p("A7cE1IgDgBQjNhYInA7IAmAFQilAaidAAIg7gBgA1fEcQHPhJIMkQQLamGLKDfIAgAKQIaClBzAQQDpBCnwhnQiUgbi5gSQl7gtl1A9Qm/BclvC3Qj5CDmEAAQiUAAipgTgA1fEcIAAAAg");
	this.shape_26.setTransform(522.3781,-24.5163);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(102,0,0,0.306)").s().p("AvyFKQmkiRD+gMQBLhZGqi3QDpizGGhPQAxgLAygHQFngtGEBRICyAtQmaCPn0E0QlnDrlhAAQi1AAizg+gATZjqQgxgGjcg2QBIgZBEgUIAegGQC8BvhTAAIgGAAgAPMkmIAAAAg");
	this.shape_27.setTransform(249.0225,82.0806);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#660000").s().p("A0UDxIiQgQQHqg8I2j6QKkk2KjDUIAeAKQHjCVB6AZQD/BTm7hMQiFgSiygOQlbglliArQmcBCloCHQjaBXk6AAQi1AAjVgdgA6DDyQhigwFBAfQhVALhSAFIg4ACIAAgBgA2kDhIAAAAg");
	this.shape_28.setTransform(535.0723,-29.7649);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(102,0,0,0.231)").s().p("AtWERIgBAAQlrh9CigWQgnhrGqiLQDTiIFhg3QAsgIAtgFQFFgeFWA7QCMAfBfASQldCmmxDvQkqCwkuAAQizAAizg+gAN2j2ICOhCIAZgJQBuBghxADQgtgBh3gXgAN2j2IAAAAg");
	this.shape_29.setTransform(230.741,89.3802);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#660000").s().p("AyfDHQjagdhggGQIBhBJYjVQJvjmJ8DKIAcAJQGrCFCBAkQEVBkmEgxQh5gLiqgLQk8gclOAYQl6AqlfBXQixAvjmAAQjOAAj4gmgA3ZCkIgYADIgzAGQgNgOBYAFgA3ZCkIAAAAg");
	this.shape_30.setTransform(547.3116,-34.5919);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(102,0,0,0.153)").s().p("Aq3DiQkzhqBFgfQiXh8GphiQC+hbE7ggQAngFAogCQEkgPEnAkQDdAnBmADQksC+mAC0QjrB3j2AAQi0AAi5g/gANDjIQA6gmA4gmIAUgMQAZBOiCAJIgSABIgLAAgANDjIIAAAAg");
	this.shape_31.setTransform(211.9724,95.7229);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#660000").s().p("AwhCdQlfg2g7AAIgCAAIAvgJQHmheI1iPQI5iWJVDAIAbAIQFzB2CIAuQEqB0lNgVQhrgDikgIQkbgUk7AGQlXASlXAlQhuAOh/AAQj4AAk3g1g");
	this.shape_32.setTransform(558.7062,-39.3525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(102,0,0,0.078)").s().p("AoHC0IAAAAQj7hVgXgpQkIiPGpg2QCogvEWgJQAhgCAiAAQEDAAD5AOQDEAUBtgLQCMgOA9g3IgKAKQkUEWmLCOQioBBi0AAQi6AAjHhEg");
	this.shape_33.setTransform(191.6291,101.8629);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#660000").s().p("APcDaIojgZQk0gHlPgLQk9gHmdhRQkcg0iUgdIgCgBIgBAAIAqgMQHBh9IEhDQIFhGItC1IAaAIQE7BmCPA4QFACEkYAIQguACg/AAQg+AAhPgCg");
	this.shape_34.setTransform(570.2459,-41.4006);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(102,0,0,0)").s().p("AlYCIQwiliTXBSQJDAmGgh1QkPGvnUAAQjIAAjthQg");
	this.shape_35.setTransform(171.3716,107.8143);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#660000").s().p("AO3EMQr7gI2slrIgEgBIAmgQQM8k7QgFkQQLFcrCAAIgggBg");
	this.shape_36.setTransform(582.0474,-42.285);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(102,0,0,0)").s().p("AljC/Qs9k6RDAoQJCjEDlAgQlgH0mgAAQiSAAibg+g");
	this.shape_37.setTransform(171.0734,94.9015);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#660000").s().p("Aw8CPQiHgUAwiRQBDiaB8g5QM/lHNLGCQNMGApiCIQiuAmjuAAQpVAAvrjxg");
	this.shape_38.setTransform(579.2118,-41.0677);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(102,0,0,0)").s().p("AlrELQpZkSOvgCQJBmuAqC1Qm2I7lSAAQhhAAhYgug");
	this.shape_39.setTransform(170.5781,79.879);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#660000").s().p("AuHFrQkKgoBhkkQBxkrDlhrQNClRJ2GfQJ2GenJEXQjYCDmgAAQnQAArKikg");
	this.shape_40.setTransform(576.3464,-37.1279);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(102,0,0,0)").s().p("Al9FYQl1jrMagrQJBqYiSFLQoPKFjqAAQg1AAgmgig");
	this.shape_41.setTransform(171.0567,64.6563);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#660000").s().p("ArTI4QmNg6CSm3QCgm8FOicQNGldGgG9QGgG7kxGmQi2D7oZAAQlrAAoOhzg");
	this.shape_42.setTransform(573.474,-31.8426);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(102,0,0,0)").s().p("AmkGmQh9irHZhWQCgioDskRQFOnhpAOCQhTALhHANQkJEXg/AAQgSAAgCgWg");
	this.shape_43.setTransform(173.6027,49.5081);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#660000").s().p("AoeL/QoRhODEpJQDNpNG4jOQNKlpDJHbQDLHaiYI0QhpGDpvAAQkcAAmKhRg");
	this.shape_44.setTransform(570.6093,-25.7653);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(101,0,0,0)").s().p("ADUkeQIIp2o+RsQnyB+hUCcQgWAOgIAAQg6ABLUsfg");
	this.shape_45.setTransform(172.7214,34.4363);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#650000").s().p("AluPAQqVhhD1rbQD9reIfkBQNPlzgMH4QgMH4AALDQAAIUqrAAQjfAAkpg5g");
	this.shape_46.setTransform(568.2189,-19.2114);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(101,0,0,0)").s().p("AB9kqQLEsLo9VWQleCok5B0QgiAJgXAAQjzAAM8twg");
	this.shape_47.setTransform(169.2817,19.4543);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#650000").s().p("AkPR+QsYh0EmttQErtwKIkyQNTl/jiIWQjiIVCZNTQB6KsrUAAQivAAjggog");
	this.shape_48.setTransform(573.9428,-12.315);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(101,0,0,0)").s().p("AArk2QN/uho8ZBQjLDRocBNQgiAEgdAAQnFAAOovCg");
	this.shape_49.setTransform(165.3903,4.5607);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#650000").s().p("AjNU6QubiHFYwAQFZwBLxlkQNXmKm4I0Qm3IyExPiQEBNJrwAAQiHAAiqgbg");
	this.shape_50.setTransform(582.4305,-5.2216);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(101,0,0,0)").s().p("AgllCQQ5w3o7crQg3D7sAAlIgvABQqwAAQYwVg");
	this.shape_51.setTransform(161.31,-10.2498);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#650000").s().p("AiZX0QwfibGJyRQGIyTNamWQNamVqNJRQqNJQHJRyQGSPpsDAAQhnAAh9gSg");
	this.shape_52.setTransform(592.4538,2.0585);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(101,0,0,0)").s().p("Agmk/QRKwspEcZQg3D4sMAkIgwABQq6AAQnwKg");
	this.shape_53.setTransform(152.9162,-8.8809);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#650000").s().p("AgtX1QgzgDgxgGQnjhQi8lZQiukwCnoDIAEgOQBckaBvjfQAfg+Adg1QASgfAVgcQAfgxApguQCRlJDrjeQA2g3A/gwQBHg1BSguQBZgzBkgrQCTg9BYgjQCFgzBGgNQCAgXhdB0QgUAegmApQg1A5hVBKIguAoQhYBLhLBRQiNCMgwCpQgZBngDBqQgDBwASB2QARCQA3CgQA5CsBUDFIAoBgQApBmAKBaQAlDDAACeQABDGg3BwQhKCGjiAlQhUARhtAAQgwAAgzgDg");
	this.shape_54.setTransform(589.9881,0.7376);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(101,0,0,0)").s().p("Agmk8QRawipMcIQg5D2sYAkIgvABQrGAAQ4wBg");
	this.shape_55.setTransform(144.5254,-7.5116);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#650000").s().p("AgkXwQnWg5j4lLQjrkkCkoGIAFgMQBfkwBvjcQAihDAdgzQAUggAXgaQAggtAxgqQBdlcDYjiQAxg9BCgzQBHg3BYgtQBagyBtgqQCig8BTghQCLgyBJgQQCDgahQBkQgSAegpAsQg2A7hbBLIgvAnQhdBKhSBMQirCGglCmQgQBpALBmQAKBsAfBtQAfCFBKCaQBMCiBfDFQAXAwAUAxQArBngIBbQAKDAgGClQgEDJgZBwQgpCEjOA4QhuAoisAEIgzAAIgyAAg");
	this.shape_56.setTransform(587.2584,-0.0058);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(101,0,0,0)").s().p("Agnk5QRrwXpVb1Qg6D0sjAjIgwABQrQABRHv3g");
	this.shape_57.setTransform(136.1315,-6.1427);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#650000").s().p("AqySRQkokYCioJIAEgMQBjlDBvjaQAlhJAdgxQAVghAagYQAhgpA5gmQApluDFjoQAthCBDg2QBIg4BegtQBcgxB0gpQCyg8BOgeQCQgwBOgTQCEgehDBVQgPAegsAvQg3A8hhBMIgwAmQhhBJhbBIQjJCAgZCjQgGBrAXBiQAYBnAsBkQAtB7BdCSQBfCaBqDFQAaAwAUAwQAtBqgbBcQgQC7gMCsQgKDNAHBwQgICCi7BMQhiA2iuATQgzAFg0ADQnHgik1k7g");
	this.shape_58.setTransform(584.3873,-0.2567);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(101,0,0,0)").s().p("Agok2QR7wNpdbkQg7DxsuAjIgyABQrZAARWvsg");
	this.shape_59.setTransform(127.7605,-4.7854);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#650000").s().p("ApyS1QlmkMChoLIAEgLQBnlYBujYQAohOAdgvQAWghAegWQAhgmBCghQgLmBCxjuQAohIBGg3QBJg6BjguQBegvB8goQDAg7BLgcQCVgvBSgWQCGggg3BEQgMAeguAzQg5A+hnBMIgxAlQhlBHhkBEQjmB7gOCfQADBtAlBeQAlBjA5BcQA6BwBxCKQBxCSB1DEQAeAwAVAxQAuBsgtBdQgrC3gSCzQgQDRAmBvQAZCAinBfQhXBGiuAhQg0AKg2AHQm5gMlxksg");
	this.shape_60.setTransform(581.4509,-0.5005);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(101,0,0,0)").s().p("AgokyQSLwDpmbSQg7Dvs6AiIgzABQrkAARnvhg");
	this.shape_61.setTransform(119.3469,-3.418);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#650000").s().p("AoxTaQmjkBCfoNIADgKQBrlsBujXQArhTAdguQAXghAhgUQAigiBKgdQg/mUCejyQAjhOBIg6QBKg7BpguQBggtCEgoQDPg6BGgaQCaguBWgZQCJgjgrA0QgJAegxA2Qg6BAhtBNIgyAkQhpBGhtBAQkDB0gDCdQAMBvAzBaQAyBeBHBTQBHBlCDCDQCFCKCADDQAhAxAVAwQAwBvg/BeQhGCygXC6QgXDVBGBvQA5B+iTByQhMBViuAwQg0AOg4ALIghABQmcAAmckSg");
	this.shape_62.setTransform(578.4676,-0.7858);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(101,0,0,0)").s().p("AgpkwQScv4pvbBQg8DstGAiIgyACQrvAAR2vZg");
	this.shape_63.setTransform(110.9759,-2.0472);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#650000").s().p("AoDT+Qngj1CcoQIADgIQBvmBBujWQAthXAdgsQAZgiAkgSQAjgfBSgYQhzmnCKj3QAfhTBKg9QBKg9BwguQBhgsCMgmQDeg6BCgXQCfguBagbQCLgmgeAjQgHAfg0A6Qg7BBhzBNQgYASgaARQhuBFh1A8QkgBuAICaQAVBxBABWQA/BZBUBLQBVBbCXB7QCXCBCMDDQAkAxAVAwQAxBxhRBfQhgCugeDBQgcDZBlBuQBaB9iACFQhBBkiuA/Qg0ASg6AQQguAEgwAAQl4AAmxjwg");
	this.shape_64.setTransform(577.4362,-0.9739);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(101,0,0,0)").s().p("AgpksQSsvup4avQg8DptSAiIg0ABQr4AASGvNg");
	this.shape_65.setTransform(102.5893,-0.6783);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#650000").s().p("AnqUiQodjpCboSIACgIQBymVBujUQAxhdAdgqQAZgjAngPQAlgbBagUQiom5B4j9QAahZBMhAQBLg9B2guQBkgrCSglQDtg5A+gWQClgsBegeQCMgpgRATQgEAfg3A9Qg8BCh5BOQgZASgbAQQhxBFh+A3Qk9BoATCXQAfBzBMBSQBMBVBiBCQBjBQCpBzQCrB5CWDEQAnAwAVAwQA0B0hkBgQh7CpgjDIQgjDdCFBuQB7B6hsCZQg2BzivBNQg0AXg7AUQhKAKhOAAQleAAnBjQg");
	this.shape_66.setTransform(578.3872,-1.1552);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(101,0,0,0)").s().p("AgpkpQS7vjqAacQg9DotdAhIg1ABQsDAASXvDg");
	this.shape_67.setTransform(94.1757,0.6857);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#650000").s().p("AnQVGQpajcCYoVIACgHQB2mpBujSQA0hjAcgoQAbgjAqgOQAlgXBjgQQjcnLBkkCQAWheBOhDQBLg/B8guQBmgpCaglQD8g4A6gTQCqgrBighQCOgsgFADQgBAfg6BAQg9BEh+BPIg1AhQh2BDiHAzQlaBiAeCUQApB1BZBOQBaBQBvA6QBwBFC8BsQC+BvCiDEQAqAyAVAvQA1B2h2BhQiVClgpDPQgpDhCkBuQCcB4hYCsQgrCCiwBcQg0Abg9AYQhhAThuAAQlNABnJi1g");
	this.shape_68.setTransform(579.3076,-1.4705);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(101,0,0,0)").s().p("AgqkmQTMvZqJaLQg+DltpAhIg0ABQsOAASmu5g");
	this.shape_69.setTransform(85.8047,2.0565);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#650000").s().p("Am2VtQqXjRCWoXIACgGQB5m+BujQQA3hoAcgmQAcgkAtgMQAmgTBrgMQkQneBRkHQARhjBQhGQBMhACCguQBogoCjgkQEKg4A1gQQCvgqBmgkQCQgvAJgNQABAfg9BEQg+BFiEBPQgaARgcAPQh6BDiPAvQl4BcApCQQAyB3BnBKQBmBMB9AxIFNCfQDRBnCtDEQAtAyAVAvQA3B4iIBiQiwChgvDVQgvDlDEBuQC8B2hEC/QggCRixBrQg0Afg+AdQh1AfiSAAQlCAAnLiag");
	this.shape_70.setTransform(580.2208,-1.9092);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(101,0,0,0)").s().p("AgqkjQTcvOqRZ5Qg/Dit1AhIg1ABQsZAAS3uvg");
	this.shape_71.setTransform(77.391,3.4239);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#650000").s().p("AmcWSQrUjFCUoaIABgEQB9nTBujQQA6hrAcglQAdgkAwgKQAngPB0gIQlFnxA+kMQAMhpBShIQBNhCCIguQBpgmCsgjQEZg3AwgPQC1gpBqgmQCSgyAVgeQAEAghABHQg/BHiKBQQgbAQgcAPQh+BBiYArQmVBWA0CNQA7B5B1BGQBzBICLAoQCKAwDjBcQDkBfC4DDQAwAzAVAvQA5B6iaBjQjLCdg1DcQg1DpDjBtQDdB0gwDTQgVCgixB5Qg0AkhAAhQiIAvi6AAQk5AAnIiEg");
	this.shape_72.setTransform(581.1273,-2.2429);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(101,0,0,0)").s().p("AgrkfQTsvEqZZnQhADguAAgIg3ABQsiAATGukg");
	this.shape_73.setTransform(69.02,4.7812);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#650000").s().p("AmHW2QsSi5CTocIABgDQCBnnBtjPQA9hwAcgjQAeglA0gHQAngNB8gCQl4oEAqkSQAHhuBVhLQBNhDCOgvQBrgkCzgiQEog2AtgNQC5goBugpQCVg0AhgvQAHAghCBLQhBBIiQBRQgbAPgdAPQiCA/ihAnQmyBRA/CKQBEB7CDBCQCBBDCXAgQCYAlD2BUQD2BWDDDDQA0AzAWAwQA6B9itBjQjlCYg7DkQg7DsEDBtQD9BygcDmQgKCwixCIQg1AohCAkQiXBAjoAAQkzAAm/hvg");
	this.shape_74.setTransform(582.5432,-2.457);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(101,0,0,0)").s().p("AgskcQT9u6qiZVQhBDeuLAgIg4ABQssAATVuag");
	this.shape_75.setTransform(60.6262,6.1502);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#650000").s().p("Al6XZQtPitCQofIABgDQCEn7BujMQA/h2AcgiQAgglA2gFQApgJCEACQmtoWAXkXQADh0BXhOQBNhECUgvQBugjC6ghQE3g2ApgKQC+gmBzgsQCWg4Aug+QAJAfhFBPQhBBJiXBSQgbAPgdAOQiHA+ioAjQnRBKBLCHQBNB9CQA+QCPA/CkAXQClAbEJBMQEKBODODDQA2AzAWAvQA8CAi/BlQj/CThBDqQhBDxEiBsQEeBwgJD5QACC/iyCXQg1AshDApQikBTkdAAQktAAmyhcg");
	this.shape_76.setTransform(584.7607,-2.5471);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(101,0,0,0)").s().p("AgskZQUNuvqrZDQhCDbuXAgIg3ABQs4AATmuQg");
	this.shape_77.setTransform(52.2353,7.5194);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#650000").s().p("AlvX7QuMiiCOohIABgBQCIoQBtjLQBDh7AbgfQAigmA5gDQApgFCNAGQnhopAEkcQgCh6BYhQQBOhGCbgvQBvghDDghQFHg0AjgIQDDgmB3gvQCYg6A7hPQAMAghIBSQhDBLicBSQgcAPgeANQiLA9iwAfQnuBEBVCEQBXB/CdA6QCcA6CxAPQCzAQEcBFQEdBFDZDCQA6A0AWAvQA9CCjQBmQkbCPhGDxQhHD0FBBtQE/BuALEMQAMDOiyClQg1AxhFAtQiuBplZAAQkmAAmihMg");
	this.shape_78.setTransform(587.1057,-2.5403);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(101,0,0,0)").s().p("AgtkWQUeukq0YxQhCDZujAfIg5ABQtBAAT1uGg");
	this.shape_79.setTransform(43.8415,8.8884);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#650000").s().p("AlkYcQvJiVCMolQCMokBtjJQBGiAAbgeQAjgmA8gCQAqgBCVAKQoVo7gPkhQgHh/BbhTQBOhIChguQB1giDVggIFng4QDIgkB6gyQCag9BIhfQAPAghLBVQhEBNiiBSQijBSjgAgQoLA/BgCAQBgCBCqA2QCqA2DAAGQC/AFEvA9QEwA9DkDCQDkDDk1CLQk1CMhND3QhMD5FgBrQFgBsAfEgQAeEfk1DYQi3CAmeAAQkeAAmLg9g");
	this.shape_80.setTransform(589.5286,-2.4485);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.3,-277.3,821.4,468.20000000000005);


// stage content:
(lib.banniere = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
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
		
		this.fond.addEventListener("mouseover",avance);
		
		
		function avance(){
			root.animation.gotoAndPlay("play")
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// animation
	this.animation = new lib.gobelet_avance();
	this.animation.name = "animation";
	this.animation.setTransform(-83.9,230.1,0.9605,0.9605,0,0,0,5.7,42.9);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(1));

	// fond
	this.fond = new lib.fond();
	this.fond.name = "fond";
	this.fond.setTransform(-1.75,190,2.0003,1.4286,0,0,0,0.1,133);

	this.timeline.addTween(cjs.Tween.get(this.fond).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(198,190,429.1,190);
// library properties:
lib.properties = {
	id: 'F7C8763026524B20BE288142D610B1AC',
	width: 628,
	height: 380,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/banniere_atlas_1.png?1688930286246", id:"banniere_atlas_1"}
	],
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
an.compositions['F7C8763026524B20BE288142D610B1AC'] = {
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