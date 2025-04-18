export interface R {
    code: number;
    msg: string;
    result?: any;
}
export interface UploadStatusTable {
    inspectId: string,
    status: number,
    needUpload: boolean,
    message: string,
    childIdentity: string
}

export interface UploadData {
    limit: number;
    uploadStatus: Array<UploadStatusTable>;
}