const path = require("path");
const { readData, writeData } = require("../utils/fileHelper");

const filePath = path.join(
  __dirname,
  "../data/deconsignations.json"
);

const getAllDeconsignations = (req, res) => {
  const data = readData(filePath);

  res.json(data);
};

const createDeconsignation = (req, res) => {
  const {
    facture,
    avance,
    items,
  } = req.body;

  let totalCgt = 0;
  let totalAr = 0;

  const updatedItems = items.map((item) => {
    const montant = item.nbCgt * item.pu;

    totalCgt += item.nbCgt;
    totalAr += montant;

    return {
      ...item,
      montant,
    };
  });

  const aPayer = facture - totalAr;
  const reste = aPayer - (avance || 0);

  const newData = {
    id: Date.now(),
    date: new Date(),
    facture,
    avance,
    totalCgt,
    totalAr,
    aPayer,
    reste,
    items: updatedItems,
  };

  const existingData = readData(filePath);

  existingData.push(newData);

  writeData(filePath, existingData);

  res.status(201).json(newData);
};

module.exports = {
  createDeconsignation,
  getAllDeconsignations,
};
