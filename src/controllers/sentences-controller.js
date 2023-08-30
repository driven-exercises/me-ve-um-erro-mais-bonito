import httpStatus from "http-status";
import sentencesService from "../services/sentences-service.js";

async function getSentences(req, res) {
  const sentences = sentencesService.getSentences();
  res.send(sentences);
}

async function getSentence(req, res) {
  const { id } = req.params; // FIXME: Tratar caso onde o id não é um número inteiro positivo
  const sentences = sentencesService.getSentence(parseInt(id));
  res.send(sentences);
}

async function createSentence(req, res) {
  const { body } = req;
  const { author, sentence } = body; // FIXME: Tratar caso onde os valores não são preenchidos (ou vazios)

  sentencesService.createSentence(author, sentence);
  res.sendStatus(httpStatus.CREATED);
}

const sentencesController = {
  getSentences,
  getSentence,
  createSentence
}

export default sentencesController;