import React from "react";
export function onRenderBody(
  { setPostBodyComponents }
) {
  setPostBodyComponents([
    <script dangerouslySetInnerHTML={{ __html=`  
    <script>
        (function(g,e,o,t,l,y){
        var l=g.getElementsByTagName(e)[0],y=g.createElement(e); y.async=true;
        y.src='//geo-targetly.com/geocontent?id=-LwVI_y1Pd76sqACFNmC&refurl='+g.referrer+'&winurl='+encodeURIComponent(window.location);
        l.parentNode.insertBefore(y,l);
        })(document,'script','style','head');
    </script>
    `}}/>,
  ]);
}