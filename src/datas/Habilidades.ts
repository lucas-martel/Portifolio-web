export type HabilityInfo = {
  habType: string;
  titles: string[];
};

export type Hability = {
  infos: HabilityInfo[];
};

export const HabilityData: Hability = {
  infos: [
    { habType: "Técnicas", titles: ["word", "excel", "pedreira", "algebra", "fisica"] },
    {
      habType: "Sociais",
      titles: ["inteligente", "fofa", "estressada", "calma"],
    },
  ],
};
