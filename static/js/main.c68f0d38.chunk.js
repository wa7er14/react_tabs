(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),o=n(4),i=n(5),s=n(7),u=n(6),b=n(1),m=n.n(b),f=m.a.string,p=m.a.string;m.a.arrayOf(m.a.shape({title:f.isRequired,content:p.isRequired})),m.a.func,n(15);function E(t){var e=t.name,n=t.callback;return c.a.createElement("button",{type:"button",className:"tab",onClick:n},e)}n(16);function h(t){var e=t.tabs,n=t.callback;return c.a.createElement("ul",{className:"tabs"},e.map((function(t){return c.a.createElement("li",{className:"tabs__item",key:t.title},c.a.createElement(E,{name:t.title,callback:function(){return n(t.content)}}))})))}function k(t){var e=t.content;return c.a.createElement("p",null,e)}var v=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).onTabSwitch=function(t){a.setState({content:t})},a.state={content:t.tabs[0].content},a}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{tabs:this.props.tabs,callback:this.onTabSwitch}),c.a.createElement(k,{content:this.state.content}))}}]),n}(c.a.Component),d=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],S=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React tabs"),c.a.createElement(v,{tabs:d}))};l.a.render(c.a.createElement(S,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.c68f0d38.chunk.js.map