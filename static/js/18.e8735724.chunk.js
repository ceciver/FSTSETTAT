(this["webpackJsonpFSTS-react"]=this["webpackJsonpFSTS-react"]||[]).push([[18],{598:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(105),r=t(482),m=t.n(r),i=t(63),o=t(145),s=t(476),d=t(480),u=t(481),E=t(103),p=t.n(E);a.default=Object(i.connect)((function(e){return{cartItems:e.cartData,currency:e.currencyData}}))((function(e){var a=e.location,t=e.cartItems,r=e.currency,i=a.pathname,E=0;return n.a.createElement(l.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("title",null,"FSTS | Checkout"),n.a.createElement("meta",{name:"description",content:"Checkout page of FSTS react minimalist eCommerce template."})),n.a.createElement(o.BreadcrumbsItem,{to:"/"},"Home"),n.a.createElement(o.BreadcrumbsItem,{to:""+i},"Checkout"),n.a.createElement(d.a,{headerTop:"visible"},n.a.createElement(u.a,null),n.a.createElement("div",{className:"checkout-area pt-95 pb-100"},n.a.createElement("div",{className:"container"},t&&t.length>=1?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-7"},n.a.createElement("div",{className:"billing-info-wrap"},n.a.createElement("h3",null,"Billing Details"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"First Name"),n.a.createElement("input",{type:"text",id:"firstname"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Last Name"),n.a.createElement("input",{type:"text",id:"lastname"}))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Company Name"),n.a.createElement("input",{type:"text",id:"companyName"}))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-select mb-20"},n.a.createElement("label",null,"Country"),n.a.createElement("select",null,n.a.createElement("option",null,"Select a country"),n.a.createElement("option",null,"Morocco")))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Street Address"),n.a.createElement("input",{className:"billing-address",placeholder:"House number and street name",type:"text",id:"adresse"}))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"City"),n.a.createElement("input",{type:"text",id:"city"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Phone"),n.a.createElement("input",{type:"text",id:"phone"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info mb-20"},n.a.createElement("label",null,"Email Address"),n.a.createElement("input",{type:"text",id:"mail"})))),n.a.createElement("div",{className:"additional-info-wrap"},n.a.createElement("h4",null,"Additional information"),n.a.createElement("div",{className:"additional-info"},n.a.createElement("label",null,"Order notes"),n.a.createElement("textarea",{placeholder:"Notes about your order, e.g. special notes for delivery. ",name:"message",defaultValue:"",id:"notes"}))))),n.a.createElement("div",{className:"col-lg-5"},n.a.createElement("div",{className:"your-order-area"},n.a.createElement("h3",null,"Your order"),n.a.createElement("div",{className:"your-order-wrap gray-bg-4"},n.a.createElement("div",{className:"your-order-product-info"},n.a.createElement("div",{className:"your-order-top"},n.a.createElement("ul",null,n.a.createElement("li",null,"Product"),n.a.createElement("li",null,"Total"))),n.a.createElement("div",{className:"your-order-middle"},n.a.createElement("ul",null,t.map((function(e,a){var t=Object(s.a)(e.price,e.discount),l=(e.price*r.currencyRate).toFixed(2),c=(t*r.currencyRate).toFixed(2);return E+=null!=t?c*e.quantity:l*e.quantity,n.a.createElement("li",{key:a},n.a.createElement("span",{className:"order-middle-left"},e.name," X ",e.quantity)," ",n.a.createElement("span",{className:"order-price"},null!==t?r.currencySymbol+(c*e.quantity).toFixed(2):r.currencySymbol+(l*e.quantity).toFixed(2)))})))),n.a.createElement("div",{className:"your-order-bottom"},n.a.createElement("ul",null,n.a.createElement("li",{className:"your-order-shipping",id:"placeOrder"},"Shipping"),n.a.createElement("li",null,"Free shipping"))),n.a.createElement("div",{className:"your-order-total"},n.a.createElement("ul",null,n.a.createElement("li",{className:"order-total"},"Total"),n.a.createElement("li",null,r.currencySymbol+E.toFixed(2))))),n.a.createElement("div",{className:"payment-method"})),n.a.createElement("div",{className:"place-order mt-25"},n.a.createElement("button",{className:"btn-hover",onClick:function(e){var a=document.getElementById("firstname").value,l=document.getElementById("lastname").value,n=document.getElementById("companyName").value,c=document.getElementById("adresse").value,r=document.getElementById("city").value,m=document.getElementById("phone").value,i=document.getElementById("mail").value,o=document.getElementById("notes").value,s=0,d=t.map((function(e,a){return s+=e.price,{id:e.id,name:e.name,price:e.price}}));a&&l&&n&&c&&r&&m&&i&&o?p.a.post("http://localhost:5000/orders",{firstName:a,lastName:l,companyName:n,country:"Morocco",adresse:c,city:r,phone:m,mail:i,notes:o,products:d,totalPrice:s}).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)})):alert("Enter all informations!!!")}},"Place Order"))))):n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"item-empty-area text-center"},n.a.createElement("div",{className:"item-empty-area__icon mb-30"},n.a.createElement("i",{className:"pe-7s-cash"})),n.a.createElement("div",{className:"item-empty-area__text"},"No items found in cart to checkout ",n.a.createElement("br",null)," ",n.a.createElement(c.b,{to:"/shop-grid-standard"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=18.e8735724.chunk.js.map