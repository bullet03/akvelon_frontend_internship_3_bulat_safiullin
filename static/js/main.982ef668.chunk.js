(this.webpackJsonpakvelon_frontend_internship_3_bulat_safiullin=this.webpackJsonpakvelon_frontend_internship_3_bulat_safiullin||[]).push([[0],{11:function(e,n,t){e.exports={container:"Registration_container__3iXPY",fieldContainer:"Registration_fieldContainer__20y8q",h1:"Registration_h1__2bk2h",buttonSignUp:"Registration_buttonSignUp__3Rccx"}},12:function(e,n,t){e.exports={container:"Slider_container__2Fldm",slider:"Slider_slider__2vNNX",picture:"Slider_picture__3KuOl",rightArrow:"Slider_rightArrow__1tnTv",leftArrow:"Slider_leftArrow__p1xNi"}},19:function(e,n,t){e.exports={header:"Header_header__1VCKf"}},20:function(e,n,t){e.exports={navbar:"NavBar_navbar__3Fl2e"}},22:function(e,n,t){e.exports={root:"App_root__2h8CC",wrapper:"App_wrapper__2Rh_f"}},36:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),i=t(18),s=t.n(i),a=t(9),o=t(2),l=t(8),d=t(7),j=t.n(d),u=["\n  const factorial = (num) => {\n      let result = 1;\n      for (let i = 1; i <= num; i += 1) {\n        result = result * i;\n      }\n      return result;\n  };\n\n            *can also use recursion\n          ",'\n    const reverseBits = (num) => {\n        const binary = num.toString(2);\n        const reverseBinary = binary.split("").reverse().join("");\n        const result = parseInt(reverseBinary, 2);\n        return result;\n    }\n          ','\n  const uniqueWords = (str) => {\n      const arrFromStr = str.split(" ");\n      const result = arrFromStr.filter(\n        (word, index, array) => array.indexOf(word) === index\n      );\n      return result.join(" ");\n  };\n\n            *can also use set and for\n          '],b=t(0),p=function(){var e=Object(l.a)(u,3),n=e[0],t=e[1],c=e[2];return Object(b.jsxs)("section",{className:j.a.container,children:[Object(b.jsxs)("div",{className:j.a.functionCard,children:[Object(b.jsx)("span",{className:j.a.functionHead,children:"Factorial"}),Object(b.jsx)("div",{className:j.a.functionCode,children:n})]}),Object(b.jsxs)("div",{className:j.a.functionCard,children:[Object(b.jsx)("span",{className:j.a.functionHead,children:"ReverseBits"}),Object(b.jsx)("div",{className:j.a.functionCode,children:t})]}),Object(b.jsxs)("div",{className:j.a.functionCard,children:[Object(b.jsx)("span",{className:j.a.functionHead,children:"uniqueWords"}),Object(b.jsx)("div",{className:j.a.functionCode,children:c})]})]})},h=t(11),x=t.n(h),_=function(){var e=Object(c.useState)(""),n=Object(l.a)(e,2),t=n[0],r=n[1],i=Object(c.useState)(""),s=Object(l.a)(i,2),a=s[0],o=s[1],d=Object(c.useState)(""),j=Object(l.a)(d,2),u=j[0],p=j[1];return Object(b.jsxs)("section",{className:x.a.container,children:[Object(b.jsx)("h1",{className:x.a.h1,children:"Register"}),Object(b.jsxs)("div",{className:x.a.fieldContainer,children:[Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"Full Name:"})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)}})})]}),Object(b.jsxs)("div",{className:x.a.fieldContainer,children:[Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"E-mail:"})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",onChange:function(e){o(e.target.value)}})})]}),Object(b.jsxs)("div",{className:x.a.fieldContainer,children:[Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"Password:"})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",onChange:function(e){p(e.target.value)}})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",onClick:function(){t&&a&&u?/^[a-zA-Z\s]{1,120}$/.test(t)?a.includes("@")?u.length>=8?(alert("Success"),console.log(t,a,u)):alert("password is too short"):alert("email format is not correct"):alert("FullName format is not correct"):alert("You should complete all fields")},className:x.a.buttonSignUp,children:"Sign Up"})})]})},O=["https://apriori-center.org/wp-content/uploads/2016/07/Evolution_by_will_yen-500x500.png","https://i.pinimg.com/originals/64/62/24/6462243c87f1604b1d9046bac1bfe47f.jpg","https://bipbap.ru/wp-content/uploads/2018/06/img_resize.jpg","https://bipbap.ru/wp-content/uploads/2018/06/3c980dd2e9c909ada7377cc89885231b.jpg","https://bipbap.ru/wp-content/uploads/2018/06/3ee998952c2016c72a9ad131db1ea00d.jpg"],f=t(12),m=t.n(f),g=function(){var e=Object(c.useState)(0),n=Object(l.a)(e,2),t=n[0],r=n[1];return Object(b.jsx)("section",{className:m.a.container,children:Object(b.jsxs)("div",{className:m.a.slider,children:[Object(b.jsx)("button",{type:"button",onClick:function(){0!==t&&r(t-1)},className:m.a.leftArrow,children:"<"}),Object(b.jsx)("img",{src:O[t],alt:"nature",className:m.a.picture}),Object(b.jsx)("button",{type:"button",onClick:function(){t!==O.length-1&&r(t+1)},className:m.a.rightArrow,children:">"})]})})},v=t(19),N=t.n(v),C=t(20),w=t.n(C),S=function(){return Object(b.jsxs)("nav",{className:w.a.navbar,children:[Object(b.jsx)(a.b,{to:"/",children:"Home"}),Object(b.jsx)(a.b,{to:"/registration",children:"Registration"}),Object(b.jsx)(a.b,{to:"/functions",children:"Functions"})]})},y=function(){return Object(b.jsx)("header",{className:N.a.header,children:Object(b.jsx)(S,{})})},F=t(22),R=t.n(F);var A=function(){return Object(b.jsxs)("section",{className:R.a.wrapper,children:[Object(b.jsx)(y,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(g,{})}),Object(b.jsx)(o.a,{path:"/registration",children:Object(b.jsx)(_,{})}),Object(b.jsx)(o.a,{path:"/functions",children:Object(b.jsx)(p,{})})]})]})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(a.a,{children:Object(b.jsx)(A,{})})}),document.getElementById("root"))},7:function(e,n,t){e.exports={container:"CodingFunctions_container__1hqeu",functionCard:"CodingFunctions_functionCard__Q9bJx",functionHead:"CodingFunctions_functionHead__1mP1G",functionCode:"CodingFunctions_functionCode__3hLRz"}}},[[36,1,2]]]);
//# sourceMappingURL=main.982ef668.chunk.js.map