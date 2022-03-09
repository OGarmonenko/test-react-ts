export default function getNumberRecord(record: string) {
    return record.replace(/[^0-9]/g,"")
}

