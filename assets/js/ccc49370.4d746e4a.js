(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{82:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(88),m=t(90),c=t(84);var s=function(e){var a=e.nextItem,t=e.prevItem;return l.a.createElement("nav",{"aria-label":"Blog post page navigation",className:"my-5"},l.a.createElement("ul",{className:"pagination justify-content-between"},l.a.createElement("li",{className:"pagination__item"},t&&l.a.createElement(c.a,{className:"page-link",to:t.permalink},"\xab ",t.title)),l.a.createElement("li",{className:"pagination__item"},a&&l.a.createElement(c.a,{className:"page-link",to:a.permalink},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.frontMatter,r=a.metadata,c=r.title,i=r.description,o=r.nextItem,u=r.prevItem;return l.a.createElement(n.a,{title:c,description:i},l.a.createElement("div",{className:"container-fluid my-5"},l.a.createElement("div",{className:"row row-cols-1 row-cols-sm-1"},l.a.createElement("div",{key:r.permalink,className:"col col-xl-4 offset-xl-4 col-xs-6 mb-5"},l.a.createElement(m.a,{frontMatter:t,metadata:r,isBlogPostPage:!0},l.a.createElement(a,null)),(o||u)&&l.a.createElement(s,{nextItem:o,prevItem:u})))))}},90:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(83),m=t(91),c=t(84),s=["January","February","March","April","May","June","July","August","September","October","November","December"],i=function(e){return Math.ceil(e)};a.a=function(e){var a=e.children,t=e.frontMatter,r=e.metadata,o=e.truncated,u=e.isBlogPostPage,d=void 0!==u&&u,E=r.date,p=r.readingTime,g=r.tags,v=r.permalink,h=r.editUrl,N=t.author,f=t.title,b=t.author_url||t.authorURL,w=t.author_image_url||t.authorImageURL,y=E.substring(0,10).split("-"),x=y[0],k=s[parseInt(y[1],10)-1],I=parseInt(y[2],10);return l.a.createElement("article",{className:"card shadow"},l.a.createElement("div",{className:"row no-gutters rows-col-2 m-3"},l.a.createElement("div",{className:"col-xs mr-3"},w&&l.a.createElement("img",{style:{width:"50px"},src:w,alt:N})),l.a.createElement("div",{className:"col"},N&&l.a.createElement("h5",null,l.a.createElement("a",{href:b,rel:N},N)),l.a.createElement("time",{className:"card-subtitle mb-md-4 font-weight-light",dateTime:E},k," ",I,", ",x," ",d&&p&&l.a.createElement(l.a.Fragment,null," \xb7 ",i(p)," min read"))),l.a.createElement("div",{className:"col text-right"},d&&h&&l.a.createElement("span",null,l.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",{className:"card-title text-primary mr-2"},f),l.a.createElement("section",null,l.a.createElement(n.a,{components:m.a},a))),l.a.createElement("footer",{className:"row no-gutters m-3 justify-content-between"},l.a.createElement("div",{className:"col col-xs"},g.length>0&&l.a.createElement(l.a.Fragment,null,g.map((function(e){var a=e.label,t=e.permalink;return l.a.createElement(c.a,{key:t,className:"m-1",to:t},l.a.createElement("span",{className:"badge badge-primary"},a))})))),l.a.createElement("div",{className:"col align-self-center text-right"},!d&&p&&l.a.createElement("small",{className:o?"mr-2":""},i(p)," min read"),o&&l.a.createElement(c.a,{to:v,"aria-label":"Read more about "+f},l.a.createElement("span",{className:"stretched-link"},"Read more")))))}}}]);