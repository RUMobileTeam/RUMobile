import { BANNER_PULL, HOME_DATE } from './types';
import firebase from 'firebase';


export const pullBanner = () => {
  return (dispatch) => {
    firebase.database().ref(`/banner`)
    .on('value', snapshot => {
      dispatch({ type: BANNER_PULL, payload: snapshot.val() });
    });
  }
}

export const pullDate = (today) => {

  const weekdays = new Array(7);
  weekdays[0] = 'SUNDAY';
  weekdays[1] = 'MONDAY';
  weekdays[2] = 'TUESDAY';
  weekdays[3] = 'WEDNESDAY';
  weekdays[4] = 'THURSDAY';
  weekdays[5] = 'FRIDAY';
  weekdays[6] = 'SATURDAY';

  const months = new Array(12);
  months[0] = 'JANUARY';
  months[1] = 'FEBRUARY';
  months[2] = 'MARCH';
  months[3] = 'APRIL';
  months[4] = 'MAY';
  months[5] = 'JUNE';
  months[6] = 'JULY';
  months[7] = 'AUGUST';
  months[8] = 'SEPTEMBER';
  months[9] = 'OCTOBER';
  months[10] = 'NOVEMBER';
  months[11] = 'DECEMBER';

  const day = weekdays[today.getDay()];
  const mon = months[today.getMonth()];
  const dayOfMonth = today.getDate().toString();

  const x = `${day}, ${mon} ${dayOfMonth}`;

  return {
    type: HOME_DATE,
    payload: x
  };
}
