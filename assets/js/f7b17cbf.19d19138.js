"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[5740],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},271:function(e,t,n){n.d(t,{i:function(){return p},Z:function(){return m}});var a=n(7294),r="container_dT7A",o="divider_sodf",i="roundedStep_F2Iv",s="description_KDUo",l="stepTitle_L1ZL",u="code_Ggy9",c=n(6010);const p=()=>a.createElement("div",{className:(0,c.Z)(o)});var m=e=>{let{children:t,title:n}=e;return a.createElement("div",{className:(0,c.Z)(r)},a.createElement("div",{className:(0,c.Z)(s)},a.createElement("div",{className:(0,c.Z)(i)},a.createElement("div",{className:(0,c.Z)(l)},n),t[0])),a.createElement("div",{className:(0,c.Z)(u)},t[1]))}},6461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return T},contentTitle:function(){return b},default:function(){return D},frontMatter:function(){return k},metadata:function(){return x},toc:function(){return S}});var a=n(3117),r=(n(7294),n(3905)),o=n(271);const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"interface Pointer {\n  visible: boolean;\n  x: number;\n  y: number;\n}\n")))}s.isMDXComponent=!0;const l={toc:[]};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useSharedValue,\n} from 'react-native-reanimated';\n\nfunction PointerElement(props: {\n  pointer: Animated.SharedValue<Pointer>,\n  active: Animated.SharedValue<boolean>,\n}) {\n  const animatedStyle = useAnimatedStyle(() => ({\n    transform: [\n      { translateX: props.pointer.value.x },\n      { translateY: props.pointer.value.y },\n      {\n        scale:\n          (props.pointer.value.visible ? 1 : 0) *\n          (props.active.value ? 1.3 : 1),\n      },\n    ],\n    backgroundColor: props.active.value ? 'red' : 'blue',\n  }));\n\n  return <Animated.View style={[styles.pointer, animatedStyle]} />;\n}\n\n// ...\n\nconst styles = StyleSheet.create({\n  pointer: {\n    width: 60,\n    height: 60,\n    borderRadius: 30,\n    backgroundColor: 'red',\n    position: 'absolute',\n    marginStart: -30,\n    marginTop: -30,\n  },\n});\n")))}u.isMDXComponent=!0;const c={toc:[]};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Gesture, GestureDetector } from 'react-native-gesture-handler';\n\nexport default function Example() {\n  const trackedPointers: Animated.SharedValue<Pointer>[] = [];\n  const active = useSharedValue(false);\n\n  for (let i = 0; i < 12; i++) {\n    trackedPointers[i] =\n      useSharedValue <\n      Pointer >\n      {\n        visible: false,\n        x: 0,\n        y: 0,\n      };\n  }\n\n  const gesture = Gesture.Manual();\n\n  return (\n    <GestureDetector gesture={gesture}>\n      <Animated.View style={{ flex: 1 }}>\n        {trackedPointers.map((pointer, index) => (\n          <PointerElement pointer={pointer} active={active} key={index} />\n        ))}\n      </Animated.View>\n    </GestureDetector>\n  );\n}\n")))}p.isMDXComponent=!0;const m={toc:[]};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2-15}","{2-15}":!0},"const gesture = Gesture.Manual().onTouchesDown((e, manager) => {\n  for (const touch of e.changedTouches) {\n    trackedPointers[touch.id].value = {\n      visible: true,\n      x: touch.x,\n      y: touch.y,\n    };\n  }\n\n  if (e.numberOfTouches >= 2) {\n    manager.activate();\n  }\n});\n")))}d.isMDXComponent=!0;const h={toc:[]};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3-12}","{3-12}":!0},"const gesture = Gesture.Manual()\n    ...\n    .onTouchesMove((e, _manager) => {\n      for (const touch of e.changedTouches) {\n        trackedPointers[touch.id].value = {\n          visible: true,\n          x: touch.x,\n          y: touch.y,\n        };\n      }\n    })\n")))}f.isMDXComponent=!0;const g={toc:[]};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3-16}","{3-16}":!0},"const gesture = Gesture.Manual()\n    ...\n    .onTouchesUp((e, manager) => {\n      for (const touch of e.changedTouches) {\n        trackedPointers[touch.id].value = {\n          visible: false,\n          x: touch.x,\n          y: touch.y,\n        };\n      }\n\n      if (e.numberOfTouches === 0) {\n        manager.end();\n      }\n    })\n")))}y.isMDXComponent=!0;const v={toc:[]};function w(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3-10}","{3-10}":!0},"const gesture = Gesture.Manual()\n  ...\n  .onStart(() => {\n    active.value = true;\n  })\n  .onEnd(() => {\n    active.value = false;\n  });\n")))}w.isMDXComponent=!0;const k={id:"manual-gestures",title:"Manual gestures",sidebar_label:"Manual gestures",sidebar_position:5},b=void 0,x={unversionedId:"fundamentals/manual-gestures/manual-gestures",id:"fundamentals/manual-gestures/manual-gestures",title:"Manual gestures",description:"RNGH2 finally brings one of the most requested features: manual gestures and touch events. To demonstrate how to make a manual gesture we will make a simple one that tracks all pointers on the screen.",source:"@site/docs/fundamentals/manual-gestures/index.md",sourceDirName:"fundamentals/manual-gestures",slug:"/fundamentals/manual-gestures/",permalink:"/react-native-gesture-handler/docs/fundamentals/manual-gestures/",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/fundamentals/manual-gestures/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"manual-gestures",title:"Manual gestures",sidebar_label:"Manual gestures",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Gesture composition & interactions",permalink:"/react-native-gesture-handler/docs/fundamentals/gesture-composition"},next:{title:"Gesture states & events",permalink:"/react-native-gesture-handler/docs/fundamentals/states-events"}},T={},S=[{value:"Modifying existing gestures",id:"modifying-existing-gestures",level:2}],N={toc:S};function D(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"RNGH2 finally brings one of the most requested features: manual gestures and touch events. To demonstrate how to make a manual gesture we will make a simple one that tracks all pointers on the screen."),(0,r.kt)(o.i,{mdxType:"Divider"}),(0,r.kt)(o.Z,{title:"Step 1",mdxType:"Step"},"First, we need a way to store information about the pointer: whether it should be visible and its position.",(0,r.kt)(s,{mdxType:"Step1"})),(0,r.kt)(o.i,{mdxType:"Divider"}),(0,r.kt)(o.Z,{title:"Step 2",mdxType:"Step"},"We also need a component to mark where a pointer is. In order to accomplish that we will make a component that accepts two shared values: one holding information about the pointer using the interface we just created, the other holding a bool indicating whether the gesture has activated. In this example when the gesture is not active, the ball representing it will be blue and when it is active the ball will be red and slightly bigger.",(0,r.kt)(u,{mdxType:"Step2"})),(0,r.kt)(o.i,{mdxType:"Divider"}),(0,r.kt)(o.Z,{title:"Step 3",mdxType:"Step"},"Now we have to make a component that will handle the gesture and draw all the pointer indicators. We will store data about pointers in an array of size 12 as that is the maximum number of touches that RNGH will track, and render them inside an Animated.View.",(0,r.kt)(p,{mdxType:"Step3"})),(0,r.kt)(o.i,{mdxType:"Divider"}),(0,r.kt)(o.Z,{title:"Step 4",mdxType:"Step"},"We have our components set up and we can finally get to making the gesture! We will start with onTouchesDown where we need to set position of the pointers and make them visible. We can get this information from the touches property of the event. In this case we will also check how many pointers are on the screen and activate the gesture if there are at least two.",(0,r.kt)(d,{mdxType:"Step4"})),(0,r.kt)(o.i,{mdxType:"Divider"}),(0,r.kt)(o.Z,{title:"Step 5",mdxType:"Step"},"Next, we will handle pointer movement. In onTouchesMove we will simply update the position of moved pointers.",(0,r.kt)(f,{mdxType:"Step5"})),(0,r.kt)(o.i,{mdxType:"Divider"}),(0,r.kt)(o.Z,{title:"Step 6",mdxType:"Step"},"We also need to handle lifting fingers from the screen, which corresponds to onTouchesUp. Here we will just hide the pointers that were lifted and end the gesture if there are no more pointers on the screen. Note that we are not handling onTouchesCancelled as in this very basic case we don't expect it to happen, however you should clear data about cancelled pointers (most of the time all active ones) when it is called.",(0,r.kt)(y,{mdxType:"Step6"})),(0,r.kt)(o.i,{mdxType:"Divider"}),(0,r.kt)(o.Z,{title:"Step 7",mdxType:"Step"},"Now that our pointers are being tracked correctly and we have the state management, we can handle activation and ending of the gesture. In our case, we will simply set the active shared value either to true or false.",(0,r.kt)(w,{mdxType:"Step7"})),(0,r.kt)(o.i,{mdxType:"Divider"}),(0,r.kt)("p",null,"And that's all! As you can see using manual gestures is really easy but as you can imagine, manual gestures are a powerful tool that makes it possible to accomplish things that were previously impossible with RNGH."),(0,r.kt)("h2",{id:"modifying-existing-gestures"},"Modifying existing gestures"),(0,r.kt)("p",null,"While manual gestures open great possibilities we are aware that reimplementing pinch or rotation from scratch just because you need to activate in specific circumstances or require position of the fingers, would be a waste of time as those gestures are already there. Because of that you can use touch events with every gesture so that you can extract more informations about gesture than is sent to you in events. We also added a ",(0,r.kt)("inlineCode",{parentName:"p"},"manualActivation")," modifier on all continous gestures, which prevents the gesture it is applied to from activating by itself thus giving you full control of its behavior."),(0,r.kt)("p",null,"This functionality makes another highly requested feature possible: drag after long press. Simply set ",(0,r.kt)("inlineCode",{parentName:"p"},"manualActivation")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," on a ",(0,r.kt)("inlineCode",{parentName:"p"},"PanGesture")," and use ",(0,r.kt)("inlineCode",{parentName:"p"},"StateManager")," to fail the gesture if the user attempts to drag the component sooner than the duration of the long press."))}D.isMDXComponent=!0}}]);