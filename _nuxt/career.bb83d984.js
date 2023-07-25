import{F as z}from"./FileInput.c2c03624.js";import{_ as U,r as D,o as w,c as S,a as h,b as C,w as M,t as E,h as O,k as R,l as N,p as I,e as T,d as V}from"./entry.82b8af84.js";class B{constructor(n,l,v,m=!1){const r=this,_=document.location.search.toLowerCase().indexOf("debug=webgl")!==-1;r.canvas=n,r.gl=r.canvas.getContext("webgl",{antialias:!0}),r.meshes=[];const s=r.gl;l&&v&&this.setSize(l,v),r.lastDebugMsg,r.debug=m&&_?function(o){const a=new Date;a-r.lastDebugMsg>1e3&&console.log("---"),console.log(a.toLocaleTimeString()+Array(Math.max(0,32-o.length)).join(" ")+o+": ",...Array.from(arguments).slice(1)),r.lastDebugMsg=a}:()=>{},Object.defineProperties(r,{Material:{enumerable:!1,value:class{constructor(o,a,e={}){const t=this;function c(x,g){const f=s.createShader(x);return s.shaderSource(f,g),s.compileShader(f),s.getShaderParameter(f,s.COMPILE_STATUS)||console.error(s.getShaderInfoLog(f)),r.debug("Material.compileShaderSource",{source:g}),f}function u(x,g){return Object.entries(x).map(([f,y])=>y.getDeclaration(f,g)).join(`
`)}t.uniforms=e,t.uniformInstances=[];const b=`
              precision highp float;
            `;t.vertexSource=`
              ${b}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${u(r.commonUniforms,"vertex")}
              ${u(e,"vertex")}
              ${o}
            `,t.Source=`
              ${b}
              ${u(r.commonUniforms,"fragment")}
              ${u(e,"fragment")}
              ${a}
            `,t.vertexShader=c(s.VERTEX_SHADER,t.vertexSource),t.fragmentShader=c(s.FRAGMENT_SHADER,t.Source),t.program=s.createProgram(),s.attachShader(t.program,t.vertexShader),s.attachShader(t.program,t.fragmentShader),s.linkProgram(t.program),s.getProgramParameter(t.program,s.LINK_STATUS)||console.error(s.getProgramInfoLog(t.program)),s.useProgram(t.program),t.attachUniforms(void 0,r.commonUniforms),t.attachUniforms(void 0,t.uniforms)}attachUniforms(o,a){const e=this;o===void 0?Object.entries(a).forEach(([t,c])=>{e.attachUniforms(t,c)}):a.type==="array"?a.value.forEach((t,c)=>e.attachUniforms(`${o}[${c}]`,t)):a.type==="struct"?Object.entries(a.value).forEach(([t,c])=>e.attachUniforms(`${o}.${t}`,c)):(r.debug("Material.attachUniforms",{name:o,uniform:a}),e.uniformInstances.push({uniform:a,location:s.getUniformLocation(e.program,o)}))}}},Uniform:{enumerable:!1,value:class{constructor(o){this.type="float",Object.assign(this,o),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(o){this.value!==void 0&&s[`uniform${this.typeFn}`](o,this.typeFn.indexOf("Matrix")===0?this.transpose:this.value,this.typeFn.indexOf("Matrix")===0?this.value:null)}getDeclaration(o,a,e){const t=this;if(t.excludeFrom!==a){if(t.type==="array")return t.value[0].getDeclaration(o,a,t.value.length)+`
const int ${o}_length = ${t.value.length};`;if(t.type==="struct"){let c=o.replace("u_","");return c=c.charAt(0).toUpperCase()+c.slice(1),`uniform struct ${c} 
                                  {
`+Object.entries(t.value).map(([u,b])=>b.getDeclaration(u,a).replace(/^uniform/,"")).join("")+`
} ${o}${e>0?`[${e}]`:""};`}return`uniform ${t.type} ${o}${e>0?`[${e}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(o,a,e,t,c){s.createBuffer(),this.attributes={position:new r.Attribute({target:s.ARRAY_BUFFER,size:3}),uv:new r.Attribute({target:s.ARRAY_BUFFER,size:2}),uvNorm:new r.Attribute({target:s.ARRAY_BUFFER,size:2}),index:new r.Attribute({target:s.ELEMENT_ARRAY_BUFFER,size:3,type:s.UNSIGNED_SHORT})},this.setTopology(e,t),this.setSize(o,a,c)}setTopology(o=1,a=1){const e=this;e.xSegCount=o,e.ySegCount=a,e.vertexCount=(e.xSegCount+1)*(e.ySegCount+1),e.quadCount=e.xSegCount*e.ySegCount*2,e.attributes.uv.values=new Float32Array(2*e.vertexCount),e.attributes.uvNorm.values=new Float32Array(2*e.vertexCount),e.attributes.index.values=new Uint16Array(3*e.quadCount);for(let t=0;t<=e.ySegCount;t++)for(let c=0;c<=e.xSegCount;c++){const u=t*(e.xSegCount+1)+c;if(e.attributes.uv.values[2*u]=c/e.xSegCount,e.attributes.uv.values[2*u+1]=1-t/e.ySegCount,e.attributes.uvNorm.values[2*u]=c/e.xSegCount*2-1,e.attributes.uvNorm.values[2*u+1]=1-t/e.ySegCount*2,c<e.xSegCount&&t<e.ySegCount){const b=t*e.xSegCount+c;e.attributes.index.values[6*b]=u,e.attributes.index.values[6*b+1]=u+1+e.xSegCount,e.attributes.index.values[6*b+2]=u+1,e.attributes.index.values[6*b+3]=u+1,e.attributes.index.values[6*b+4]=u+1+e.xSegCount,e.attributes.index.values[6*b+5]=u+2+e.xSegCount}}e.attributes.uv.update(),e.attributes.uvNorm.update(),e.attributes.index.update(),r.debug("Geometry.setTopology",{uv:e.attributes.uv,uvNorm:e.attributes.uvNorm,index:e.attributes.index})}setSize(o=1,a=1,e="xz"){const t=this;t.width=o,t.height=a,t.orientation=e,t.attributes.position.values&&t.attributes.position.values.length===3*t.vertexCount||(t.attributes.position.values=new Float32Array(3*t.vertexCount));const c=o/-2,u=a/-2,b=o/t.xSegCount,x=a/t.ySegCount;for(let g=0;g<=t.ySegCount;g++){const f=u+g*x;for(let y=0;y<=t.xSegCount;y++){const A=c+y*b,F=g*(t.xSegCount+1)+y;t.attributes.position.values[3*F+"xyz".indexOf(e[0])]=A,t.attributes.position.values[3*F+"xyz".indexOf(e[1])]=-f}}t.attributes.position.update(),r.debug("Geometry.setSize",{position:t.attributes.position})}}},Mesh:{enumerable:!1,value:class{constructor(o,a){const e=this;e.geometry=o,e.material=a,e.wireframe=!1,e.attributeInstances=[],Object.entries(e.geometry.attributes).forEach(([t,c])=>{e.attributeInstances.push({attribute:c,location:c.attach(t,e.material.program)})}),r.meshes.push(e),r.debug("Mesh.constructor",{mesh:e})}draw(){s.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:o,location:a})=>o.update(a)),this.attributeInstances.forEach(({attribute:o,location:a})=>o.use(a)),s.drawElements(this.wireframe?s.LINES:s.TRIANGLES,this.geometry.attributes.index.values.length,s.UNSIGNED_SHORT,0)}remove(){r.meshes=r.meshes.filter(o=>o!==this)}}},Attribute:{enumerable:!1,value:class{constructor(o){this.type=s.FLOAT,this.normalized=!1,this.buffer=s.createBuffer(),Object.assign(this,o),this.update()}update(){this.values!==void 0&&(s.bindBuffer(this.target,this.buffer),s.bufferData(this.target,this.values,s.STATIC_DRAW))}attach(o,a){const e=s.getAttribLocation(a,o);return this.target===s.ARRAY_BUFFER&&(s.enableVertexAttribArray(e),s.vertexAttribPointer(e,this.size,this.type,this.normalized,0,0)),e}use(o){s.bindBuffer(this.target,this.buffer),this.target===s.ARRAY_BUFFER&&(s.enableVertexAttribArray(o),s.vertexAttribPointer(o,this.size,this.type,this.normalized,0,0))}}}});const p=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];r.commonUniforms={projectionMatrix:new r.Uniform({type:"mat4",value:p}),modelViewMatrix:new r.Uniform({type:"mat4",value:p}),resolution:new r.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new r.Uniform({type:"float",value:1})}}setSize(n=640,l=480){this.width=n,this.height=l,this.canvas.width=n,this.canvas.height=l,this.gl.viewport(0,0,n,l),this.commonUniforms.resolution.value=[n,l],this.commonUniforms.aspectRatio.value=n/l,this.debug("MiniGL.setSize",{width:n,height:l})}setOrthographicCamera(n=0,l=0,v=0,m=-2e3,r=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(m-r),0,n,l,v,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(n=>n.draw())}}function q(d){return[(d>>16&255)/255,(d>>8&255)/255,(255&d)/255]}["SCREEN","LINEAR_LIGHT"].reduce((d,n,l)=>Object.assign(d,{[n]:l}),{});function i(d,n,l){const v=Object.defineProperty(d,n,{value:l,enumerable:!0,configurable:!0,writable:!0});return n in d||(d[n]=l),d}class G{constructor(...n){i(this,"el",void 0),i(this,"cssVarRetries",0),i(this,"maxCssVarRetries",200),i(this,"angle",0),i(this,"isLoadedClass",!1),i(this,"isScrolling",!1),i(this,"scrollingTimeout",void 0),i(this,"scrollingRefreshDelay",200),i(this,"isIntersecting",!1),i(this,"shaderFiles",void 0),i(this,"vertexShader",void 0),i(this,"sectionColors",void 0),i(this,"computedCanvasStyle",void 0),i(this,"conf",void 0),i(this,"uniforms",void 0),i(this,"t",1253106),i(this,"last",0),i(this,"width",void 0),i(this,"minWidth",1111),i(this,"height",600),i(this,"xSegCount",void 0),i(this,"ySegCount",void 0),i(this,"mesh",void 0),i(this,"material",void 0),i(this,"geometry",void 0),i(this,"minigl",void 0),i(this,"scrollObserver",void 0),i(this,"amp",320),i(this,"seed",5),i(this,"freqX",14e-5),i(this,"freqY",29e-5),i(this,"freqDelta",1e-5),i(this,"activeColors",[1,1,1,1]),i(this,"isMetaKey",!1),i(this,"isGradientLegendVisible",!1),i(this,"isMouseDown",!1),i(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),i(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),i(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),i(this,"handleMouseDown",l=>{this.isGradientLegendVisible&&(this.isMetaKey=l.metaKey,this.isMouseDown=!0,this.conf.playing===!1&&requestAnimationFrame(this.animate))}),i(this,"handleMouseUp",()=>{this.isMouseDown=!1}),i(this,"animate",l=>{if(!this.shouldSkipFrame(l)||this.isMouseDown){if(this.t+=Math.min(l-this.last,1e3/15),this.last=l,this.isMouseDown){let v=160;this.isMetaKey&&(v=-160),this.t+=v}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(this.last!==0&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),i(this,"addIsLoadedClass",()=>{!this.isLoadedClass&&(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{this.el.parentElement.classList.add("isLoaded")},3e3))}),i(this,"pause",()=>{this.conf.playing=!1}),i(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),i(this,"initGradient",l=>(this.el=document.querySelector(l),this.connect(),this))}async connect(){this.shaderFiles={vertex:`varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;

  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;

  vec2 st = 1. - uvNorm.xy;

  //
  // Tilting the plane
  //

  // Front-to-back tilt
  float tilt = resolution.y / 2.0 * uvNorm.y;

  // Left-to-right angle
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;

  // Up-down shift to offset incline
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

  //
  // Vertex noise
  //

  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;

  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);

  // Clamp to 0
  noise = max(0.0, noise);

  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  //
  // Vertex color, to be passed to fragment shader
  //

  if (u_active_colors[0] == 1.) {
    v_color = u_baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.) {
      WaveLayers layer = u_waveLayers[i];

      float noise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );

      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));
    }
  }

  //
  // Finish
  //

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,noise:`//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}`,blend:`//
// https://github.com/jamieowen/glsl-blend
//

// Normal

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

// Screen

float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

// Multiply

vec3 blendMultiply(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

// Overlay

float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

// Hard light

vec3 blendHardLight(vec3 base, vec3 blend) {
	return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
	return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Soft light

float blendSoftLight(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Color dodge

float blendColorDodge(float base, float blend) {
	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Color burn

float blendColorBurn(float base, float blend) {
	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
	return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Vivid Light

float blendVividLight(float base, float blend) {
	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight(vec3 base, vec3 blend) {
	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
	return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Lighten

float blendLighten(float base, float blend) {
	return max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear burn

float blendLinearBurn(float base, float blend) {
	// Note : Same implementation as BlendSubtractf
	return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendSubtract
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear dodge

float blendLinearDodge(float base, float blend) {
	// Note : Same implementation as BlendAddf
	return min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendAdd
	return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear light

float blendLinearLight(float base, float blend) {
	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}`,fragment:`varying vec3 v_color;

void main() {
  vec3 color = v_color;
  if (u_darken_top == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
  }
  gl_FragColor = vec4(color, 1.0);
}`},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new B(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:10}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let n=1;n<this.sectionColors.length;n+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[n],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+n/this.sectionColors.length,3+n/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*n}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*n}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*n}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*n})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(n){return!!window.document.hidden||!this.conf.playing||parseInt(n,10)%2==0||void 0}updateFrequency(n){this.freqX+=n,this.freqY+=n}toggleColor(n){this.activeColors[n]=this.activeColors[n]===0?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")!==-1)this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(n=>{let l=this.computedCanvasStyle.getPropertyValue(n).trim();return l.length===4&&(l=`#${l.substr(1).split("").map(m=>m+m).join("")}`),l&&`0x${l.substr(1)}`}).filter(Boolean).map(q)}}const j={components:{FileInput:z},data(){return{curriculum:null,name:null,formUrl:this.$config.CAREER_FORM_URL}},computed:{filename(){var d;return(d=this.curriculum)==null?void 0:d.name},notLoaded(){return!this.curriculum},placeholder(){return this.notLoaded?"Send us your cv":"Tell us your name"},sendDisabled(){return!this.curriculum||!this.name}},methods:{clearFile(){this.curriculum=null,this.name=null},selected(d,...[,n]){n.includes("pdf")&&(this.curriculum=d)}}},$={class:"mb-4 px-8 pb-8 pt-6"},P=["action"],k={class:"flex flex-col flex-wrap items-start"},H=["readonly","placeholder","value"],Y=["disabled"],W={key:0,class:"mt-2 text-gray-900 dark:text-gray-200 transition-opacity"};function K(d,n,l,v,m,r){const _=D("FileInput"),s=D("fa-icon");return w(),S("div",$,[h("form",{action:m.formUrl,method:"POST",enctype:"multipart/form-data",class:"flex flex-row justify-center"},[C(_,{name:"curriculum",accept:".pdf",value:m.curriculum,"can-load":r.notLoaded,onSelected:r.selected},{default:M(()=>[h("div",k,[h("input",{name:"name",type:"text",maxlength:"20",readonly:r.notLoaded,placeholder:r.placeholder,value:m.name,onInput:n[0]||(n[0]=p=>m.name=p.target.value)},null,40,H)])]),_:1},8,["value","can-load","onSelected"]),h("button",{class:"button button-secondary dark:button-secondary-dark",disabled:r.sendDisabled}," Send ",8,Y)],8,P),m.curriculum?(w(),S("div",W,[h("span",{class:"cursor-pointer hover:text-white",onClick:n[1]||(n[1]=(...p)=>r.clearFile&&r.clearFile(...p))},[C(s,{icon:"xmark"})]),h("span",null,E(r.filename),1)])):O("",!0)])}const X=U(j,[["render",K],["__scopeId","data-v-aefad07b"]]);const L=d=>(I("data-v-6099238f"),d=d(),T(),d),J={class:"w-full"},Q={class:"container mx-auto flex flex-wrap items-center pb-24"},Z={class:"py-8 font-stylish lg:py-12 xl:py-16"},ee={class:"container mx-auto px-32 text-center"},te=L(()=>h("h2",{class:"title"}," Career / Get On Board ",-1)),ne=L(()=>h("h4",{class:"subtitle"},[V(" We have a passion for the digital world, enthusiasm for technology, and a really great team. We are Pollux. "),h("span",{class:"font-bold"},"Nice to meet you!")],-1)),ie=L(()=>h("section",{class:"overflow-hidden max-h-[20vh] w-full"},[h("canvas",{id:"gradient-canvas",width:1920*4,height:1080})],-1)),se={__name:"career",setup(d){return R(()=>{new G().initGradient("#gradient-canvas")}),(n,l)=>(w(),S("div",J,[h("div",Q,[h("section",Z,[h("div",ee,[te,ne,C(N(X))])])]),ie]))}},ae=U(se,[["__scopeId","data-v-6099238f"]]);export{ae as default};
