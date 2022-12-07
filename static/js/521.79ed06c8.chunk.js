"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[521],{6521:function(e,n,r){r.r(n),r.d(n,{default:function(){return S}});var t=r(2791),i=r(9434),o=r(1413),a=r(5290),u=r(6052),s=r(6351),l=r(6015),d=r(2617),c=r(5923),x=r(3329),b=r(4565),g=r(5562),h=r(184);function m(e){var n,r,t,m,p=(0,i.v9)(s.Af),f=(0,i.I0)(),v=(0,a.cI)({mode:"onChange",defaultValues:{name:"",number:""}}),Z=v.register,j=v.handleSubmit,F=v.reset,C=v.formState.errors;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(l.Z,{component:"form",onSubmit:j((function(e){p.find((function(n){return n.name===e.name}))?g.Notify.warning("".concat(e.name," is already in contacts"),{color:"red"}):(f((0,u.rE)(e)),F())})),sx:{"& > :not(style)":{mb:2,width:"100%"},maxWidth:400,minHeight:150,margin:"20px auto",borderRadius:2,boxShadow:"0px 0px 15px 1px rgba(143, 144, 139, 0.6)",padding:"20px",backgroundColor:"rgba(255, 255, 255, 0.7)",alignItems:"center",boxSizing:"border-box"},children:[(0,h.jsx)(b.Z,{sx:{fontSize:28},children:"Create contact"}),(0,h.jsx)(d.Z,(0,o.Z)((0,o.Z)({},Z("name",{required:"This field is required",maxLength:30,pattern:{value:/^[a-z\u017F\u0430-\u044F\u0451\u212A]|['\u0401\u0404\u0406\u0407\u0410-\u044F\u0451\u0454\u0456\u0457\u0490\u0491\u1C80-\u1C83\u1C85\u1C86]+$/i,message:"Must contain letters, numbers, "}})),{},{sx:{color:"rgb(194, 120, 118)",width:"80%"},label:"Name",autoFocus:!0,error:!(null===C||void 0===C||null===(n=C.name)||void 0===n||!n.message),helperText:null===C||void 0===C||null===(r=C.name)||void 0===r?void 0:r.message})),(0,h.jsx)(d.Z,(0,o.Z)((0,o.Z)({},Z("number",{required:"This field is required",pattern:{value:/([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(\+)?([ \(\)\+\x2D:=_]?[0-9][ \(\)\+\x2D:=_]?){6,14}([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?/i,message:"Must include only numbers, - , () ... length 6-14"}})),{},{label:"Number",error:!(null===C||void 0===C||null===(t=C.number)||void 0===t||!t.message),helperText:null===C||void 0===C||null===(m=C.number)||void 0===m?void 0:m.message})),(0,h.jsx)(c.Z,{type:"submit",sx:{bgcolor:"rgb(146, 80 , 130)","&:hover":{bgcolor:"rgb(194, 120, 118)"}},loadingPosition:"start",startIcon:(0,h.jsx)(x.Z,{}),variant:"contained",children:"Save"})]})})}var p=r(5629),f=r(2087),v=r(4346),Z=r(3811),j=r(7247),F=function(){var e=(0,i.v9)(s.Af),n=(0,i.v9)(s.AD),r=(0,i.I0)(),t=e.filter((function(e){return e.name.includes(n)})),o=function(e){var n=e.currentTarget.id;r((0,u.zY)(n))};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(l.Z,{sx:{maxWidth:600,margin:"20px auto",borderRadius:2,boxShadow:"0px 0px 15px 1px rgba(143, 144, 139, 0.6)",padding:"20px",backgroundColor:"rgba(255, 255, 255, 0.7)",alignItems:"center",boxSizing:"border-box"},children:[t.length>0&&(0,h.jsx)(b.Z,{sx:{fontSize:28},children:"Contacts"}),(0,h.jsx)(p.Z,{sx:{width:"100%"},children:e.length>0&&e.map((function(e){var n=e.name,r=e.number,t=e.id;return(0,h.jsx)(f.ZP,{disableGutters:!0,secondaryAction:(0,h.jsx)(Z.Z,{"aria-label":"comment",id:t,onClick:o,children:(0,h.jsx)(j.Z,{})}),children:(0,h.jsx)(v.Z,{primary:"".concat(n,":"),secondary:r})},t)}))})]})})},C=r(1634),A=function(){var e=(0,i.I0)(),n=(0,i.v9)(s.AD);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(l.Z,{sx:{"& > :not(style)":{mb:2,width:"100%"},maxWidth:400,minHeight:150,margin:"20px auto",borderRadius:2,boxShadow:"0px 0px 15px 1px rgba(143, 144, 139, 0.6)",padding:"20px",backgroundColor:"rgba(255, 255, 255, 0.7)",alignItems:"center",boxSizing:"border-box"},children:[(0,h.jsx)(b.Z,{sx:{fontSize:28},children:"Contacts"}),(0,h.jsx)(d.Z,{sx:{color:"rgb(194, 120, 118)",display:"inline-block",width:"50%"},id:"contactFilter",label:"Filter",value:n,onChange:function(n){var r=n.target.value;e((0,C.u)(r))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",fullWidth:!0})]})})},S=function(){var e=(0,i.I0)();(0,t.useEffect)((function(){e((0,u.vH)())}),[e]);var n=(0,i.v9)(s.LK);return(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(m,{}),n.length>0&&(0,h.jsx)(A,{}),n.length>0?(0,h.jsx)(F,{}):(0,h.jsx)(b.Z,{sx:{fontSize:45,textAlign:"center"},children:"there is no contact in your phone book"})]})}}}]);
//# sourceMappingURL=521.79ed06c8.chunk.js.map