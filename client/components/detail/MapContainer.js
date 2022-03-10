import React, {useRef, useState, useEffect} from "react";
export const APPKEY = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;

const MapContainer = (address) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const container = useRef(null);
  
  useEffect(() => {
    const $script = document.createElement("script");
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${APPKEY}&autoload=false&libraries=services`;
    $script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild($script);
    }, []);

  useEffect(() => {
    if (!mapLoaded) return;
    kakao.maps.load(() => {
      var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(37.585373, 127.031710), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      };

      let map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(address.address_road, function(result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new window.kakao.maps.Marker({
            map: map,
            position: coords
        });
        marker.setMap(map)

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
        } 
      })

    })


    
  }, [mapLoaded]);


  
  // useEffect(() => {
  //   if (!mapLoaded) return;
    
  //   kakao.maps.load(() => {
  //       var container = document.getElementById('map');
  //       var options = {
  //                 center: new kakao?.maps.LatLng(33.450701, 126.570667),
  //                 level: 3
  //             };
      
  //       var map = new kakao?.maps.Map(container, options);

  //   })
    
  // }, [mapLoaded]);


  return(
    <div  
      className="map" 
      style={{width:"100%", height: "400px"}}
      ref = {container}
      >  
    </div>
  )
}

export default MapContainer;