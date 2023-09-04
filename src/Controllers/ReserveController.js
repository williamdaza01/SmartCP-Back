const Reserve = require("../Models/ReserveModel");
const Square = require("../Models/SquareModel");

const createReserve = async (req, res) => {
  const reserveData = req.body;

  try {
    const newReserve = new Reserve(reserveData);
    const savedReserve = await newReserve.save();

    const squareId = reserveData.id_square;

    const updatedSquare = await Square.findByIdAndUpdate(
      squareId,
      { state: true },
      { new: true }
    );

    res.status(201).json({ savedReserve, updatedSquare });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear reserva" });
  }
};

const getReserves = async (req, res) => {
  try {
    const reserves = await Reserve.find();
    res.status(200).json(reserves);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener reservas" });
  }
};

const getReserve = async (req, res) => {
  const { id } = req.params;
  try {
    const reserve = await Reserve.findById(id);
    res.status(200).json(reserve);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener reserva" });
  }
};

const deleteReserve = async (req, res) => {
  const { id } = req.params;
  try {
    const reserve = await Reserve.findById(id);

    if (!reserve) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }

    const squareId = reserve.id_square;

    await Reserve.findByIdAndDelete(id);

    const updatedSquare = await Square.findByIdAndUpdate(
      squareId,
      { state: false },
      { new: true }
    );

    res.status(200).json({ reserve, updatedSquare });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar reserva" });
  }
};

const updateReserve = async (req, res) => {
  const { id } = req.params;
  const reserveData = req.body;
  try {
    const reserve = await Reserve.findByIdAndUpdate(id, reserveData);
    res.status(200).json(reserve);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar reserva" });
  }
};

module.exports = {
  createReserve,
  getReserves,
  getReserve,
  deleteReserve,
  updateReserve,
};
