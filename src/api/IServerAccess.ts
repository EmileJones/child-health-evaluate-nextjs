import { ChildInfo } from "@/entity/ChildEntity";
import { R, UploadData } from '../entity/NetWorkEntity';

export default interface IServerAccess {
    isLogin(): boolean;
    login(userName: string, password: string): Promise<void>;
    getPatientsFile(year: number): Promise<string>;
    getStatisticsFile(year: number): Promise<string>;
    assessFile(file: File): Promise<R>;
    getChildInfoByIdentity(identity: string): Promise<ChildInfo | undefined>;
    getChildInfoByName(name: string): Promise<Array<ChildInfo>>;
    getUploadExceptionChildInfo(): Promise<Array<ChildInfo>>;
    updateUploadStatus(uploadData: UploadData): Promise<number>;
    getHospitalVersion(): Promise<string>;
}

