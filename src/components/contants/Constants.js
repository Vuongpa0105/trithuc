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
  TINH_TU_CHI_CACH_THUC_MUC_DO: 2,
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
    type: "DANH_TU",
    point: 5,
  },
  {
    type: "CUM_DANH_TU",
    point: 5,
  },
  {
    type: "DAI_TU",
    point: 2,
  },
  {
    type: "TINH_TU",
    point: 3,
  },
  {
    type: "CUM_TINH_TU",
    point: 3,
  },
  {
    type: "DONG_TU",
    point: 3,
  },
  {
    type: "CUM_DONG_TU",
    point: 3,
  },
  {
    types: ["SO_TU"],
    point: 3,
  },
];

export const RulesOfV = [
  {
    prevWord: "",
    type: "DANH_TU",
    value: "",
    point: 3,
  },
  {
    prevWord: "",
    type: "CUM_DANH_TU",
    value: "",
    point: 3,
  },
  {
    prevWord: "là",
    type: "DANH_TU",
    value: "",
    point: 7,
  },
  {
    prevWord: "là",
    type: "CUM_DANH_TU",
    value: "",
    point: 7,
  },
  {
    prevWord: "là",
    type: "TINH_TU",
    value: "",
    point: 7,
  },
  {
    prevWord: "",
    type: "CUM_TINH_TU",
    value: "",
    point: 5,
  },
  {
    prevWord: "",
    type: "TINH_TU",
    value: "",
    point: 5,
  },
  {
    prevWord: "là",
    type: "CUM_TINH_TU",
    value: "",
    point: 7,
  },
  {
    prevWord: "",
    type: "DONG_TU",
    value: "",
    point: 5,
  },
  {
    prevWord: "",
    type: "CUM_DONG_TU",
    value: "",
    point: 5,
  },
  {
    type: "SO_TU",
    value: "",
    point: 3,
  },
];

export const RulesOfT = [];

export const RulesOfSentences = {};
