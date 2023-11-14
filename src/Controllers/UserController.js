// Controllers/UserController.js
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const existingUser = await User.findOne({
      $or: [
        { email: userData.email },
        { doc: userData.doc },
        { phone: userData.phone },
      ],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El email, doc o teléfono ya están registrados." });
    }
    // Generar una sal única para el usuario
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash de la contraseña con la sal
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    // Crear el usuario con la contraseña hasheada
    const newUser = new User({
      id: userData.id,
      doc: userData.doc,
      name: userData.name,
      lastname: userData.lastname,
      age: userData.age,
      email: userData.email,
      phone: userData.phone,
      password: hashedPassword, // Almacenar el hash de la contraseña
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const existingUser = await User.findOne({
      $or: [
        { email: updatedData.email },
        { doc: updatedData.doc },
        { phone: updatedData.phone },
      ],
      _id: { $ne: userId }, // Excluir al usuario actual de la búsqueda
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El email, doc o teléfono ya están registrados." });
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

const authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    res.status(200).json({ message: "Inicio de sesión exitoso", isLogged: true, user: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al autenticar usuario" });
  }
};

const getUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener usuario" });
  }

}

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }

}

const getUsersByEmail = async (req, res) => {
  try {
    const users = await User.findOne({email: req.params.email});

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }

}

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  authenticateUser,
  getUser,
  getUsers,
  getUsersByEmail
};
