import { UploadStatus } from "./ChildEntity";

export interface R {
    code: number;
    msg: string;
    result?: any;
}

export interface UploadData {
    limit: number;
    uploadStatus: Array<UploadStatus>
}