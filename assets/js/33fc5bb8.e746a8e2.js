"use strict";(self.webpackChunkeva_website=self.webpackChunkeva_website||[]).push([[867],{1893:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(2155);var s=a(851),r=a(1798),n=a(7614),l=a(4372),o=a(147),i=a(2458),c=a(1602),d=a(3198),u=a(5170),m=a(2931),h=a(4528),g=a(5723);function p(e){let{author:t}=e;const a=(0,l.wI)(t);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.be,{title:a}),(0,g.jsx)(u.A,{tag:"blog_authors_posts"})]})}function x(){const{authorsListPath:e}=(0,i.x)();return(0,g.jsx)(o.A,{href:e,children:(0,g.jsx)(l.np,{})})}function j(e){let{author:t,items:a,sidebar:s,listMetadata:r}=e;return(0,g.jsxs)(c.A,{sidebar:s,children:[(0,g.jsxs)("header",{className:"margin-bottom--xl",children:[(0,g.jsx)(h.A,{as:"h1",author:t}),t.description&&(0,g.jsx)("p",{children:t.description}),(0,g.jsx)(x,{})]}),(0,g.jsx)("hr",{}),(0,g.jsx)(m.A,{items:a}),(0,g.jsx)(d.A,{metadata:r})]})}function b(e){return(0,g.jsxs)(r.e3,{className:(0,s.A)(n.G.wrapper.blogPages,n.G.page.blogAuthorsPostsPage),children:[(0,g.jsx)(p,{...e}),(0,g.jsx)(j,{...e})]})}},3198:(e,t,a)=>{a.d(t,{A:()=>l});a(2155);var s=a(6210),r=a(6043),n=a(5723);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(r.A,{permalink:a,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,n.jsx)(r.A,{permalink:l,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8928:(e,t,a)=>{a.d(t,{A:()=>C});a(2155);var s=a(851),r=a(2458),n=a(5723);function l(e){let{children:t,className:a}=e;return(0,n.jsx)("article",{className:a,children:t})}var o=a(147);const i={title:"title_CTaa"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,r.e7)(),{permalink:c,title:d}=a,u=l?"h1":"h2";return(0,n.jsx)(u,{className:(0,s.A)(i.title,t),children:l?d:(0,n.jsx)(o.A,{to:c,children:d})})}var d=a(6210),u=a(5912),m=a(9135);const h={container:"container_gkYT"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,n.jsx)(n.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,n.jsx)("time",{dateTime:t,children:a})}function x(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:l,readingTime:o}=a,i=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,s.A)(h.container,"margin-vert--md",t),children:[(0,n.jsx)(p,{date:l,formattedDate:(c=l,i.format(new Date(c)))}),void 0!==o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),(0,n.jsx)(g,{readingTime:o})]})]});var c}var b=a(4528);const A={authorCol:"authorCol_Vww8",imageOnlyAuthorRow:"imageOnlyAuthorRow_BkIc",imageOnlyAuthorCol:"imageOnlyAuthorCol_W0vW"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,r.e7)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t})),i=1===a.length;return(0,n.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",o?A.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,n.jsx)("div",{className:(0,s.A)(!o&&(i?"col col--12":"col col--6"),o?A.imageOnlyAuthorCol:A.authorCol),children:(0,n.jsx)(b.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(j,{}),(0,n.jsx)(f,{})]})}var w=a(8638),T=a(3273);function N(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,r.e7)();return(0,n.jsx)("div",{id:l?w.LU:void 0,className:(0,s.A)("markdown",a),children:(0,n.jsx)(T.A,{children:t})})}var P=a(7614),k=a(7606),y=a(826);function U(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function _(e){const{blogPostTitle:t,...a}=e;return(0,n.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,n.jsx)(U,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:l,editUrl:o,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&i,m=a.length>0;if(!(m||u||o))return null;if(t){const e=!!(o||d||c);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,n.jsx)("div",{className:(0,s.A)("row","margin-top--sm",P.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(y.A,{tags:a})})}),e&&(0,n.jsx)(k.A,{className:(0,s.A)("margin-top--sm",P.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,n.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,n.jsx)(y.A,{tags:a})}),u&&(0,n.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":m}),children:(0,n.jsx)(_,{blogPostTitle:l,to:e.permalink})})]})}function C(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(l,{className:(0,s.A)(o,a),children:[(0,n.jsx)(v,{}),(0,n.jsx)(N,{children:t}),(0,n.jsx)(R,{})]})}},2931:(e,t,a)=>{a.d(t,{A:()=>l});a(2155);var s=a(2458),r=a(8928),n=a(5723);function l(e){let{items:t,component:a=r.A}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,n.jsx)(s.in,{content:t,children:(0,n.jsx)(a,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}},4372:(e,t,a)=>{a.d(t,{np:()=>c,uz:()=>i,wI:()=>o});a(2155);var s=a(6210),r=a(5912),n=a(5723);function l(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function o(e){const t=l();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const i=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function c(){return(0,n.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}}}]);