import axios, { AxiosInstance, AxiosResponse } from "axios";
import IServerAccess from "./IServerAccess";
import { ChildInfo } from "@/entity/ChildEntity";
import { R } from '../entity/NetWorkEntity';

export class ServerAccess implements IServerAccess {
    private token: string | undefined;
    private request: AxiosInstance = axios.create({
        baseURL: `/api`,
        timeout: 10000
    });

    async login(userName: string, password: string): Promise<void> {
        const res: AxiosResponse<R> = await this.request({
            method: 'post',
            url: '/login',
            params: { userName, password },
            responseType: 'json'
        });

        if (res.status !== 200)
            throw new Error("登录失败");

        if (res.data.code !== 200)
            throw new Error(res.data.msg);

        this.token = res.data.result.token;
    }

    async getPatientsFile(year: number): Promise<string> {
        const res: AxiosResponse<R | string> = await this.request({
            method: 'get',
            headers: { 'Token': this.token },
            url: '/patients',
            params: { year },
            responseType: 'json'
        });
        if (res.status !== 200)
            throw new Error(res.data as string);
        const dataAsR = res.data as R
        if (dataAsR.code !== 200)
            throw new Error(dataAsR.msg);
        return dataAsR.result;
    }
    async getStatisticsFile(year: number): Promise<string> {
        const res: AxiosResponse<R | string> = await this.request({
            method: 'get',
            headers: { 'Token': this.token },
            url: '/statistics',
            params: { year },
            responseType: 'json'
        });

        if (res.status !== 200)
            throw new Error(res.data as string);
        const dataAsR = res.data as R
        if (dataAsR.code !== 200)
            throw new Error(dataAsR.msg);
        return dataAsR.result;
    }

    async assessFile(file: File): Promise<R> {
        const formdata = new FormData()
        formdata.append("file", file)
        const res: AxiosResponse<R | string> = await this.request({
            method: 'post',
            url: `/assess`,
            headers: { 'Token': this.token },
            responseType: 'json',
            data: formdata
        });

        if (res.status !== 200)
            throw new Error(res.data as string);

        return res.data as R;
    }

    async getChildInfoByIdentity(identity: string): Promise<ChildInfo | undefined> {
        const res: AxiosResponse<R | string> = await this.request({
            method: 'get',
            url: `/update/identity/${identity}`,
            headers: { Token: this.token },
            responseType: 'json'
        });

        if (res.status !== 200)
            throw new Error(res.data as string);
        const dataAsR = res.data as R
        if (dataAsR.code !== 200)
            throw new Error(dataAsR.msg);

        return dataAsR.result as ChildInfo;
    }
    async getChildInfoByName(name: string): Promise<Array<ChildInfo>> {
        const res: AxiosResponse<R | string> = await this.request({
            method: 'get',
            url: `/update/name/${name}`,
            headers: { Token: this.token },
            responseType: 'json'
        });

        if (res.status !== 200)
            throw new Error(res.data as string);
        const dataAsR = res.data as R
        if (dataAsR.code !== 200)
            throw new Error(dataAsR.msg);

        return dataAsR.result as Array<ChildInfo>;
    }
    isLogin(): boolean {
        if (this.token === undefined)
            return false;
        return true;
    }
}

const serverAccess = new ServerAccess();
export default serverAccess;