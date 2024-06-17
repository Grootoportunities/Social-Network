"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[223],{6223:function(n,r,e){e.r(r),e.d(r,{UsersAPIComponent:function(){return E},default:function(){return R}});var t,o,a,s,u,i,c,l,d=e(5671),p=e(3144),g=e(136),h=e(5716),f=e(440),x=e(5437),P=e(8381),m=e(5643),C=e(1200),j=e(168),b=e(7149),w=b.ZP.li(t||(t=(0,j.Z)(["\n  background-color: #ffffff;\n\n  margin-bottom: 20px;\n  padding: 20px;\n\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: space-between;\n\n  border-radius: 20px;\n\n  max-width: 800px;\n  width: 100%;\n"]))),U=b.ZP.img(o||(o=(0,j.Z)(["\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n"]))),y=b.ZP.span(a||(a=(0,j.Z)(["\n  font-weight: 600;\n  font-size: 20px;\n"]))),Z=b.ZP.span(s||(s=(0,j.Z)(["\n  font-size: 16px;\n"]))),N={User:w,UserAvatar:U,CitySpan:y,CountrySpan:Z,StatusSpan:(0,b.ZP)(Z)(u||(u=(0,j.Z)(["\n  max-width: 160px;\n"]))),NameSpan:(0,b.ZP)(y)(i||(i=(0,j.Z)(["\n  max-width: 150px;\n"])))},v=e(2734),k=e(9343),S=function(n){var r=n.ava,e=n.name,t=n.status,o=n.location,a=n.isFriend,s=n.userID,u=n.entityStatus,i=n.setUn_Follow;return(0,k.jsxs)(N.User,{children:[(0,k.jsx)(v.rU,{to:"/profile/".concat(s),children:(0,k.jsx)(N.UserAvatar,{src:r})}),(0,k.jsxs)(m.A,{direction:"column",gap:"15px",children:[(0,k.jsx)(N.NameSpan,{children:e}),(0,k.jsx)(N.StatusSpan,{children:t})]}),(0,k.jsxs)(m.A,{direction:"column",gap:"10px",children:[(0,k.jsx)(N.CitySpan,{children:o.city}),(0,k.jsx)(N.CountrySpan,{children:o.country})]}),(0,k.jsx)(C.z,{onClick:function(){return i(s)},disabled:u,children:a?"Unfollow":"Follow"})]})},H=e(8367),A=e(4497),F={PagesList:b.ZP.ul(c||(c=(0,j.Z)(["\n  display: flex;\n  flex-direction: row;\n"]))),Page:b.ZP.span(l||(l=(0,j.Z)(["\n  margin: 4px;\n  padding: 10px;\n  color: ",";\n  background-color: ",";\n  border-radius: 50%;\n  border: 1px solid ",";\n"])),(function(n){return n.p===n.currentPage?"#1ea7fd":"black"}),A.Q.colors.button,A.Q.colors.sidebarLinks)},_=function(n){for(var r=n.totalItemsCount,e=n.page,t=n.count,o=n.portion,a=n.onChangePageHandler,s=n.changeCurrentPortionNumberHandler,u=n.currentPortionNumber,i=[],c=Math.ceil(r/t),l=Math.ceil(c/o),d=(u-1)*o+1,p=u*o,g=1;g<=c;g++)i.push(g);var h=i.filter((function(n){return n>=d&&n<=p})).map((function(n,r){return(0,k.jsx)("li",{children:(0,k.jsx)(F.Page,{currentPage:e,p:n,onClick:function(){return a(n)},children:(0,k.jsx)(C.z,{children:n})})},r)}));return(0,k.jsxs)(m.A,{direction:"row",gap:"20px",children:[u>1&&(0,k.jsx)(C.z,{onClick:function(){return s(--u)},children:"Back"}),(0,k.jsx)(F.PagesList,{children:h}),l>u&&(0,k.jsx)(C.z,{onClick:function(){return s(++u)},children:"Next"})]})},z=function(n){var r=n.users,e=n.totalUsersCount,t=n.count,o=n.page,a=n.currentPortionNumber,s=n.onChangePageHandler,u=n.changeCurrentPortionNumberHandler,i=n.setUn_Follow,c=r.map((function(n){return(0,k.jsx)(S,{ava:n.photos.large?n.photos.large:H,name:n.name,isFriend:n.followed,status:n.status?n.status:null,location:{country:"Belarus",city:"Minsk"},userID:n.id,entityStatus:n.userEntityStatus,setUn_Follow:i},n.id)}));return(0,k.jsx)("section",{children:(0,k.jsxs)(m.A,{direction:"column",alignItems:"center",gap:"30px",children:[(0,k.jsx)(_,{totalItemsCount:e,page:o,count:t,onChangePageHandler:s,portion:10,changeCurrentPortionNumberHandler:u,currentPortionNumber:a}),(0,k.jsx)("ul",{children:c})]})})},I=e(6193),M=e(6561),L=e(4479),D=function(n){return n.usersPage.page},B=function(n){return n.usersPage.users},O=function(n){return n.usersPage.count},Q=function(n){return n.usersPage.isPending},$=function(n){return n.usersPage.totalUsersCount},q=function(n){return n.usersPage.currentPortionNumber},E=function(n){(0,g.Z)(e,n);var r=(0,h.Z)(e);function e(){var n;(0,d.Z)(this,e);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return(n=r.call.apply(r,[this].concat(o))).onChangePageHandler=function(r){var e=n.props;(0,e.getUserOnPageChange)(r,e.count)},n.changeCurrentPortionNumberHandler=function(r){return n.props.setCurrentPortionNumber(r)},n}return(0,p.Z)(e,[{key:"componentDidMount",value:function(){var n=this.props;(0,n.getUsers)(n.page,n.count)}},{key:"render",value:function(){var n=this.props,r=n.isPending,e=n.page,t=n.users,o=n.count,a=n.totalUsersCount,s=n.setUn_Follow,u=n.currentPortionNumber;return(0,k.jsx)(I.W,{children:r?(0,k.jsx)(m.A,{justifyContent:"center",children:(0,k.jsx)(M.p,{})}):(0,k.jsx)(z,{page:e,users:t,count:o,totalUsersCount:a,onChangePageHandler:this.onChangePageHandler,setUn_Follow:s,changeCurrentPortionNumberHandler:this.changeCurrentPortionNumberHandler,currentPortionNumber:u})})}}]),e}(P.Component),R=(0,L.qC)((0,f.$j)((function(n){return{users:B(n),count:O(n),totalUsersCount:$(n),page:D(n),isPending:Q(n),currentPortionNumber:q(n)}}),{getUsers:x.Zw,getUserOnPageChange:x.R$,setUn_Follow:x.Mj,setCurrentPortionNumber:x.uL}))(E)}}]);
//# sourceMappingURL=223.990c7751.chunk.js.map