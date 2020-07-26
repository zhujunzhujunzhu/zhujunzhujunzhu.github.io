define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-a8ce88a9","./Transforms-9ac5213c","./GeometryAttribute-ded8350c"],function(t,p,n,O,b,a,x){"use strict";var G=Math.cos,f=Math.sin,R=Math.sqrt,r={computePosition:function(t,n,a,r,e,o,s){var i,c=n.radiiSquared,g=t.nwCorner,h=t.boundingRectangle,u=g.latitude-t.granYCos*r+e*t.granXSin,C=G(u),l=f(u),S=c.z*l,d=g.longitude+r*t.granYSin+e*t.granXCos,w=C*G(d),M=C*f(d),X=c.x*w,Y=c.y*M,m=R(X*w+Y*M+S*l);o.x=X/m,o.y=Y/m,o.z=S/m,a&&(i=t.stNwCorner,p.defined(i)?(u=i.latitude-t.stGranYCos*r+e*t.stGranXSin,d=i.longitude+r*t.stGranYSin+e*t.stGranXCos,s.x=(d-t.stWest)*t.lonScalar,s.y=(u-t.stSouth)*t.latScalar):(s.x=(d-h.west)*t.lonScalar,s.y=(u-h.south)*t.latScalar))}},y=new x.Matrix2,v=new b.Cartesian3,P=new b.Cartographic,W=new b.Cartesian3,_=new a.GeographicProjection;function T(t,n,a,r,e,o,s){var i=Math.cos(n),c=r*i,g=a*i,h=Math.sin(n),u=r*h,C=a*h;v=_.project(t,v),v=b.Cartesian3.subtract(v,W,v);var l=x.Matrix2.fromRotation(n,y);v=x.Matrix2.multiplyByVector(l,v,v),v=b.Cartesian3.add(v,W,v),--o,--s;var S=(t=_.unproject(v,t)).latitude,d=S+o*C,w=S-c*s,M=S-c*s+o*C,X=Math.max(S,d,w,M),Y=Math.min(S,d,w,M),m=t.longitude,p=m+o*g,G=m+s*u,f=m+s*u+o*g;return{north:X,south:Y,east:Math.max(m,p,G,f),west:Math.min(m,p,G,f),granYCos:c,granYSin:u,granXCos:g,granXSin:C,nwCorner:t}}r.computeOptions=function(t,n,a,r,e,o,s){var i=t.east,c=t.west,g=t.north,h=t.south,u=!1,C=!1;g===O.CesiumMath.PI_OVER_TWO&&(u=!0),h===-O.CesiumMath.PI_OVER_TWO&&(C=!0);var l,S,d,w=g-h,M=(l=i<c?O.CesiumMath.TWO_PI-c+i:i-c)/((S=Math.ceil(l/n)+1)-1),X=w/((d=Math.ceil(w/n)+1)-1),Y=b.Rectangle.northwest(t,o),m=b.Rectangle.center(t,P);0===a&&0===r||(m.longitude<Y.longitude&&(m.longitude+=O.CesiumMath.TWO_PI),W=_.project(m,W));var p,G,f,x=X,R=M,y=b.Rectangle.clone(t,e),v={granYCos:x,granYSin:0,granXCos:R,granXSin:0,nwCorner:Y,boundingRectangle:y,width:S,height:d,northCap:u,southCap:C};return 0!==a&&(g=(p=T(Y,a,M,X,0,S,d)).north,h=p.south,i=p.east,c=p.west,v.granYCos=p.granYCos,v.granYSin=p.granYSin,v.granXCos=p.granXCos,v.granXSin=p.granXSin,y.north=g,y.south=h,y.east=i,y.west=c),0!==r&&(a-=r,f=T(G=b.Rectangle.northwest(y,s),a,M,X,0,S,d),v.stGranYCos=f.granYCos,v.stGranXCos=f.granXCos,v.stGranYSin=f.granYSin,v.stGranXSin=f.granXSin,v.stNwCorner=G,v.stWest=f.west,v.stSouth=f.south),v},t.RectangleGeometryLibrary=r});
