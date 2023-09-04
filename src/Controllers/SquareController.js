const Square = require("../Models/SquareModel");

const createSquare = async (req, res) => {
  const squareData = req.body;

  try {
    const newSquare = new Square(squareData);
    const savedSquare = await newSquare.save();
    res.status(201).json(savedSquare);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear plaza" });
  }
};

const deleteSquare = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSquare = await Square.findByIdAndDelete(id);
    res.status(200).json(deletedSquare);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar plaza" });
  }
};

const updatdeSquare = async (req, res) => {
    const { id } = req.params;
  const newData = req.body;

  try {
    const updatedSquare = await Square.findByIdAndUpdate(id, newData, {
      new: true,
    });
    res.status(200).json(updatedSquare);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar plaza" });
  }

}

const getSquare = async (req, res) => {
    const { id } = req.params;

  try {
    const square = await Square.findById(id);
    res.status(200).json(square);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener plaza" });
  }
}

const getSquares = async (req, res) => {
    try {
    const squares = await Square.find();
    res.status(200).json(squares);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener plazas" });
  }

}

module.exports = {
  createSquare,
  deleteSquare,
  updatdeSquare,
  getSquare,
  getSquares
};
