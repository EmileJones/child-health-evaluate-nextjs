import { ChildInfo } from "@/entity/ChildEntity";

export default class TableUtils {
    public static convertChildInfoToStringArray(childInfo: ChildInfo): Array<Array<string | undefined>> {
        const result: Array<Array<string | undefined>> = []
        if (childInfo.inspectInfos === undefined)
            return result;

        for (const inspectInfo of childInfo.inspectInfos) {
            const oneResult: Array<string | undefined> = [];
            oneResult.push(childInfo.name)
            oneResult.push(childInfo.identity)
            oneResult.push(childInfo.gender)
            oneResult.push(inspectInfo.schoolName)
            oneResult.push(inspectInfo.className)
            oneResult.push(inspectInfo.ageMonth?.toString())
            oneResult.push(inspectInfo.height?.toString())
            oneResult.push(inspectInfo.weight?.toString())
            oneResult.push(inspectInfo.hb?.toString())
            oneResult.push(inspectInfo.spirit?.join(","))
            oneResult.push(inspectInfo.toothNum?.toString())
            oneResult.push(inspectInfo.decayedToothNum?.toString())
            oneResult.push(inspectInfo.oralIlls?.join(","))
            oneResult.push(inspectInfo.nakedEyeVisionL?.toString())
            oneResult.push(inspectInfo.nakedEyeVisionR?.toString())
            oneResult.push(inspectInfo.sphL?.toString())
            oneResult.push(inspectInfo.sphR?.toString())
            oneResult.push(inspectInfo.cylL?.toString())
            oneResult.push(inspectInfo.cylR?.toString())
            oneResult.push(inspectInfo.axisL?.toString())
            oneResult.push(inspectInfo.axisR?.toString())
            oneResult.push(inspectInfo.eyeSightIlls?.join(','))
            oneResult.push(inspectInfo.other?.join(','))
            result.push(oneResult)
        }
        return result;
    }
    public static getTitle(): Array<string> {
        const title: Array<string> = [];
        title.push("姓名")
        title.push("身份证")
        title.push("性别")
        title.push("学校")
        title.push("班级")
        title.push("年龄")
        title.push("身高")
        title.push("体重")
        title.push("hb")
        title.push("心理")
        title.push("牙齿")
        title.push("龋齿")
        title.push("口腔情况")
        title.push("视力左")
        title.push("视力右")
        title.push("球镜左")
        title.push("球镜右")
        title.push("柱镜左")
        title.push("柱镜右")
        title.push("轴位左")
        title.push("轴位右")
        title.push("眼部情况")
        title.push("其他")
        return title;
    }
}