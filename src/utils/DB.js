export const serializeDb = function (db) {
  return JSON.stringify(db);
};
export const deserializeDb = function (dbString) {
  return JSON.parse(dbString);
};

export const getLocalDb = function () {
  const dbString =
    localStorage.getItem("db") || '{"times":{},"reservations":{}}';
  return deserializeDb(dbString);
};

export const setLocalDb = function (db) {
  localStorage.setItem("db", serializeDb(db));
};
