(this.webpackJsonpakvelon_frontend_internship_3_bulat_safiullin=this.webpackJsonpakvelon_frontend_internship_3_bulat_safiullin||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){e.exports={functionCard:"SingleFunction_functionCard__Cf6a9",functionHead:"SingleFunction_functionHead__Yvea7",functionCode:"SingleFunction_functionCode__2ckxs"}},function(e,n,t){e.exports={container:"Slider_container__2Fldm",slider:"Slider_slider__2vNNX",picture:"Slider_picture__3KuOl"}},,,function(e,n,t){e.exports={container:"Registration_container__3iXPY",fieldContainer:"Registration_fieldContainer__20y8q",h1:"Registration_h1__2bk2h",buttonSignUp:"Registration_buttonSignUp__3Rccx"}},,function(e,n,t){e.exports={overlay:"ModuleWindow_overlay__30wXK",modal:"ModuleWindow_modal__9UYjO"}},,,,function(e,n,t){e.exports={container:"CodingFunctions_container__1hqeu"}},function(e,n,t){e.exports={buttonSignUp:"RegistrationButton_buttonSignUp__n5Zh7"}},function(e,n,t){e.exports={fieldContainer:"FormInput_fieldContainer__12DGx"}},function(e,n,t){e.exports={arrow:"SliderArrow_arrow__1VhNO"}},function(e,n,t){e.exports={header:"Header_header__1VCKf"}},function(e,n,t){e.exports={navbar:"NavBar_navbar__3Fl2e"}},,function(e,n,t){e.exports={root:"App_root__2h8CC",wrapper:"App_wrapper__2Rh_f"}},,,,,,,,,,,,,,function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),s=t(21),c=t.n(s),i=t(8),o=t(2),l=t(7),u=t(22),d=t.n(u),j=["\n  const factorial = (num) => {\n      let result = 1;\n      for (let i = 1; i <= num; i += 1) {\n        result = result * i;\n      }\n      return result;\n  };\n\n            *can also use recursion\n          ",'\n    const reverseBits = (num) => {\n        const binary = num.toString(2);\n        const reverseBinary = binary.split("").reverse().join("");\n        const result = parseInt(reverseBinary, 2);\n        return result;\n    }\n          ','\n  const uniqueWords = (str) => {\n      const arrFromStr = str.split(" ");\n      const result = arrFromStr.filter(\n        (word, index, array) => array.indexOf(word) === index\n      );\n      return result.join(" ");\n  };\n\n            *can also use set and for\n          '],b=t(12),p=t.n(b),f=t(0),x=function(e){var n=e.name,t=e.code;return Object(f.jsxs)("div",{className:p.a.functionCard,children:[Object(f.jsx)("span",{className:p.a.functionHead,children:n}),Object(f.jsx)("div",{className:p.a.functionCode,children:t})]})},_=function(){var e=Object(l.a)(j,3),n=e[0],t=e[1],a=e[2];return Object(f.jsxs)("section",{className:d.a.container,children:[Object(f.jsx)(x,{name:"Factorial",code:n}),Object(f.jsx)(x,{name:"ReverseBits",code:t}),Object(f.jsx)(x,{name:"UniqueWords",code:a})]})},m=t(16),h=t.n(m),O=t(23),g=t.n(O),v=function(e){var n=e.onButtonSubmit,t=e.userInfo;return Object(f.jsx)("button",{type:"button",onClick:function(){return n(t)},className:g.a.buttonSignUp,children:"Sign Up"})},N=t(11),w=t(17),C=t(24),S=t.n(C),y=function(e){var n=e.text,t=e.type,a=e.onChange;return Object(f.jsxs)("div",{className:S.a.fieldContainer,children:[Object(f.jsx)("span",{children:n}),Object(f.jsx)("div",{children:Object(f.jsx)("input",{type:t,onChange:a})})]})},F=function(e){var n=e.setUserInfo,t=e.userInfo,a=function(e,t){return function(a){n(Object(w.a)(Object(w.a)({},t),{},Object(N.a)({},e,a.target.value)))}};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{label:"FullName",value:t.FullName,text:"FullName",type:"text",onChange:a("fullName",t)}),Object(f.jsx)(y,{label:"email",value:t.email,text:"Email",type:"email",onChange:a("email",t)}),Object(f.jsx)(y,{label:"FullName",value:t.password,text:"Password",type:"password",onChange:a("password",t)})]})},I=t(18),U=t.n(I),R=function(e){var n=e.text,t=e.isOpen,a=e.onClose;return Object(f.jsx)(f.Fragment,{children:t&&Object(f.jsx)("div",{className:U.a.overlay,children:Object(f.jsxs)("div",{className:U.a.modal,children:[Object(f.jsx)("div",{children:n}),Object(f.jsx)("button",{onClick:a,children:"X"})]})})})},k=function(){var e=Object(a.useState)({fullName:"",email:"",password:""}),n=Object(l.a)(e,2),t=n[0],r=n[1],s=Object(a.useState)(!1),c=Object(l.a)(s,2),i=c[0],o=c[1],u=Object(a.useState)(""),d=Object(l.a)(u,2),j=d[0],b=d[1],p=function(){return t.email.includes("@")},x=function(){return/^[a-zA-Z\s]{1,120}$/.test(t.fullName)},_=function(){return t.password.length>=8};return Object(f.jsxs)("section",{className:h.a.container,children:[Object(f.jsx)(R,{text:j,isOpen:i,onClose:function(){o(!i)}}),Object(f.jsx)("h1",{className:h.a.h1,children:"Register"}),Object(f.jsx)(F,{setUserInfo:r,userInfo:t}),Object(f.jsx)(v,{onButtonSubmit:function(e){var n=e.fullName,t=e.email,a=e.password;n&&t&&a?x()?p()?_()?(o(!i),b("Success")):(o(!i),b("Password should be at least 8 symbols length")):(o(!i),b("Email doesn't have @")):(o(!i),b("FullName format should only contain letters")):(o(!i),b("You should complete all fields")),function(e,n,t){console.log("fullName: ".concat(e,", email: ").concat(n,", password: ").concat(t))}(n,t,a)},userInfo:t})]})},B=["https://apriori-center.org/wp-content/uploads/2016/07/Evolution_by_will_yen-500x500.png","https://i.pinimg.com/originals/64/62/24/6462243c87f1604b1d9046bac1bfe47f.jpg","https://bipbap.ru/wp-content/uploads/2018/06/img_resize.jpg","https://bipbap.ru/wp-content/uploads/2018/06/3c980dd2e9c909ada7377cc89885231b.jpg","https://bipbap.ru/wp-content/uploads/2018/06/3ee998952c2016c72a9ad131db1ea00d.jpg"],H=t(13),q=t.n(H),A=t(25),E=t.n(A),W=function(e){var n=e.sign,t=e.funcToUse;return Object(f.jsx)("button",{type:"button",onClick:t,className:E.a.arrow,children:n})},X=function(){var e=Object(a.useState)(0),n=Object(l.a)(e,2),t=n[0],r=n[1];return Object(f.jsx)("section",{className:q.a.container,children:Object(f.jsxs)("div",{className:q.a.slider,children:[Object(f.jsx)(W,{imageIndex:t,setImageIndex:r,sliderImages:B,sign:"<",funcToUse:function(){0!==t&&r(t-1)}}),Object(f.jsx)("img",{src:B[t],alt:"nature",className:q.a.picture}),Object(f.jsx)(W,{imageIndex:t,setImageIndex:r,sliderImages:B,sign:">",funcToUse:function(){t!==B.length-1&&r(t+1)}})]})})},Y=t(26),K=t.n(Y),M=t(27),P=t.n(M),T=function(){return Object(f.jsxs)("nav",{className:P.a.navbar,children:[Object(f.jsx)(i.b,{to:"/",children:"Home"}),Object(f.jsx)(i.b,{to:"/registration",children:"Registration"}),Object(f.jsx)(i.b,{to:"/functions",children:"Functions"})]})},z=function(){return Object(f.jsx)("header",{className:K.a.header,children:Object(f.jsx)(T,{})})},J=t(29),V=t.n(J);var Z=function(){return Object(f.jsxs)("section",{className:V.a.wrapper,children:[Object(f.jsx)(z,{}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(X,{})}),Object(f.jsx)(o.a,{path:"/registration",children:Object(f.jsx)(k,{})}),Object(f.jsx)(o.a,{path:"/functions",children:Object(f.jsx)(_,{})})]})]})};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(Z,{})})}),document.getElementById("root"))}],[[43,1,2]]]);
//# sourceMappingURL=main.73eaaf18.chunk.js.map