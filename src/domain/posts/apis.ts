import axios from 'axios';

export async function loadPostInfo(url: string): Promise<PostInfo> {
  const response = await axios.get(
    `https://tnbyqqp3fb.execute-api.us-east-1.amazonaws.com/default/retrievePostInfo?url=${url}`
  );
  return response.data;
}
