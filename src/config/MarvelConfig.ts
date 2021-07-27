import { Md5 } from 'ts-md5/dist/md5';

const PUBLIC_KEY = '59732cfdee998d20f1da7c60584ab678';
const PRIVATE_KEY = 'd8f4bee8c96110d0ad9a4c3af55386176867672d';
const times = Number(new Date());

const hash = Md5.hashStr(times + PRIVATE_KEY + PUBLIC_KEY);

export default {
  timestamp: times,
  apiKey: PUBLIC_KEY,
  md5: hash,
};
