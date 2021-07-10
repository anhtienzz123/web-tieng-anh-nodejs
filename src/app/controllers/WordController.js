const wordService = require("../services/WordService");
const Word = require("../models/Word");

class WordController {
  // [Get] /words/:name
  async getByName(req, res, next) {
    const { name } = req.params;

    const word = await wordService.getByName(name);

    if (!word) {
      res.status(400).json({ status: "400", error: "Không tìm thấy" });
      return;
    }

    res.status(200).json(word);
  }
}

module.exports = new WordController();
