"use strict";(self.webpackChunkeva_website=self.webpackChunkeva_website||[]).push([[643],{9162:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(2155);var s=a(851),n=a(3947),r=a(1798),i=a(7614),l=a(1602),o=a(3198),c=a(5170),d=a(2931),m=a(8729),g=a(2458),u=a(5723);function h(e){const t=(0,g.kJ)(e);return(0,u.jsx)(m.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.A)(),{blogDescription:s,blogTitle:i,permalink:l}=t,o="/"===l?a:i;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.be,{title:o,description:s}),(0,u.jsx)(c.A,{tag:"blog_posts_list"})]})}function p(e){const{metadata:t,items:a,sidebar:s}=e;return(0,u.jsxs)(l.A,{sidebar:s,children:[(0,u.jsx)(d.A,{items:a}),(0,u.jsx)(o.A,{metadata:t})]})}function j(e){return(0,u.jsxs)(r.e3,{className:(0,s.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,u.jsx)(x,{...e}),(0,u.jsx)(h,{...e}),(0,u.jsx)(p,{...e})]})}},3198:(e,t,a)=>{a.d(t,{A:()=>i});a(2155);var s=a(6210),n=a(6043),r=a(5723);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.A,{permalink:a,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(n.A,{permalink:i,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8928:(e,t,a)=>{a.d(t,{A:()=>_});a(2155);var s=a(851),n=a(2458),r=a(5723);function i(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var l=a(147);const o={title:"title_CTaa"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,n.e7)(),{permalink:c,title:d}=a,m=i?"h1":"h2";return(0,r.jsx)(m,{className:(0,s.A)(o.title,t),children:i?d:(0,r.jsx)(l.A,{to:c,children:d})})}var d=a(6210),m=a(5912),g=a(9135);const u={container:"container_gkYT"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function p(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.e7)(),{date:i,readingTime:l}=a,o=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(u.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(h,{readingTime:l})]})]});var c}var A=a(4528);const b={authorCol:"authorCol_Vww8",imageOnlyAuthorRow:"imageOnlyAuthorRow_BkIc",imageOnlyAuthorCol:"imageOnlyAuthorCol_W0vW"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,n.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!l&&(o?"col col--12":"col col--6"),l?b.imageOnlyAuthorCol:b.authorCol),children:(0,r.jsx)(A.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(f,{})]})}var N=a(8638),w=a(3273);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,n.e7)();return(0,r.jsx)("div",{id:i?N.LU:void 0,className:(0,s.A)("markdown",a),children:(0,r.jsx)(w.A,{children:t})})}var k=a(7614),y=a(7606),P=a(826);function U(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(U,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,g=a.length>0;if(!(g||m||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(P.A,{tags:a})})}),e&&(0,r.jsx)(y.A,{className:(0,s.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":m}),children:(0,r.jsx)(P.A,{tags:a})}),m&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":g}),children:(0,r.jsx)(C,{blogPostTitle:i,to:e.permalink})})]})}function _(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,s.A)(l,a),children:[(0,r.jsx)(v,{}),(0,r.jsx)(T,{children:t}),(0,r.jsx)(R,{})]})}},2931:(e,t,a)=>{a.d(t,{A:()=>i});a(2155);var s=a(2458),n=a(8928),r=a(5723);function i(e){let{items:t,component:a=n.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.in,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}}}]);