(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),i=c(7),s=c.n(i),o=(c(15),c(9)),l=c(6),j=c.n(l),u=c(8),d=c(4),m=(c(17),c(18),function(e){var t=e.favoriteComp;return Object(n.jsx)(n.Fragment,{children:e.movies.map((function(c,a){return Object(n.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(n.jsx)("img",{src:c.Poster,alt:"Movie"}),Object(n.jsx)("div",{onClick:function(){return e.handleFavOnClickFromApp(c)},className:"overlay d-flex align-items-center justify-content",children:Object(n.jsx)(t,{})})]})}))})}),v=function(e){return Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("h1",{children:e.heading})})},h=function(e){return Object(n.jsx)("div",{className:"col col-sm-4",children:Object(n.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setSearchMovie(t.target.value)},placeholder:"Search"})})},b=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"mr-2",children:"Add to Fav!"}),Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle-fill",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})})]})},f=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"mr-2",children:"Remove from Fav!"}),Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})})]})};var O=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)([]),s=Object(d.a)(i,2),l=s[0],O=s[1],x=Object(a.useState)(""),p=Object(d.a)(x,2),g=p[0],w=p[1],F=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://www.omdbapi.com/?s=".concat(t,"&apikey=").concat("b4f88209"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).Search&&r(a.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){F(g)}),[g]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("movie-data"));O(e)}),[]);var N=function(e){localStorage.setItem("movie-data",JSON.stringify(e))};return Object(n.jsxs)("div",{className:"container-fluid movie-app",children:[Object(n.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(n.jsx)(v,{heading:"Movies"}),Object(n.jsx)(h,{searchMovie:g,setSearchMovie:w})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(m,{movies:c,handleFavOnClickFromApp:function(e){var t=[].concat(Object(o.a)(l),[e]);O(t),N(t)},favoriteComp:b})}),Object(n.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(n.jsx)(v,{heading:"Favorites"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(m,{movies:l,handleFavOnClickFromApp:function(e){var t=l.filter((function(t){return t.imdbID!==e.imdbID}));O(t),N(t)},favoriteComp:f})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.e4eaad47.chunk.js.map