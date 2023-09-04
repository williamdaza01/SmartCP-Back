const Station = require("../Models/StationModel");

const createStation = async (req, res) => {
  const stationData = req.body;

  try {
    const newStation = new Station(stationData);
    const savedStation = await newStation.save();
    res.status(201).json(savedStation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear estación" });
  }
};

const getStations = async (req, res) => {
  try {
    const stations = await Station.find();
    res.status(200).json(stations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener estaciones" });
  }
};

const getStation = async (req, res) => {
  const { id } = req.params;
  try {
    const station = await Station.findById(id);
    res.status(200).json(station);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener estación" });
  }
};

const updateStation = async (req, res) => {
  const { id } = req.params;
  const stationData = req.body;
  try {
    const station = await Station.findByIdAndUpdate(id, stationData, {
      new: true,
    });
    res.status(200).json(station);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar estación" });
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  try {
    const station = await Station.findByIdAndDelete(id);
    res.status(200).json(station);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar estación" });
  }
};

module.exports = {
  createStation,
  getStations,
  getStation,
  updateStation,
  deleteStation,
};
