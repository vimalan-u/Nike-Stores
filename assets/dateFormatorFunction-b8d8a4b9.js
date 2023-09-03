function o(e){const t=new Date(e),a=t.toLocaleTimeString();return{date:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(t),time:a}}export{o as d};
