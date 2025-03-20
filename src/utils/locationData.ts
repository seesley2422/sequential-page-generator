
// Taiwan location data for city and district dropdowns
export interface LocationData {
  city: string;
  districts: { name: string; code: string }[];
}

export const taiwanLocations: LocationData[] = [
  {
    city: '臺北市',
    districts: [
      { name: '中正區', code: '100' },
      { name: '大同區', code: '103' },
      { name: '中山區', code: '104' },
      { name: '松山區', code: '105' },
      { name: '大安區', code: '106' },
      { name: '萬華區', code: '108' },
      { name: '信義區', code: '110' },
      { name: '士林區', code: '111' },
      { name: '北投區', code: '112' },
      { name: '內湖區', code: '114' },
      { name: '南港區', code: '115' },
      { name: '文山區', code: '116' },
    ],
  },
  {
    city: '新北市',
    districts: [
      { name: '板橋區', code: '220' },
      { name: '新莊區', code: '242' },
      { name: '中和區', code: '235' },
      { name: '永和區', code: '234' },
      { name: '土城區', code: '236' },
      { name: '樹林區', code: '238' },
      { name: '三峽區', code: '237' },
      { name: '鶯歌區', code: '239' },
      { name: '三重區', code: '241' },
      { name: '蘆洲區', code: '247' },
      { name: '五股區', code: '248' },
      { name: '泰山區', code: '243' },
      { name: '林口區', code: '244' },
      { name: '淡水區', code: '251' },
      { name: '金山區', code: '208' },
      { name: '八里區', code: '249' },
      { name: '萬里區', code: '207' },
      { name: '石門區', code: '253' },
      { name: '三芝區', code: '252' },
      { name: '瑞芳區', code: '224' },
      { name: '汐止區', code: '221' },
      { name: '平溪區', code: '226' },
      { name: '貢寮區', code: '228' },
      { name: '雙溪區', code: '227' },
      { name: '深坑區', code: '222' },
      { name: '石碇區', code: '223' },
      { name: '新店區', code: '231' },
      { name: '坪林區', code: '232' },
      { name: '烏來區', code: '233' },
    ],
  },
  {
    city: '基隆市',
    districts: [
      { name: '仁愛區', code: '200' },
      { name: '信義區', code: '201' },
      { name: '中正區', code: '202' },
      { name: '中山區', code: '203' },
      { name: '安樂區', code: '204' },
      { name: '暖暖區', code: '205' },
      { name: '七堵區', code: '206' },
    ],
  },
  {
    city: '桃園市',
    districts: [
      { name: '桃園區', code: '330' },
      { name: '中壢區', code: '320' },
      { name: '平鎮區', code: '324' },
      { name: '八德區', code: '334' },
      { name: '楊梅區', code: '326' },
      { name: '蘆竹區', code: '338' },
      { name: '大溪區', code: '335' },
      { name: '龍潭區', code: '325' },
      { name: '龜山區', code: '333' },
      { name: '大園區', code: '337' },
      { name: '觀音區', code: '328' },
      { name: '新屋區', code: '327' },
      { name: '復興區', code: '336' },
    ],
  },
  {
    city: '新竹市',
    districts: [
      { name: '東區', code: '300' },
      { name: '北區', code: '300' },
      { name: '香山區', code: '300' },
    ],
  },
  {
    city: '新竹縣',
    districts: [
      { name: '竹北市', code: '302' },
      { name: '竹東鎮', code: '310' },
      { name: '新埔鎮', code: '305' },
      { name: '關西鎮', code: '306' },
      { name: '湖口鄉', code: '303' },
      { name: '新豐鄉', code: '304' },
      { name: '峨眉鄉', code: '315' },
      { name: '寶山鄉', code: '308' },
      { name: '北埔鄉', code: '314' },
      { name: '芎林鄉', code: '307' },
      { name: '橫山鄉', code: '312' },
      { name: '尖石鄉', code: '313' },
      { name: '五峰鄉', code: '311' },
    ],
  },
];

// Utility function to get districts based on city
export const getDistrictsByCity = (city: string) => {
  const cityData = taiwanLocations.find(location => location.city === city);
  return cityData ? cityData.districts.sort((a, b) => a.code.localeCompare(b.code)) : [];
};

// Get all cities
export const getAllCities = () => {
  return taiwanLocations.map(location => location.city);
};
