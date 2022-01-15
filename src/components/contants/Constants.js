export const Point = {
  DANH_TU: 1,
  TINH_TU: 1,
  DONG_TU: 1,
  DANH_TU_CHI_DON_VI_DO_LUONG: 2,
  DANH_TU_CHI_DINH: 2,
  PHO_TU: 1,
  PHO_TU_DUNG_SAU: 1,
  PHO_TU_DUNG_TRUOC: 1,
  SO_TU_CHI_SO_LUONG: 2,
  DANH_TU_LOAI_THE: 2,
  DANN_TU_CHI_TONG_LUONG: 2,
  DINH_TU_CHI_SO_LUONG: 1,
  TINH_THAI_TU: 1,
  DAI_TU: 2,
  THAN_TU: 1,
  TINH_TU_CHI_CACH_THU_MUC_DO: 2,
  TINH_THAI_TU_CAU_KHIEN: 2,
  TINH_THAI_TU_NGHI_VAN: 2,
  QUAN_HE_TU: 1,
  DAI_TU_CHI_DINH: 1,
};

export const RulesOfPhraese = {
  CUM_DANH_TU: [
    {
      types: ["DAI_TU_CHI_TONG_LUONG"],
      value: "",
    },
    {
      types: ["DINH_TU_CHI_SO_LUONG", "SO_TU_CHI_SO_LUONG"],
      value: "",
    },
    {
      types: ["DANH_TU_LOAI_THE", "DANH_TU_CHI_DON_VI_DO_LUONG"],
      value: "",
    },
    {
      types: ["DANH_TU"],
      value: "",
    },
    {
      types: ["TINH_TU", "DONG_TU"],
      value: "",
    },
    {
      types: ["DAI_TU_CHI_DINH"],
      value: "",
    },
  ],
  CUM_DONG_TU: [
    {
      types: ["PHO_TU_DUNG_TRUOC"],
      value: "",
    },
    {
      types: ["TINH_TU"],
      value: "",
    },
    {
      types: ["DONG_TU"],
      value: "",
    },
    {
      types: ["PHO_TU_DUNG_SAU"],
      value: "",
    },
    {
      types: ["TINH_THAI_TU"],
      value: "",
    },
    {
      types: ["DANH_TU"],
      value: "",
    },
  ],
  CUM_TINH_TU: [
    {
      types: ["DANH_TU"],
      value: "",
    },
    {
      types: ["DONG_TU"],
      value: "",
    },
    {
      types: ["PHO_TU_DUNG_TRUOC"],
      value: "",
    },
    {
      types: ["TINH_TU"],
      value: "",
    },
    {
      types: ["PHO_TU_DUNG_SAU"],
      value: "",
    },
  ],
};

export const RulesOfC = [
  {
    types: ["DANH_TU"],
    value: "",
    point: 5,
  },
  {
    types: ["DANH_NGU"],
    value: "",
    point: 5,
  },
  {
    types: ["DAI_TU"],
    value: "",
    point: 3,
  },
  {
    types: ["TINH_TU"],
    value: "",
    point: 3,
  },
  {
    types: ["TINH_NGU"],
    value: "",
    point: 3,
  },
  {
    types: ["DONG_TU"],
    value: "",
    point: 3,
  },
  {
    types: ["DONG_NGU"],
    value: "",
    point: 3,
  },
  {
    types: ["SO_TU"],
    value: "",
    point: 3,
  },
];

export const RulesOfV = [
  {
    prevWord: "",
    types: ["DANH_TU"],
    value: "",
    point: 5,
  },
  {
    prevWord: "",
    types: ["DANH_NGU"],
    value: "",
    point: 5,
  },
  {
    prevWord: "là",
    types: ["DANH_TU"],
    value: "",
    point: 5,
  },
  {
    prevWord: "là",
    types: ["DANH_NGU"],
    value: "",
    point: 5,
  },
  {
    prevWord: "là",
    types: ["TINH_TU"],
    value: "",
    point: 3,
  },
  {
    prevWord: "",
    types: ["TINH_NGU"],
    value: "",
    point: 3,
  },
  {
    prevWord: "",
    types: ["TINH_TU"],
    value: "",
    point: 3,
  },
  {
    prevWord: "là",
    types: ["TINH_NGU"],
    value: "",
    point: 3,
  },
  {
    prevWord: "",
    types: ["DONG_TU"],
    value: "",
    point: 3,
  },
  {
    prevWord: "",
    types: ["DONG_NGU"],
    value: "",
    point: 3,
  },
  {
    types: ["SO_TU"],
    value: "",
    point: 3,
  },
];

export const RulesOfT = [];

export const TYPE_BELONG_TO_NOUN = [
  "DAI_TU_CHI_TONG_LUONG",
  "DINH_TU_CHI_SO_LUONG",
  "SO_TU_CHI_SO_LUONG",
  "DANH_TU_LOAI_THE",
  "DANH_TU_CHI_DON_VI_DO_LUONG",
  "DANH_TU",
  "TINH_TU",
  "DONG_TU",
  "DAI_TU_CHI_DINH",
];
export const TYPE_BELONG_TO_VERB = [
  "PHO_TU_DUNG_TRUOC",
  "TINH_TU",
  "DONG_TU",
  "PHO_TU_DUNG_SAU",
  "TINH_THAI_TU",
  "DANH_TU",
  "DONG_TU",
];
export const TYPE_BELONG_TO_ADJ = [
  "DANH_TU",
  "DONG_TU",
  "TINH_TU",
  "PHO_TU_DUNG_TRUOC",
  "TINH_TU",
  "PHO_TU_DUNG_SAU",
];

export const RulesOfSentences = {};
