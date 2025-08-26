const modelo = require('../modelo/ParqueoModelo');

const obtenerParqueos = (req, res) => {
  const parqueos = modelo.getAllParqueos();
  res.json(parqueos);
};

const crearParqueo = (req, res) => {
  const { t1 :idParqueo, t2 :placa, t3 :nombres,t4 :apertamento,t5 : celdaparqueo } = req.body;

  if (modelo.getParqueoById(idParqueo)) {
    return res.status(400).json({ error: 'El parqueo ya existe' });
  }

  const nuevo = {
    idParqueo,
    placa,
    nombres,
    apertamento,
    celdaparqueo
  };

  const parqueoCreado = modelo.addParqueo(nuevo);
  res.status(201).json(parqueoCreado);
};

const actualizarParqueo = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const actualizado = modelo.updateParqueo(id, data);
  if (!actualizado) {
    return res.status(404).json({ error: 'Parqueo no encontrado' });
  }

  res.json(actualizado);
};

const eliminarParqueo = (req, res) => {
  const id = req.params.idParqueo;

  const eliminado = modelo.deleteParqueo(id);
  if (!eliminado) {
    return res.status(404).json({ error: 'El parqueo no fue encontrado' });
  }

  res.json({ mensaje: 'Parqueo eliminado', parqueo: eliminado });
};

module.exports = {
  obtenerParqueos,
  crearParqueo,
  actualizarParqueo,
  eliminarParqueo
};
