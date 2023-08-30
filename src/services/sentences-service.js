import sentencesRepository from "../repositories/sentences-repository.js";

function getSentences() {
  const result = sentencesRepository.getSentences();
  return result;
}

function getSentence(id) {
  // FIXME: Lançar erro se não vierem resultados
  const result = sentencesRepository.getSentenceById(id);
  return result;
}

function createSentence(author, sentence) {
  // FIXME: Lançar erro se já existir a sentença cadastrada (é unique)
  return sentencesRepository.createSentence(author, sentence);
}

const sentencesService = {
  getSentences,
  getSentence,
  createSentence
}

export default sentencesService;