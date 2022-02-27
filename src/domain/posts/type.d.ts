type PostInfo = {
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  ogLocale: string;
  ogType: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogSiteName: string;
  ogImage: {
    url: 'https://maxkim-j.github.io/uploads/2021-retrospect/%EC%88%9C%EC%8B%AC.jpeg';
    type: 'jpeg';
  };
};

interface LocalPostInfoData extends PostInfo {
  id: number;
}
