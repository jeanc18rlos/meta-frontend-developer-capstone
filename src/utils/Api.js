import { formatToYYYYMMDD } from "./dates";
import { getLocalDb, setLocalDb } from "./DB";

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  const DB = getLocalDb();
  const dateKey = formatToYYYYMMDD(date);

  if (DB.times[dateKey]) {
    return DB.times[dateKey];
  }

  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  DB.times[dateKey] = result;
  setLocalDb(DB);
  return result;
};

export const submitAPI = function (formData, hash) {
  const DB = getLocalDb();
  DB.reservations[hash] = formData;
  setLocalDb(DB);
};

export const cancelAPI = function (hash) {
  const DB = getLocalDb();
  delete DB.reservations[hash];
  setLocalDb(DB);
}

export const fetchReservationsAPI = function (hash) {
  const DB = getLocalDb();
  return DB.reservations[hash];
}