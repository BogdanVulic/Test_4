import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4';
const LAUNCHES = '/launches';
const ROCKETS = '/rockets';

export const getLaunches = () => axios.get(`${URL}${LAUNCHES}`);
export const getRockets = () => axios.get(`${URL}${ROCKETS}`);