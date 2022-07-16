
class Tools {

    upLoad(){
        console.log('上传文件成功')
    }
}

class Tool {

    upLoad(){
        console.log('上传文件成功3')
    }
}

class Format {

    upLoad(){
        console.log('上传文件成功2')
    }
}

// 具名导出
export const tools = new Tools()
export const tool = new Tool()

// 默认导出
export default new Format()