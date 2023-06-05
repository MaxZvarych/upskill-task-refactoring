import axios, {Method} from 'axios';
import fs from 'fs';
import FormData from 'form-data';

interface Options {
  method: Method;
  url: string;
  headers: any;
  data: any;
}

export const checkAge =  async (image: any) => {
  if (!image.dataUrl) return
  const data = new FormData();
  data.append('image_file', image.file);

  const options: Options = {
    method: "post",
    url: 'https://promity-age-and-gender-recognition.p.rapidapi.com/age_gender/process_file',
    headers: {
      'X-RapidAPI-Key': 'a6de7896c3msh2615fb08f6c602cp1b5c5ajsne893b5e2d801',
      'X-RapidAPI-Host': 'promity-age-and-gender-recognition.p.rapidapi.com'},
    data: data
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};