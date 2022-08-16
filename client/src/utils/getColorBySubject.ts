import data from 'api/dummy-data.json'
const {colors, subjectColors} = data

export const getBgColorBySubject = (subject: string) => {
    const colorId = subjectColors.find(s=>s.subject===subject)!.colorId
    return colorId ? colors.find(c=>c.id===colorId)!.hex : '#ACCDEE'
}