export interface ChildInfo {
    /**
    * 用户唯一id
    */
    id: number;
    /**
     * 身份证
     */
    identity: string;
    /**
     * 姓名
     */
    name: string | undefined;
    /**
     * 性别
     */
    gender: string;
    /**
     * 民族
     */
    nationality: string | undefined;
    /**
     * 户口所在地
     */
    domicile: string | undefined;
    /**
     * 户口
     */
    registration: string | undefined;
    /**
     * 父亲名称
     */
    fatherName: string | undefined;
    /**
     * 母亲名称
     */
    motherName: string | undefined;
    /**
     * 家庭住址
     */
    homeAddress: string | undefined;
    /**
     * 手机号
     */
    phone: string | undefined;
    /**
     * 体检记录（按时间排序，早的在前面）
     */
    inspectInfos: Array<InspectInfo> | undefined;
}

export interface InspectInfo {
    id: number;
    ageMonth: number | undefined;
    schoolName: string | undefined;
    className: string | undefined;
    height: number | undefined;
    weight: number | undefined;
    hb: number | undefined;
    spirit: Array<string> | undefined;
    toothNum: number | undefined;
    decayedToothNum: number | undefined;
    oralIlls: Array<string> | undefined;
    nakedEyeVisionL: number | undefined;
    nakedEyeVisionR: number | undefined;
    sphL: number | undefined;
    sphR: number | undefined;
    cylL: number | undefined;
    cylR: number | undefined;
    axisL: number | undefined;
    axisR: number | undefined;
    inspectTime: Date;
    inspectType: number;
    other: Array<string> | undefined;
    eyeSightIlls: Array<string> | undefined;
    assessResult: AssessResult | undefined;
    uploadStatus: UploadStatus | undefined;
}

export interface UploadStatus {
    inspectId: number;
    status: number;
    needUpload: boolean;
    message: string | undefined;
}

export interface AssessResult {
    /**
     * 身高评估
     */
    ageHeight: string | undefined;
    /**
     * 体重评估
     */
    ageWeight: string | undefined;
    /**
     * 匀称度评估
     */
    heightWeight: string | undefined;
    /**
     * hb评估
     */
    hb: string | undefined;
    /**
     * 视力评估
     */
    eyesight: Array<string> | undefined;
    /**
     * 屈光评估
     */
    refraction: Array<string> | undefined;
}