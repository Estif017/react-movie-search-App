(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=(a(11),a(12),a(1)),s=a.n(o),i=a(5),u=a(2),m=function(e){return r.a.createElement("form",{onSubmit:e.getMovies},r.a.createElement("input",{type:"text",value:e.query,onChange:e.setQuery,placeholder:"serch for movies"}),r.a.createElement("button",null,"Search"))},p=function(e){var t=e.movie;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),r.a.createElement("div",{className:"card--content"},r.a.createElement("h3",{className:"card--title"},t.title),r.a.createElement("p",null,r.a.createElement("small",null,"RELEASE DATE: ",t.release_date)),r.a.createElement("p",null,r.a.createElement("small",null,"RATING: ",t.vote_average)),r.a.createElement("p",{className:"card--desc"},t.overview)))},v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(u.a)(l,2),v=o[0],d=o[1],h=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,"f5a8c8a9d2252183d14255ac6a0493be",n="https://api.themoviedb.org/3/search/movie?api_key=".concat("f5a8c8a9d2252183d14255ac6a0493be","&language=en-US&query=").concat(a,"&page=1&include_adult=false"),e.next=6,fetch(n);case 6:return r=e.sent,e.next=9,r.json();case 9:c=e.sent,d(c.results),console.log(v),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(m,{getMovies:h,query:a,setQuery:function(e){return c(e.target.value)}}),r.a.createElement("div",{className:"card-list"},v.filter((function(e){return e.poster_path})).map((function(e){return r.a.createElement(p,{movie:e,key:e.id})}))))};var d=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"React Movie Search"),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.38a15f12.chunk.js.map