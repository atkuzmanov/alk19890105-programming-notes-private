(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,n){e.exports=n(316)},156:function(e,t,n){},157:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(9),o=n.n(s),c=(n(156),n(157),n(65)),i=n(66),u=n(73),l=n(67),d=n(74),m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={hasError:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",{className:"p-2 text-center"},"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.a.Component),p=n(134),h=n(100),w=n(75),y=n(319),E=n(140),f=n(320),b=n(318),g="https://k7jbfgxqih.execute-api.us-west-2.amazonaws.com/v1",S=h.a.TabPane,v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onRunQuery=function(){n.setState({isError:!1,outputMessage:"",isQueryRunning:!0}),fetch("".concat(g,"/sp"),{method:"POST",headers:{"Content-Type":"application/json","x-api-key":"G5CsHCeKU34xfSuqtM5Qn2DrohvemlLN2G3KKSZI"},body:JSON.stringify({stmt:n.state.codeQuestion,db:n.state.codeDatabase,maxRows:n.state.maxRows||50})}).then(function(e){return e.json()}).then(function(e){var t=e||{},r=t.recordsets,a=(t.recordset,t.output),s=t.error,o=t.name,c=(a||{}).message,i=c&&c.includes("Error");s||i||o?n.setState({isError:!0,outputMessage:c||o,isQueryRunning:!1}):n.setState({isError:!1,results:r||[[]],outputMessage:c||"No output",isQueryRunning:!1})}).catch(function(e){n.setState({isError:!0,outputMessage:e&&e.message||"Unknown error occured",isQueryRunning:!1})})},n.onShowAnswer=function(){n.setState(function(e){return{isAnswerOpen:!e.isAnswerOpen}})},n.state={codeQuestion:"-- Sample query",results:[],outputMessage:"",columns:[],rows:[],isQueryRunning:!1,isAnswerOpen:!1,codeAnswer:"",codeDatabase:"",maxRows:50},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.pid,t=document.querySelector("#esql-re-wrap-".concat(e)),n=t&&t.parentNode&&t.parentNode.parentNode,r=n.querySelector(".esql-answer"),a=n.querySelector(".esql-question"),s="",o="",c=null,i=50;r&&(s=(s=r.innerText)&&s.trim()||""),a&&(o=(o=a.innerText)&&o.trim()||""),n&&(c=(c=n.getAttribute("data-database"))&&c.trim()||null),n&&(i=(i=n.getAttribute("data-maxRows"))||50),this.setState({codeAnswer:s,codeQuestion:o,codeDatabase:c,maxRows:i})}},{key:"render",value:function(){var e=this,t={mode:"sql",theme:"default",viewportMargin:1/0},n=this.state,r=n.results,s=n.outputMessage,o=n.isError,c=n.isQueryRunning,i=n.isAnswerOpen,u=n.codeAnswer,l=n.codeQuestion,d=this.props.pid;return a.a.createElement("div",{id:"esql-re-wrap-".concat(d),className:"esql-re-wrap antd-ns"},a.a.createElement("div",{className:"esql-query-block"},a.a.createElement("div",{className:"esql-codemirror-wrap"},a.a.createElement(p.Controlled,{value:l,options:t,onBeforeChange:function(t,n,r){e.setState({codeQuestion:r})},cursor:{line:5,ch:10},onChange:function(e,t,n){}})),a.a.createElement("div",{className:"d-flex justify-content-space-between mt-2 mb-2"},a.a.createElement(w.a,{type:"primary",onClick:this.onRunQuery},"Run Query"),a.a.createElement(w.a,{type:"primary",onClick:this.onShowAnswer},i?"Hide Answer":"Show Answer"))),a.a.createElement("div",{className:"esql-answer-block mt-2 mb-2"},i&&a.a.createElement(y.a,null,a.a.createElement("pre",null,u))),c&&a.a.createElement(E.a,{size:"large"}),s&&o&&a.a.createElement(f.a,{description:s,message:"Error occured",type:"error",showIcon:!0}),s&&!o&&a.a.createElement(f.a,{message:s,type:"success",description:"This is the number of records returned for the last sql statement.",showIcon:!0}),a.a.createElement(h.a,{defaultActiveKey:"0"},r&&Array.isArray(r)&&r.length>0&&r.map(function(e,t){var n=e&&Array.isArray(e)&&e[0]&&Object.keys(e[0]).map(function(e){return{title:e,dataIndex:e,key:e}});return a.a.createElement(S,{tab:"Results ".concat(t+1),key:t},a.a.createElement(b.a,{size:"small",scroll:{x:2},key:t,dataSource:e,columns:n}))})))}}]),t}(r.Component);n(314),n(315),window.ESQLEditor=function(e,t){e?o.a.render(a.a.createElement(m,null,a.a.createElement(v,{pid:t})),e):console.info("No Element DOM target to attach ESQL Code editor app.")};var q=document.querySelectorAll(".esql-re-app");q&&q.forEach(function(e,t){window.ESQLEditor&&window.ESQLEditor(e,t)})}},[[151,1,2]]])