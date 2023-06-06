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
      'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
      'X-RapidAPI-Host': `${process.env.REACT_APP_RAPID_API_KEY}`},
    data: data
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};