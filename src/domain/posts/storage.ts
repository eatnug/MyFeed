const POST = 'MyFeed/post';

let using: boolean;

export function savePost(postInfo: PostInfo): void {
  try {
    if (using) return;
    using = true;
    let autoIncrementId: number;
    const queriedData = localStorage.getItem(POST);
    if (!queriedData) {
      autoIncrementId = 1;
      localStorage.setItem(
        POST,
        JSON.stringify([{ ...postInfo, id: autoIncrementId }])
      );
    } else {
      const array = JSON.parse(queriedData);
      autoIncrementId = array.lenth + 1;
      array.push({ ...postInfo, id: autoIncrementId });
      localStorage.setItem(POST, JSON.stringify(array));
    }
  } catch (error) {
  } finally {
    using = false;
    return;
  }
}

export function readPost(id: number): LocalPostInfoData | void {
  const queriedData = localStorage.getItem(POST);
  if (!queriedData) return;
  const array: Array<LocalPostInfoData> = JSON.parse(queriedData);
  const selected = array.find((post) => post.id === id);
  if (!selected) return;
  return selected;
}

export function readAllPosts(): Array<LocalPostInfoData> {
  const queriedData = localStorage.getItem(POST);
  if (!queriedData) return [];
  return JSON.parse(queriedData);
}

export function deletePost(id: number): void {
  try {
    if (using) return;
    using = true;
    const queriedData = localStorage.getItem(POST);
    if (!queriedData) return;
    const array: Array<LocalPostInfoData> = JSON.parse(queriedData);
    localStorage.set(
      POST,
      JSON.stringify(array.filter((post) => post.id !== id))
    );
  } catch (error) {
  } finally {
    using = false;
    return;
  }
}
