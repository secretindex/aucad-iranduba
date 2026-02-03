export type InactiveStandard = {
  pis: string
  beneficioPrevidenciario: string
  tituloEleitor: string
  atoDeNomeacao: string
  atoDeConcessao: string
}

const inactivesStandard: InactiveStandard = {
  pis: "NIT/PIS/PASEP/NIS ou documento oficial que contenha a informação",
  beneficioPrevidenciario: "Declaração de Benefício Previdenciário emitida a partir do site meu.inss.gov.br",
  tituloEleitor: "Titulo Eleitor",
  atoDeNomeacao: "Ato de Nomeacao no cargo efetivo",
  atoDeConcessao: "Ato de Concessao do Benefício de Aposentadoria",
}

export { inactivesStandard }
