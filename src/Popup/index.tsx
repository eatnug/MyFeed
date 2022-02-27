import React, { ReactElement, useState } from 'react';
import { savePost } from '../domain/posts/storage';
import { loadPostInfo } from '../domain/posts/apis';
import getCurrentTabInfo from '../shared/utils/getCurrentTabInfo';

async function getPostInfoFromUrl() {
  const tab = await getCurrentTabInfo();
  if (!tab.url) return alert('url을 읽어오지 못했습니다.');
  const info = await loadPostInfo(tab.url);
  return info;
}
function Popup(): ReactElement {
  const [loading, setLoading] = useState<boolean>();

  async function handleClickSave(): Promise<void> {
    try {
      setLoading(true);
      const postInfo = await getPostInfoFromUrl();
      if (!postInfo) return alert('정보를 읽어오지 못했습니다.');
      savePost(postInfo);
      alert('저장되었습니다!');
    } catch (error) {
      alert(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? '로딩중' : '저장'}
      <button onClick={handleClickSave}>저장하기</button>
    </div>
  );
}

export default Popup;
