import React, {useState, useEffect, Component} from 'react';
import ThumbnailContainer from './ThumbnailContainer';

import axios from 'axios';
import { render } from 'react-dom';

// function useFetch() {
    
    // function fetchUrl() {
    //     axios.get(url).then(response => {
    //         setData(response.data);
    //         console.log('main fetch function is well called');
    //     });
    //     setLoading(false);
    // }

    // return data;
// }

const ContentListMain = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const callApi = async () => {
    try {
      const response = await axios.get('/api')
      setData(response.data)
    } catch(err) {
      console.log("Error >>", err);
    }
}
  useEffect(() => {
    callApi();
  }, loading);
  
  //TODO: Javascript에 에러 짱많음 ㅋ
    //useFetch 쓰려고 할 때 진창남

    // const data = [
    //     {
    //       id: 0,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-1893560174_iZkhIY6F_EC82ACEBACB4EC8BA42_247x172.jpg',
    //       title: '강남 착한 사무실 필요하신 분~',
    //       location: '서울 신사역',
    //     },
    //     {
    //       id: 1,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-1893633084_me4idWAg_EC82ACEBACB4EC8BA41_247x172.jpg',
    //       title: '종각역 부근 일반사무실 공유합니다.',
    //       location: '서울 종각역',
    //     },
    //     {
    //       id: 2,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-3034938011_lHTj6vmD_01_247x172.jpg',
    //       title: '[합정역 7번출구 부근] 디자인 사무실 쉐어 합니다.',
    //       location: '서울 합정역',
    //     },
    //     {
    //       id: 3,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-1028286489_4UucdYhI_L01_247x172.jpg',
    //       title: '[ 양재역 1번출구 오피스텔 ] 모두 1인 개인사업자입니다 (1석)',
    //       location: '서울 양재역',
    //     },
    //     {
    //       id: 4,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-1925711294_M6zht5f7_KakaoTalk_20210203_175356564_06_247x172.jpg',
    //       title: '광교 상현역 도보5분 법조단지 사무실 공유(2자리)',
    //       location: '용인 상현역',
    //     },
    //     {
    //       id: 5,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-1030337746_odgn4iUH_KakaoTalk_20220110_173754421_03_247x172.jpg',
    //       title: '서초역 도보5분, 세련되고 깔끔한 화이트톤 20평 IT사무실 (1인~5인 구함)',
    //       location: '서울 서초역',
    //     },
    //     {
    //       id: 6,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-3667435369_Rq3GMkLV_1_1_247x172.png',
    //       title: '성수동에서 사무실쉐어하실 디자인업계분들을 모집합니다~!',
    //       location: '서울 성수역',
    //     },
    //     {
    //       id: 7,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-1893477772_by79ePjd_KakaoTalk_20220105_175827442_247x172.jpg',
    //       title: '사무실 전체 또는 일부 사용 하실분 구합니다',
    //       location: '서울 구로디지털역',
    //     },
    //     {
    //       id: 8,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-3553204738_lVCGXKHJ_200210-7000-2000x1334-h_247x172.jpg',
    //       title: '[더래빗홀15]The Rabbit Hole 15 - 어딘가 모자란 친구들이 노나먹으면서 생활하는 자유로운 공유공간입니다. [지정 15만]',
    //       location: '서울 신림역',
    //     },
    //     {
    //       id: 9,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-2040379482_wl78MBfV_7D61BDDB-9E66-4F30-A91E-577FACB615D8_247x172.jpg',
    //       title: '분당 야탑역 공방쉐어',
    //       location: '성남 야탑역',
    //     },
    //     {
    //       id: 10,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-3077398983_BMgJuiaw_EC82ACEBACB4EC8BA4_247x172.jpg',
    //       title: '7호선보라매역 2번출구 2분거리 교통편리 및 사무실 깨끗하고 조용합니다.',
    //       location: '서울 보라매역',
    //     },
    //     {
    //       id: 11,
    //       img: 'http://officedot.co.kr/data/file/joint_01/thumb-3535039444_7RUXIGZy_1_247x172.jpg',
    //       title: '[마곡]개별 파티션의 전용공간 사무실 공유합니다.',
    //       location: '서울 마곡나루역',
    //     },
    //   ];
  
    return (
        <div>
            <ThumbnailContainer itemData={data}></ThumbnailContainer>
        </div>
    );
    
}

export default ContentListMain;