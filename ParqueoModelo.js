let parqueos = [];

const getAllParqueos = () => parqueos;

const getParqueoById = (idParqueo) =>
  parqueos.find(p => p.idParqueo=== idParqueo);

const addParqueo = (parqueo) => {
  parqueos.push(parqueo);
  return parqueo;
};

const updateParqueo = (idParqueo, data) => {
  const index = parqueos.findIndex(p => p.idParqueo === idParqueo);
  if (index === -1) return null;

  parqueos[index] = { ...parqueos[index], ...data };
  return parqueos[index];
};

const deleteParqueo = (idParqueo) => {
  const index = parqueos.findIndex(p => p.idParqueo === idParqueo);
  if (index === -1) return null;

  const eliminado = parqueos.splice(index, 1);
  return eliminado[0];
};

module.exports = {
  getAllParqueos,
  getParqueoById,
  addParqueo,
  updateParqueo,
  deleteParqueo
};