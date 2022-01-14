export const Point = {
    DANH_TU: 1,
    TINH_TU: 1,
    DONG_TU: 1,
    DANH_TU_CHI_DON_VI_DO_LUONG: 2,
    DANH_TU_CHI_DINH: 2,
    PHO_TU: 1,
    SO_TU_CHI_SO_LUONG: 2,
    DANH_TU_LOAI_THE: 2,
    DANN_TU_CHI_TONG_LUONG: 2,
    DINH_TU_CHI_SO_LUONG: 1,
    TINH_THAI_TU: 1,
    DAI_TU: 2,
    THAN_TU: 1,
    TINH_TU_CHI_CACH_THU_MUC_DO: 2,
    QUAN_HE_TU: 1
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
        }
    ],
    CUM_DONG_TU: [

    ] ,
    CUM_TINH_TU: [

    ]
}

export const TYPE_BELONG_TO_NOUN = ["DAI_TU_CHI_TONG_LUONG", "DINH_TU_CHI_SO_LUONG", "SO_TU_CHI_SO_LUONG", "DANH_TU_LOAI_THE", "DANH_TU_CHI_DON_VI_DO_LUONG", "DANH_TU", "TINH_TU", "DONG_TU", "DAI_TU_CHI_DINH"]
export const TYPE_BELONG_TO_VERB = []
export const TYPE_BELONG_TO_ADJ = []

export const RulesOfSentences = {
    
}


