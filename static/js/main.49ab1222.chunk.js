(this.webpackJsonpakvelon_frontend_internship_3_bulat_safiullin=this.webpackJsonpakvelon_frontend_internship_3_bulat_safiullin||[]).push([[0],{13:function(e,n,t){e.exports={container:"Slider_container__2Fldm",slider:"Slider_slider__2vNNX",picture:"Slider_picture__3KuOl"}},16:function(e,n,t){e.exports={container:"Registration_container__3iXPY",fieldContainer:"Registration_fieldContainer__20y8q",h1:"Registration_h1__2bk2h",buttonSignUp:"Registration_buttonSignUp__3Rccx"}},20:function(e,n,t){e.exports={buttonSignUp:"RegistrationButton_buttonSignUp__n5Zh7"}},21:function(e,n,t){e.exports={fieldContainer:"FormInput_fieldContainer__12DGx"}},22:function(e,n,t){e.exports={arrow:"SliderArrow_arrow__1VhNO"}},23:function(e,n,t){e.exports={header:"Header_header__1VCKf"}},24:function(e,n,t){e.exports={navbar:"NavBar_navbar__3Fl2e"}},26:function(e,n,t){e.exports={root:"App_root__2h8CC",wrapper:"App_wrapper__2Rh_f"}},40:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),s=t(19),c=t.n(s),i=t(8),o=t(2),l=t(11),u=t(7),d=t.n(u),j=["\n  const factorial = (num) => {\n      let result = 1;\n      for (let i = 1; i <= num; i += 1) {\n        result = result * i;\n      }\n      return result;\n  };\n\n            *can also use recursion\n          ",'\n    const reverseBits = (num) => {\n        const binary = num.toString(2);\n        const reverseBinary = binary.split("").reverse().join("");\n        const result = parseInt(reverseBinary, 2);\n        return result;\n    }\n          ','\n  const uniqueWords = (str) => {\n      const arrFromStr = str.split(" ");\n      const result = arrFromStr.filter(\n        (word, index, array) => array.indexOf(word) === index\n      );\n      return result.join(" ");\n  };\n\n            *can also use set and for\n          '],b=t(0),p=function(){var e=Object(l.a)(j,3),n=e[0],t=e[1],a=e[2];return Object(b.jsxs)("section",{className:d.a.container,children:[Object(b.jsxs)("div",{className:d.a.functionCard,children:[Object(b.jsx)("span",{className:d.a.functionHead,children:"Factorial"}),Object(b.jsx)("div",{className:d.a.functionCode,children:n})]}),Object(b.jsxs)("div",{className:d.a.functionCard,children:[Object(b.jsx)("span",{className:d.a.functionHead,children:"ReverseBits"}),Object(b.jsx)("div",{className:d.a.functionCode,children:t})]}),Object(b.jsxs)("div",{className:d.a.functionCard,children:[Object(b.jsx)("span",{className:d.a.functionHead,children:"uniqueWords"}),Object(b.jsx)("div",{className:d.a.functionCode,children:a})]})]})},f=t(16),x=t.n(f),h=t(20),m=t.n(h),_=function(e){var n=e.onButtonSubmit,t=e.userInfo;return Object(b.jsx)("button",{type:"button",onClick:function(){return n(t)},className:m.a.buttonSignUp,children:"Sign Up"})},O=t(10),g=t(21),v=t.n(g),N=function(e){var n=e.text,t=e.type,a=e.onChange;return Object(b.jsxs)("div",{className:v.a.fieldContainer,children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:t,onChange:a})})]})},C=function(e){var n=e.setUserInfo,t=e.userInfo;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{text:"FullName",label:"FullName",value:t.FullName,type:"text",onChange:function(e){n(Object(O.a)(Object(O.a)({},t),{},{fullName:e.target.value}))}}),Object(b.jsx)(N,{text:"Email",label:"email",value:t.email,type:"email",onChange:function(e){n(Object(O.a)(Object(O.a)({},t),{},{email:e.target.value}))}}),Object(b.jsx)(N,{text:"Password",label:"FullName",value:t.password,type:"password",onChange:function(e){n(Object(O.a)(Object(O.a)({},t),{},{password:e.target.value}))}})]})},w=function(){var e=Object(a.useState)({fullName:"",email:"",password:""}),n=Object(l.a)(e,2),t=n[0],r=n[1];return Object(b.jsxs)("section",{className:x.a.container,children:[Object(b.jsx)("h1",{className:x.a.h1,children:"Register"}),Object(b.jsx)(C,{setUserInfo:r,userInfo:t}),Object(b.jsx)(_,{onButtonSubmit:function(e){var n=e.fullName,a=e.email,r=e.password;n&&a&&r?/^[a-zA-Z\s]{1,120}$/.test(t.fullName)?t.email.includes("@")?t.password.length>=8?alert("Success"):alert("password is too short"):alert("email format is not correct"):alert("FullName format is not correct"):alert("You should complete all fields"),function(e,n,t){console.log("fullName: ".concat(e,", email: ").concat(n,", password: ").concat(t))}(n,a,r)},userInfo:t})]})},S=["https://apriori-center.org/wp-content/uploads/2016/07/Evolution_by_will_yen-500x500.png","https://i.pinimg.com/originals/64/62/24/6462243c87f1604b1d9046bac1bfe47f.jpg","https://bipbap.ru/wp-content/uploads/2018/06/img_resize.jpg","https://bipbap.ru/wp-content/uploads/2018/06/3c980dd2e9c909ada7377cc89885231b.jpg","https://bipbap.ru/wp-content/uploads/2018/06/3ee998952c2016c72a9ad131db1ea00d.jpg"],y=t(13),F=t.n(y),I=t(22),R=t.n(I),U=function(e){var n=e.sign,t=e.funcToUse;return Object(b.jsx)("button",{type:"button",onClick:t,className:R.a.arrow,children:n})},B=function(){var e=Object(a.useState)(0),n=Object(l.a)(e,2),t=n[0],r=n[1];return Object(b.jsx)("section",{className:F.a.container,children:Object(b.jsxs)("div",{className:F.a.slider,children:[Object(b.jsx)(U,{imageIndex:t,setImageIndex:r,sliderImages:S,sign:"<",funcToUse:function(){0!==t&&r(t-1)}}),Object(b.jsx)("img",{src:S[t],alt:"nature",className:F.a.picture}),Object(b.jsx)(U,{imageIndex:t,setImageIndex:r,sliderImages:S,sign:">",funcToUse:function(){t!==S.length-1&&r(t+1)}})]})})},k=t(23),H=t.n(k),q=t(24),A=t.n(q),z=function(){return Object(b.jsxs)("nav",{className:A.a.navbar,children:[Object(b.jsx)(i.b,{to:"/",children:"Home"}),Object(b.jsx)(i.b,{to:"/registration",children:"Registration"}),Object(b.jsx)(i.b,{to:"/functions",children:"Functions"})]})},E=function(){return Object(b.jsx)("header",{className:H.a.header,children:Object(b.jsx)(z,{})})},J=t(26),P=t.n(J);var T=function(){return Object(b.jsxs)("section",{className:P.a.wrapper,children:[Object(b.jsx)(E,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(B,{})}),Object(b.jsx)(o.a,{path:"/registration",children:Object(b.jsx)(w,{})}),Object(b.jsx)(o.a,{path:"/functions",children:Object(b.jsx)(p,{})})]})]})};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(T,{})})}),document.getElementById("root"))},7:function(e,n,t){e.exports={container:"CodingFunctions_container__1hqeu",functionCard:"CodingFunctions_functionCard__Q9bJx",functionHead:"CodingFunctions_functionHead__1mP1G",functionCode:"CodingFunctions_functionCode__3hLRz"}}},[[40,1,2]]]);
//# sourceMappingURL=main.49ab1222.chunk.js.map