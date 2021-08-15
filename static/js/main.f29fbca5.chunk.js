(this["webpackJsonpreact-tailwind-ghpages-template"]=this["webpackJsonpreact-tailwind-ghpages-template"]||[]).push([[0],{20:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(14),a=c.n(s),i=(c(20),c(4)),r=c(15),o=c.n(r),l=c(0);var d=function(e){var t,c=e.countyData;return Object(l.jsx)("div",{className:"p-5",children:Object(l.jsxs)("div",{className:"justify-center w-auto bg-white rounded-lg p-5 shadow-xl",children:[Object(l.jsx)("h1",{className:["text-green-600","text-blue-700","text-yellow-500","text-red-500"][c.cdcTransmissionLevel]+" font-bold text-4xl text-center",children:["Low","Moderate","Substantial","High","Unknown"][c.cdcTransmissionLevel]+" Transmission"}),Object(l.jsx)("h2",{className:"text-center font-bold pt-2",children:(t=c.cdcTransmissionLevel,t>1?"You should wear a mask indoors.":"")})]})})};var u=function(e){var t=e.stateList,c=e.countyList,s=e.updateAreaCallback,a=Object(n.useState)(null),r=Object(i.a)(a,2),o=r[0],d=r[1],u=Object(n.useState)([]),j=Object(i.a)(u,2),h=j[0],b=j[1];function x(e){d(e);var t=[];c.forEach((function(c){c.includes(e)&&t.push(c.slice(0,-5))})),b(t)}return console.log(t),Object(n.useEffect)((function(){x(t[0]),s(h[0],t[0])}),[]),Object(n.useEffect)((function(){s(h[0],o)}),[o]),Object(l.jsxs)("div",{className:"h-10 justify-center flex",children:[Object(l.jsx)("select",{name:"states",onChange:function(e){return x(e.target.value)},children:t.map((function(e){return Object(l.jsx)("option",{value:e,children:e})}))}),Object(l.jsx)("select",{name:"counties",onChange:function(e){return s(e.target.value,o)},children:h.map((function(e){return Object(l.jsx)("option",{value:e,children:e})}))})]})},j=c(3),h=c.n(j);var b=function(e){var t=e.countyData;return console.log(t),Object(l.jsx)("div",{className:"p-5",children:Object(l.jsxs)("div",{className:"bg-white rounded-lg p-5 shadow-xl",children:[Object(l.jsx)("h1",{className:"text-2xl font-bold text-center",children:"Vaccine Information"}),Object(l.jsxs)("div",{className:"flex justify-around",children:[Object(l.jsx)("h1",{className:"text-center pt-2",children:"1+ Dose: "+h()(t.metrics.vaccinationsInitiatedRatio).format("0.0%")}),Object(l.jsx)("h1",{className:"text-center pt-2",children:"Fully: "+h()(t.metrics.vaccinationsCompletedRatio).format("0.0%")})]})]})})};var x=function(e){var t=e.countyData;return Object(l.jsx)("div",{className:"p-5",children:Object(l.jsxs)("div",{className:"bg-white rounded-lg p-5 shadow-xl",children:[Object(l.jsx)("h1",{className:"text-center font-bold text-2xl",children:"Local Case Metrics"}),Object(l.jsxs)("div",{className:"grid grid-cols-2",children:[Object(l.jsx)("h1",{className:"text-center",children:"Case Density: "+h()(t.metrics.caseDensity).format("0,0")+" per 100k population"}),Object(l.jsx)("h1",{className:"text-center",children:"Estimated Infection Rate: "+t.metrics.infectionRate}),Object(l.jsx)("h1",{className:"text-center",children:"Test Positivity Ratio: "+h()(t.metrics.testPositivityRatio).format("0.0%")}),Object(l.jsx)("h1",{className:"text-center",children:"ICU Capacity Used: "+h()(t.metrics.icuCapacityRatio).format("0.0%")})]})]})})};var f=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),r=Object(i.a)(a,2),j=r[0],h=r[1];function f(e,t){h(c.find((function(c){return c.county===e&&c.state===t})))}return Object(n.useEffect)((function(){console.log("Effect"),o.a.get("https://api.covidactnow.org/v2/counties.json?apiKey=c76bf315c59f4583be354544cba8c6a6").then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}),[]),null==c?Object(l.jsx)("div",{children:"Loading..."}):Object(l.jsxs)("div",{className:"bg-gray-100 h-screen",children:[function(){var e=c.map((function(e){return e.county+" ("+e.state+")"})),t=[];return c.forEach((function(e){t.includes(e.state)||(console.log("PUSHING"),t.push(e.state))})),console.log(t),Object(l.jsx)(u,{stateList:t,countyList:e,updateAreaCallback:f})}(),j?Object(l.jsx)("div",{className:"flex justify-center",children:Object(l.jsxs)("div",{className:"lg:w-1/3 w-full",children:[Object(l.jsx)(d,{countyData:j}),Object(l.jsx)(b,{countyData:j}),Object(l.jsx)(x,{countyData:j})]})}):Object(l.jsx)("div",{}),Object(l.jsxs)("div",{className:"absolute bottom-0 w-screen pb-5",children:[Object(l.jsxs)("h1",{className:"text-center",children:["This data is provided from the"," ",Object(l.jsx)("a",{className:"underline",href:"https://covidactnow.org/",children:"COVID Act Now API"}),"."]}),Object(l.jsx)("h1",{className:"text-center",children:"This page was developed by Jonathan Daniel as the final project of Trace Camp Summer 2021!"})]})]})};a.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f29fbca5.chunk.js.map